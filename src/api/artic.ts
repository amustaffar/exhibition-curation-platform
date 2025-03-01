import axios from 'axios'
import { Artwork, SearchInput, Page, Sort } from './types'

type ApiArtwork = {
  id: number
  title: string
  date_display: string
  artist_title: string
  short_description: string
  image_id: string
}

type SearchData = {
  pagination: { total: number }
  data: Array<{ id: number }>
}

type FindData = {
  data: Array<ApiArtwork>
}

export const search = async (input: SearchInput): Promise<Page> => {
  const searchResult = await axios.request<SearchData>({
    method: 'GET',
    url: 'https://api.artic.edu/api/v1/artworks/search',
    params: {
      query: { exists: { field: 'image_id' } },
      sort: toSort(input.sort),
      include: 'artist_pivots,dates',
      from: input.page * input.limit,
      size: input.limit,
      q: input.term
    }
  })

  const findResult = await axios.request<FindData>({
    method: 'GET',
    url: 'https://api.artic.edu/api/v1/artworks',
    params: { ids: searchResult.data.data.map((x) => x.id) }
  })

  return {
    total: searchResult.data.pagination.total,
    items: findResult.data.data.map(toArtwork)
  }
}

const toSort = (sort: Sort) => {
  switch (sort) {
    case 'date_asc':
      return [{ date_start: 'asc' }]
    case 'date_desc':
      return [{ date_start: 'desc' }]
    case 'popular':
      return undefined
  }
}

export const find = async (id: string): Promise<Artwork | null> => {
  const findResult = await axios.request<FindData>({
    method: 'GET',
    url: 'https://api.artic.edu/api/v1/artworks',
    params: { ids: [id] }
  })

  const first = findResult.data.data[0]
  return first ? toArtwork(first) : null
}

const toArtwork = (x: ApiArtwork): Artwork => ({
  thumbnail: `https://www.artic.edu/iiif/2/${x.image_id}/full/!400,400/0/default.jpg`,
  image: `https://www.artic.edu/iiif/2/${x.image_id}/full/!1500,1500/0/default.jpg`,
  summary: x.short_description,
  artist: x.artist_title,
  date: x.date_display,
  title: x.title,
  id: `artic|${x.id}`
})
