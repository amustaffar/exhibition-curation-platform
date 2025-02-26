import React from 'react'
import { Box, InputAdornment, TextField, Toolbar } from '@mui/material'
import { Search } from "@mui/icons-material"
import { BasicMenu } from "./BasicMenu"
import { GalleryKey } from '../../../api/galleries'

export type SearchBarProps = {
  onGalleryChange: (value: GalleryKey) => void
  gallery: GalleryKey

  onSearch: (term: string) => void
  searchValue: string
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <Toolbar disableGutters>
      <BasicMenu
        value={props.gallery}
        onChange={props.onGalleryChange}
      />

      <Box sx={{ flex: 1 }} />

      <TextField
        onChange={(e) => props.onSearch(e.target.value)}
        sx={{ backgroundColor: '#fff' }}
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
