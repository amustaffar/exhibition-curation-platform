import { useLocalStorage } from 'react-use'
import { Exhibition } from './types'
import { useCallback } from 'react'
import { Artwork } from '../api/types'

export type UseExhibitionsResult = {
  data: ReadonlyArray<Exhibition>
  add: (title: string) => void
  remove: (id: string) => void
}

export const useExhibitions = (): UseExhibitionsResult => {
  const [state = {}, setState] = useLocalStorage<Record<string, Exhibition>>('exhibitions_state', {})

  const add = useCallback((title: string): void => {
    const exhibition: Exhibition = { id: crypto.randomUUID(), title, artworks: [] }
    setState({ ...state, [exhibition.id]: exhibition })
  }, [state])

  const remove = useCallback((id: string): void => {
    setState(Object.fromEntries(Object.entries(state).filter(([_, x]) => x.id !== id)))    
  }, [state])

  return {
    data: Object.values(state),
    remove,
    add
  }
}

export type UseExhibitionResult = {
  addArtwork: (artwork: Artwork) => void
  removeArtwork: (artwork: Artwork) => void
  data?: Exhibition
}

export const useExhibition = (id: string): UseExhibitionResult => {
  const [state = {}, setState] = useLocalStorage<Record<string, Exhibition>>('exhibitions_state', {})

  const addArtwork = useCallback((artwork: Artwork): void => {
    setState({
      ...state,
      [id]: {
        ...state[id],
        artworks: [
          ...state[id].artworks,
          artwork
        ]
      }
    })
  }, [state])

  const removeArtwork = useCallback((artwork: Artwork): void => {
    setState({
      ...state,
      [id]: {
        ...state[id],
        artworks: state[id].artworks.filter((a) => a.id !== artwork.id)
      }
    })
  }, [state])

  return {
    data: state[id],
    removeArtwork,
    addArtwork
  }
}
