import { useEffect, useState } from 'react'
import * as artic from './artic'
import * as smk from './smk'
import { Page, SearchInput, SearchResult, Sort } from './types'
import { GalleryKey } from './galleries'

type UseSearchArtworkProps = {
  gallery: GalleryKey
  term: string
  page: number
  limit: number
  sort: Sort
}

export const useSearchArtwork = (props: UseSearchArtworkProps): [SearchResult, () => void] => {
  const [state, setState] = useState<SearchResult>({ tag: 'ok', loading: true })
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!failed) {
      setState((prev) => ({ ...prev, loading: true }))

      search(props.gallery, props)
        .then((page) => {
          setState({ tag: 'ok', page, loading: false })
        }).catch((e) => {
          console.error(e)
          setState({ tag: 'error' })
          setFailed(true)
        })
    }
  }, [props.sort, props.gallery, props.term, props.page, props.limit, failed])

  return [state, () => setFailed(false)]
}

const search = (key: GalleryKey, input: SearchInput): Promise<Page> => {
  switch (key) {
    case 'artic':
      return artic.search(input)
    case 'smk':
      return smk.search(input)
  }
}
