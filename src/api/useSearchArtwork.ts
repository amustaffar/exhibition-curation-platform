import { useEffect, useState } from 'react'
import * as artic from './artic'
import { Page, SearchResult } from './types'

type UseSearchArtworkProps = {
  term: string
  page: number
  limit: number
}

export const useSearchArtwork = (props: UseSearchArtworkProps): [SearchResult, () => void] => {
  const [state, setState] = useState<SearchResult>({ tag: 'ok', loading: true })
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!failed) {
      setState((prev) => ({ ...prev, loading: true }))

      artic.search(props)
        .then((page) => {
          setState({ tag: 'ok', page, loading: false })
        }).catch(() => {
          setState({ tag: 'error' })
          setFailed(true)
        })
    }
  }, [props.term, props.page, props.limit, failed])

  return [state, () => setFailed(false)]
}
