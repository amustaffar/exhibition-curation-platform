
export type GalleryKey = 'artic' | 'smk'

export type Gallery = {
  value: GalleryKey
  label: string
}

export const galleries = (): ReadonlyArray<Gallery> => {
  return [
    { value: 'artic', label: 'The Art Institute of Chicago' },
    { value: 'smk', label: 'National Gallery of Denmark' }
  ]
}
