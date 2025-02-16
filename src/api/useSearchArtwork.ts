import { useEffect, useState } from 'react'
import * as artic from './artic'
import { SearchResult } from './types'

export const useSearchArtwork = (): SearchResult => {
  const [state, setState] = useState<SearchResult>({ total: 0, items: [] })

  useEffect(() => {
    artic.search({
      limit: 12,
      term: '',
      page: 1
    }).then((result) => {
      setState(result)
    })
  }, [])

  return state
}
