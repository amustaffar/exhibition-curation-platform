
export type GalleryKey = 'artic' | 'smk'

export type Gallery = {
  key: GalleryKey
  name: string
}

export const galleries = (): ReadonlyArray<Gallery> => {
  return [
    { key: 'artic', name: 'The Art Institute of Chicago' },
    { key: 'smk', name: 'National Gallery of Denmark' }
  ]
}

export const galleryName = (key: GalleryKey): string => {
  return galleries().find((x) => x.key === key)?.name!
}
