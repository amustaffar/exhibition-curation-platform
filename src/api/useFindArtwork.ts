import { useEffect, useState } from 'react'
import * as artic from './artic'
import * as smk from './smk'
import { Artwork, Page } from './types'

type UseFindArtworkProps = {
  id: string
}

export const useFindArtwork = (props: UseFindArtworkProps): Artwork | null => {
  const [state, setState] = useState<Artwork | null>(null)

  useEffect(() => {
    setState(null)
    
    const [gallery, id] = props.id.split('|')

    find(gallery, id).then((result) => {
      setState(result)
    })
  }, [props.id])

  return state
}

const find = (gallery: string, id: string): Promise<Artwork | null> => {
  switch (gallery) {
    case 'artic':
      return artic.find(id)
    case 'smk':
      return smk.find(id)
    default:
      return Promise.resolve(null)
  }
}
