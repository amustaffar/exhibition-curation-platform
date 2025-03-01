import React from 'react'
import { Box, Button, InputAdornment, TextField, Toolbar } from '@mui/material'
import { Collections, Search, Sort as SortIcon } from "@mui/icons-material"
import { BasicMenu } from "./BasicMenu"
import { galleries, GalleryKey } from '../../../api/galleries'
import { Sort } from '../../../api/types'

export type SearchBarProps = {
  onGalleryChange: (value: GalleryKey) => void
  gallery: GalleryKey

  onSearch: (term: string) => void
  searchValue: string

  onSortChange: (order: Sort) => void
  sort: Sort
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <Toolbar disableGutters>
      <BasicMenu
        icon={<Collections />}
        onChange={props.onGalleryChange}
        value={props.gallery}
        items={galleries()}
      />

      <BasicMenu
        icon={<SortIcon />}
        value={props.sort}
        onChange={props.onSortChange}
        items={[
          { value: 'popular', label: 'Popular'},
          { value: 'date_asc', label: 'by Date ASC' },
          { value: 'date_desc', label: 'by Date DESC' }
        ]}
      />

      <Box sx={{ flex: 1 }} />

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
    </Toolbar>
  )
}
