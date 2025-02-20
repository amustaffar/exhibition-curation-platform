import React, { useEffect, useState } from 'react'
import { Box, Container, Grid2 as Grid, Pagination, Alert, Button } from '@mui/material'
import { SearchBar } from './components/SearchBar'
import { ArtworkCard } from './components/ArtworkCard'
import { ExhibitionDrawer } from './components/ExhibitionDrawer'
import { useSearchArtwork } from '../../api/useSearchArtwork'
import { useDebouncedState } from '../../support/useDebouncedState'
import { Artwork } from '../../api/types'
import { TopBar } from './components/TopBar'

const LIMIT = 12

// TODO: Scroll to top when the page changes
// TODO: Loading indicator

export const Home = () => {
  // TODO: This should be in local or session storage
  const [selected, setSelected] = useState<ReadonlyArray<Artwork>>([])
  const [open, setOpen] = useState(false)

  const [term, searchValue, setSearchValue] = useDebouncedState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [term])

  const { total, items } = useSearchArtwork({ page, term, limit: LIMIT })

  return (
    <Box>
      <TopBar
        selectedItems={selected.length}
        onClear={() => setSelected([])}
        onView={() => setOpen(true)}
      />

      <Container maxWidth="xl" sx={{ py: 2 }}>
        <SearchBar searchValue={searchValue} onSearch={setSearchValue} />

        <Box py={2}>
          <Grid container spacing={2}>
            {items.map((x) => {
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={x.id}>
                  <ArtworkCard
                    id={x.id}
                    title={x.title}
                    artist={x.artist}
                    date={x.date}
                    image={x.thumbnail}
                    selected={selected.map((y) => y.id).includes(x.id)}
                    onAdd={() => setSelected((prev) => [...prev, x])}
                    onRemove={() => setSelected((prev) => prev.filter((y) => y.id !== x.id))}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
          
        <Box display="flex" justifyContent="center" p={2} pb={2}>
          <Pagination
            count={Math.ceil(total / LIMIT)}
            onChange={(_, x) => setPage(x)}
            variant="outlined"
            shape="rounded"
            page={page}
          />
        </Box>
      </Container>

      <ExhibitionDrawer
        artworks={selected}
        onClose={() => setOpen(false)}
        // This should be in a helper function or hook
        onRemove={(a) => setSelected((prev) => prev.filter((x) => x.id !== a.id))}
        open={open}
      />
    </Box>
  )
}
