import React from 'react'
import { AppBar, Container, IconButton, Toolbar, Typography, Button } from '@mui/material'
import { Close, MenuOpen } from '@mui/icons-material'

export type TopBarProps = {
  selectedItems: number
  onView: () => void
  // onPreviewExhibitionClick
  onClear: () => void
}

export const TopBar = (props: TopBarProps) => {
  return (
    <AppBar
      color={props.selectedItems > 0 ? 'primary' : 'inherit'}
      sx={{ borderBottom: '1px solid #ddd' }}
      position="sticky"
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {props.selectedItems > 0 && (
            <IconButton onClick={props.onClear} sx={{ mr: 2 }} color="inherit">
              <Close />
            </IconButton>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.selectedItems > 0 ? `${props.selectedItems} Selected` : 'Exhibition Curation Platform'}
          </Typography>

          {props.selectedItems > 0 && (
            <IconButton color="inherit" onClick={props.onView}>
              <MenuOpen />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
