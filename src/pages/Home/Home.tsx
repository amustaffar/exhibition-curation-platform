import React, { useEffect, useState } from 'react'
import { Box, LinearProgress } from '@mui/material'
import { ExhibitionDrawer } from './components/ExhibitionDrawer'
import { useSearchArtwork } from '../../api/useSearchArtwork'
import { useDebouncedState } from '../../support/useDebouncedState'
import { Artwork, Sort } from '../../api/types'
import { TopBar } from './components/TopBar'
import { ArtworkGrid } from './components/ArtworkGrid'
import { useArrayState } from '../../support/useArrayState'
import { ErrorState } from '../../components/ErrorState'
import { ArtworkDetail } from './components/ArtworkDetail'
import { GalleryKey } from '../../api/galleries'

const LIMIT = 12
// default limit for APIs, in pagination

export const Home = () => {
  // TODO: This should be in local or session storage
  const exhibition = useArrayState<Artwork>([])
  // refer "support" - all the logics to manipulate arrays - out of Home
  const [exhibitionDrawerOpen, setExhibitionDrawerOpen] = useState(false)
// (1) term - debounced value, (2) live value
  const [term, searchValue, setSearchValue] = useDebouncedState('')
  const [gallery, setGallery] = useState<GalleryKey>('artic')
  const [sort, setSort] = useState<Sort>('popular')
  const [page, setPage] = useState(1)

  useEffect(() => { setPage(1) }, [term])

  const [result, retry] = useSearchArtwork({ sort, gallery, page, term, limit: LIMIT })
  const [selected, setSelected] = useState<Artwork | null>(null)

  // return <div /> or a <box />
  return (
    <Box>
      <TopBar
        selectedItems={exhibition.items.length}
        onView={() => setExhibitionDrawerOpen(true)}
        onClear={exhibition.clear}
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
          // Gallary
          gallery={gallery}
          onGalleryChange={setGallery}
          // Sort
          sort={sort}
          onSortChange={setSort}
          // Exhibition
          onAdd={exhibition.add}
          onRemove={exhibition.remove}
          selectedIds={exhibition.items.map((x) => x.id)}
        />
      )}

      {result.tag === 'error' && (
        <ErrorState onRetry={retry} />
      )}

      <ExhibitionDrawer
        artworks={exhibition.items}
        onClose={() => setExhibitionDrawerOpen(false)}
        onRemove={exhibition.remove}
        open={exhibitionDrawerOpen}
      />

      <ArtworkDetail
        artwork={selected}
        onClose={() => setSelected(null)}
      />
    </Box>
  )
}
