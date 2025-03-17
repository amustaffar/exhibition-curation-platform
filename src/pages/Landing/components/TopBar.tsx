import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'

export type TopBarProps = {}

export const TopBar = (props: TopBarProps) => {
  return (
    <AppBar
      color="inherit"
      sx={{ borderBottom: '1px solid #ddd' }}
      position="sticky"
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Exhibition Curation Platform
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
