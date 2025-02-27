import React from 'react'
import { Box, Button, InputAdornment, TextField, Toolbar } from '@mui/material'
import { Search, Sort } from "@mui/icons-material"
import { BasicMenu } from "./BasicMenu"
import { GalleryKey } from '../../../api/galleries'
import { SortOrder } from '../../../api/types'

export type SearchBarProps = {
  onGalleryChange: (value: GalleryKey) => void
  gallery: GalleryKey

  onSearch: (term: string) => void
  searchValue: string

  onSortOrderChange: (order: SortOrder) => void
  sortOrder: SortOrder
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <Toolbar disableGutters>
      <BasicMenu
        value={props.gallery}
        onChange={props.onGalleryChange}
      />

      <Box sx={{ flex: 1 }} />

      <Box display="flex" flexDirection="column">
        <TextField
          onChange={(e) => props.onSearch(e.target.value)}
          sx={{ backgroundColor: '#fff', mb: 1, display: 'block' }}
          value={props.searchValue}
          placeholder="Search"
          type="search"
          size="small"

          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              )
            }
          }}
        />

        <Button
          size="small"
          variant="outlined"
          startIcon={<Sort />}
          onClick={() => {
            const next = props.sortOrder === 'asc' ? 'desc' : 'asc'
            props.onSortOrderChange(next)
          }}
        >
          Publication Date: {props.sortOrder.toUpperCase()}
        </Button>
      </Box>
    </Toolbar>
  )
}
