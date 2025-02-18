import React, { useEffect, useState } from 'react'
import { Box, Container, Grid2 as Grid, Pagination, Alert, Button } from '@mui/material'
import { SearchBar } from './components/SearchBar'
import { ArtworkCard } from './components/ArtworkCard'
import { ExhibitionDrawer } from './components/ExhibitionDrawer'
import { useSearchArtwork } from '../../api/useSearchArtwork'
import { useDebouncedState } from '../../support/useDebouncedState'
import { Artwork } from '../../api/types'

const LIMIT = 12

// TODO: Scroll to top when the page changes
// TODO: Loading indicator

export const Home = () => {
  const [selected, setSelected] = useState<ReadonlyArray<Artwork>>([])
  const [term, searchValue, setSearchValue] = useDebouncedState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [term])

  const { total, items } = useSearchArtwork({ page, term, limit: LIMIT })

  return (
    <Container maxWidth="xl">
      {selected.length > 0 && (
        <Alert
          severity="info"
          action={
            <Button color="inherit" size="small">
              VIEW
            </Button>
          }
        >
          {selected.length} artworks in your exhibition
        </Alert>
      )}

      <SearchBar searchValue={searchValue} onSearch={setSearchValue} />

      <Box p={2}>
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
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
        
      <Box display="flex" justifyContent="center" p={2} pb={4} mb="56px">
        <Pagination
          count={Math.ceil(total / LIMIT)}
          onChange={(_, x) => setPage(x)}
          variant="outlined"
          shape="rounded"
          page={page}
        />
      </Box>

      {/* <ExhibitionDrawer
        bleeding={56}
      /> */}
    </Container>
  )
}
