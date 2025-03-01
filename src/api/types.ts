
export type Artwork = {
  id: string
  title: string
  artist: string
  date: string
  summary: string
  thumbnail: string
  image: string
}

export type Sort = 'date_asc' | 'date_desc' | 'popular'

export type SearchInput = {
  term: string
  page: number
  limit: number
  sort: Sort
}

export type Page = {
  total: number
  items: Array<Artwork>
}

export type SearchResult =
  | { tag: 'ok'; page?: Page; loading: boolean }
  | { tag: 'error' }
