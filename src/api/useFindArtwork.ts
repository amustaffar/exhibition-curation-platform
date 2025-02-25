import { useEffect, useState } from 'react'
import * as artic from './artic'
import { Artwork, Page } from './types'

type UseFindArtworkProps = {
  id: string
}

export const useFindArtwork = (props: UseFindArtworkProps): Artwork | null => {
  const [state, setState] = useState<Artwork | null>(null)

  useEffect(() => {
    setState(null)

    artic.find(props.id).then((result) => {
      setState(result)
    })
  }, [props.id])

  return state
}
