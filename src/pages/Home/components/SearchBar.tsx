import React from 'react'
import { InputAdornment, TextField, Toolbar } from '@mui/material'
import { Search } from "@mui/icons-material"

export type SearchBarProps = {
  onSearch: (term: string) => void
  searchValue: string
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <Toolbar disableGutters sx={{ justifyContent: 'flex-end', borderBottom: '1px solid #e5e5e5' }}>
      <TextField
        onChange={(e) => {
          props.onSearch(e.target.value)
          console.log(e)
        }}
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
