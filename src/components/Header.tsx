import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
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
