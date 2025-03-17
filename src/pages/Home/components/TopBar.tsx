import React from 'react'
import { AppBar, Container, IconButton, Toolbar, Typography, Button, Badge } from '@mui/material'
import { ArrowBack, MenuOpen } from '@mui/icons-material'
import { Link } from 'react-router'

export type TopBarProps = {
  selectedItems: number
  title: string
  onView: () => void
}

export const TopBar = (props: TopBarProps) => {
  return (
    <AppBar
      color="inherit"
      sx={{ borderBottom: '1px solid #ddd' }}
      position="sticky"
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <IconButton component={Link} to="/" sx={{ mr: 2 }} color="inherit">
            <ArrowBack />
          </IconButton>

          <Badge
            badgeContent={props.selectedItems}
            invisible={props.selectedItems === 0}
            color="secondary"
          >
            <Button
              variant="contained"
              onClick={props.onView}
              disabled={props.selectedItems === 0}
            >
              Review Exhibition
            </Button>
          </Badge>
        </Toolbar>

        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Exhibition: {props.title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
