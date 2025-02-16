
export type Artwork = {
  id: string
  title: string
  artist: string
  date: string
  summary: string
  thumbnail: string
  image: string
}

export type SearchInput = {
  term: string
  page: number
  limit: number
}

export type SearchResult = {
  total: number
  items: Array<Artwork>
}
