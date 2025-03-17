import React from 'react'
import { useParams } from 'react-router'
import { ExhibitionView } from './components/ExhibitionView'

export const Share = () => {
  const params = useParams()
  const ids = params.ids?.split(',') ?? []

  return (
    <ExhibitionView
      ids={ids}
    />
  )
}
