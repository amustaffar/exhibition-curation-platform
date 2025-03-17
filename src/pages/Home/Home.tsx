import React, { useEffect, useState } from 'react'
import { Box, LinearProgress } from '@mui/material'
import { ExhibitionDrawer } from './components/ExhibitionDrawer'
import { useSearchArtwork } from '../../api/useSearchArtwork'
import { useDebouncedState } from '../../support/useDebouncedState'
import { Artwork, Sort, sortFromString } from '../../api/types'
import { TopBar } from './components/TopBar'
import { ArtworkGrid } from './components/ArtworkGrid'
import { ErrorState } from '../../components/ErrorState'
import { ArtworkDetail } from './components/ArtworkDetail'
import { GalleryKey, galleryKeyFromString } from '../../api/galleries'
import { useParams, useSearchParams } from 'react-router'
import { useExhibition } from '../../state'
import { useUpdateEffect } from 'react-use'
import { NotFoundState } from '../../components/NotFoundState'

const LIMIT = 12
// default limit per response - API specfic - for pagination

export const Home = () => {
  const params = useParams()
  const { data, addArtwork, removeArtwork } = useExhibition(params.id!)

  const [qs, setQs] = useSearchParams()
  const [term, searchValue, setSearchValue] = useDebouncedState(qs.get('term') ?? '')
  const [gallery, setGallery] = useState<GalleryKey>(galleryKeyFromString(qs.get('gallery') ?? '') ?? 'artic')
  const [sort, setSort] = useState<Sort>(sortFromString(qs.get('sort') ?? '') ?? 'popular')
  const [page, setPage] = useState(parseInt(qs.get('page') ?? '1', 10) || 1)

  useUpdateEffect(() => { setPage(1) }, [term, sort, gallery])

  useEffect(() => {
    setQs({ term, sort, gallery, page: `${page}` })
  }, [term, sort, gallery, page])

  const [result, retry] = useSearchArtwork({ sort, gallery, page, term, limit: LIMIT })

  const [exhibitionDrawerOpen, setExhibitionDrawerOpen] = useState(false)
  const [selected, setSelected] = useState<Artwork | null>(null)

  if (data === undefined) {
    return <NotFoundState />
  }

  return (
    <Box>
      <TopBar
        title={data.title}
        selectedItems={data.artworks.length}
        onView={() => setExhibitionDrawerOpen(true)}
      />

      {result.tag == 'ok' && result.loading && (
        <LinearProgress />
      )}

      {(result.tag === 'ok' && result.page !== undefined) && (
        <ArtworkGrid
          // Selection / Viewing
          onClick={(artwork) => setSelected(artwork)}
          // Searching
          onSearch={setSearchValue}
          searchValue={searchValue}
          // Pagination
          page={page}
          limit={LIMIT}
          items={result.page.items}
          total={result.page.total}
          onPageChange={setPage}
          // Gallery
          gallery={gallery}
          onGalleryChange={setGallery}
          // Sort
          sort={sort}
          onSortChange={setSort}
          // Exhibition
          onAdd={addArtwork}
          onRemove={removeArtwork}
          selectedIds={data.artworks.map((x) => x.id)}
        />
      )}

      {result.tag === 'error' && (
        <ErrorState onRetry={retry} />
      )}

      <ExhibitionDrawer
        artworks={data.artworks}
        onClose={() => setExhibitionDrawerOpen(false)}
        onRemove={removeArtwork}
        open={exhibitionDrawerOpen}
        id={data.id}
      />

      <ArtworkDetail
        artwork={selected}
        onClose={() => setSelected(null)}
      />
    </Box>
  )
}
