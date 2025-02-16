import { Box, Container, Grid2 as Grid } from '@mui/material'
import React, { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { ArtworkCard } from './components/ArtworkCard'

// Container

const ARTWORK = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export const Home = () => {
  const [term, setTerm] = useState<string>('')

  return (
    <Container maxWidth="xl">
      <SearchBar searchValue={term} onSearch={setTerm} />

      <Box p={2}>
        <Grid container spacing={2}>
          {ARTWORK.map((x) => {
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={x}>
                <ArtworkCard />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  )
}
