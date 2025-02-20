import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router'
import { useFindArtwork } from '../../api/useFindArtwork'
import { Viewer } from './components/Viewer'

export const Exhibition = () => {
  const params = useParams()
  const ids = params.ids?.split(',') ?? []

  const [index, setIndex] = useState(0)
  const artwork = useFindArtwork({ id: ids[index] })

  const handleNext = useCallback(() => {
    setIndex((x) => x + 1 >= ids.length ? 0 : x + 1)
  }, [])

  const handlePrev = useCallback(() => {
    setIndex((x) => x - 1 < 0 ? ids.length - 1 : x - 1)
  }, [])

  return (
    <Viewer
      artwork={artwork}
      onNextClick={handleNext}
      onPrevClick={handlePrev}
    />
  )
}
