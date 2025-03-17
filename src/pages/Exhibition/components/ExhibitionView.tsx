import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router'
import { useFindArtwork } from '../../../api/useFindArtwork'
import { Viewer } from './Viewer'

export type ExhibitionViewProps = {
  ids: ReadonlyArray<string>
  id?: string
}

export const ExhibitionView = (props: ExhibitionViewProps) => {
  const [index, setIndex] = useState(0)
  const artwork = useFindArtwork({ id: props.ids[index] })

  const handleNext = useCallback(() => {
    setIndex((x) => x + 1 >= props.ids.length ? 0 : x + 1)
  }, [props.ids])

  const handlePrev = useCallback(() => {
    setIndex((x) => x - 1 < 0 ? props.ids.length - 1 : x - 1)
  }, [props.ids])

  return (
    <Viewer
      id={props.id}
      artwork={artwork}
      onNextClick={handleNext}
      onPrevClick={handlePrev}
    />
  )
}
