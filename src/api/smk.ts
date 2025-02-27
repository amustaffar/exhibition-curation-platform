import axios from 'axios'
import { Artwork, SearchInput, Page } from './types'

type ApiArtwork = {
  titles: Array<{ title: string }>
  production: Array<{creator: string}>
  production_date: Array<{ period: string}>
  object_number: string
  image_iiif_id: string
}

type SearchData = {
  offset: number
  rows: number
  found: number
  items: Array<ApiArtwork>
}

type FindData = {
  items: Array<ApiArtwork>
}

export const search = async (input: SearchInput): Promise<Page> => {
  const searchResult = await axios.request<SearchData>({
    method: 'GET',
    url: 'https://api.smk.dk/api/v1/art/search',
    params: {
      filters: 'has_image:true',
      offset: input.page * input.limit,
      rows: input.limit,
      keys: input.term || '*',
      sort: 'production_dates_start',
      sort_type: input.sortOrder
    }
  })

  return {
    total: searchResult.data.found,
    items: searchResult.data.items.map(toArtwork)
  }
}

export const find = async (id: string): Promise<Artwork | null> => {
  const findResult = await axios.request<FindData>({
    method: 'GET',
    url: 'https://api.smk.dk/api/v1/art',
    params: { object_number: [id] }
  })

  const first = findResult.data.items[0]
  return first ? toArtwork(first) : null
}

const toArtwork = (x: ApiArtwork): Artwork => ({
  thumbnail: `${x.image_iiif_id}/full/!400,400/0/default.jpg`,
  image: `${x.image_iiif_id}/full/!1500,1500/0/default.jpg`,
  summary: "",
  artist: x.production?.[0]?.creator ?? 'Unknown',
  date: x.production_date?.[0]?.period ?? 'Unknown',
  title: x.titles?.[0]?.title ?? 'Unknown',
  id: `smk|${x.object_number}`
})