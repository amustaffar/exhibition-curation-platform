import React from 'react'
import { useParams } from 'react-router'
import { ExhibitionView } from './components/ExhibitionView'
import { useExhibition } from '../../state'
import { NotFoundState } from '../../components/NotFoundState'

export const View = () => {
  const { id } = useParams()
  const { data } = useExhibition(id!)

  if (data === undefined) {
    return <NotFoundState />
  }

  return (
    <ExhibitionView
      ids={data.artworks.map((x) => x.id)}
      id={data.id}
    />
  )
}
