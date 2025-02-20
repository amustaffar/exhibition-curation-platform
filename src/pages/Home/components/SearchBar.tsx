import React from 'react'
import { InputAdornment, TextField, Toolbar } from '@mui/material'
import { Search } from "@mui/icons-material"

export type SearchBarProps = {
  onSearch: (term: string) => void
  searchValue: string
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <Toolbar disableGutters sx={{ justifyContent: 'flex-end' }}>
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
