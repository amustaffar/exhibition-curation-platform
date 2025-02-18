import { useEffect, useState } from 'react'
import * as artic from './artic'
import { SearchResult } from './types'

type UseSearchArtworkProps = {
  term: string
  page: number
  limit: number
}

export const useSearchArtwork = (props: UseSearchArtworkProps): SearchResult => {
  const [state, setState] = useState<SearchResult>({ total: 0, items: [] })

  useEffect(() => {
    artic.search({
      term: props.term,
      page: props.page,
      limit: props.limit
    }).then((result) => {
      setState(result)
    })
  }, [props.term, props.page, props.limit])

  return state
}
