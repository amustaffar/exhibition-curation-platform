import React, { ChangeEvent, useCallback, useRef } from 'react'
import { Box, Container, Grid2 as Grid, Pagination, Alert, Button } from '@mui/material'
import { SearchBar } from './SearchBar'
import { ArtworkCard } from './ArtworkCard'
import { Artwork, Sort } from '../../../api/types'
import { GalleryKey } from '../../../api/galleries'

export type ArtworkGridProps = {
  onGalleryChange: (value: GalleryKey) => void
  gallery: GalleryKey
  onSortChange: (sort: Sort) => void
  sort: Sort
  onSearch: (term: string) => void
  onPageChange: (page: number) => void
  onAdd: (artwork: Artwork) => void
  onRemove: (artwork: Artwork) => void
  onClick: (artwork: Artwork) => void
  selectedIds: ReadonlyArray<string>
  searchValue: string
  items: ReadonlyArray<Artwork>
  total: number
  page: number
  limit: number
}

export const ArtworkGrid = (props: ArtworkGridProps) => {
  const handlePageChange = useCallback((_: ChangeEvent, page: number): void => {
    document.body.scrollIntoView({ behavior: 'smooth' })
    props.onPageChange(page)
  }, [props.onPageChange])

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
        <SearchBar
          searchValue={props.searchValue}
          onSearch={props.onSearch}
          gallery={props.gallery}
          onGalleryChange={props.onGalleryChange}
          sort={props.sort}
          onSortChange={props.onSortChange}
        />

        <Box py={2}>
          <Grid container spacing={2}>
            {props.items.map((x) => {
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={x.id}>
                  <ArtworkCard
                    id={x.id}
                    title={x.title}
                    artist={x.artist}
                    date={x.date}
                    image={x.thumbnail}
                    selected={props.selectedIds.includes(x.id)}
                    onAdd={() => props.onAdd(x)}
                    onRemove={() => props.onRemove(x)}
                    onClick={() => props.onClick(x)}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
          
        <Box display="flex" justifyContent="center" p={2} pb={2}>
          <Pagination
            count={Math.ceil(props.total / props.limit)}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            page={props.page}
          />
        </Box>
      </Container>
  )
}
