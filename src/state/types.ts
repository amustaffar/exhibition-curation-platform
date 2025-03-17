import { Artwork } from "../api/types"

export type Exhibition = {
  artworks: ReadonlyArray<Artwork>
  title: string
  id: string
}
