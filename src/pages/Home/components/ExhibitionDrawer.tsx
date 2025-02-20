import React from 'react'
import { Avatar, Box, Button, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Artwork } from '../../../api/types'
import { Link } from 'react-router'

export type ExhibitionDrawerProps = {
  artworks: ReadonlyArray<Artwork>
  onRemove: (a: Artwork) => void
  onClose: () => void
  open?: boolean
}

export const ExhibitionDrawer = (props: ExhibitionDrawerProps) => {
  return (
    <Drawer
      PaperProps={{ sx: { width: '300px' }}}
      onClose={props.onClose}
      open={props.open}
      anchor="right"
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          Your Exhibition
        </Typography>
      </Toolbar>

      <List>
        {props.artworks.map((a) => {
          return (
            <ListItem
              key={a.id}
              divider
              secondaryAction={
                <IconButton color="error" onClick={() => props.onRemove(a)}>
                  <Delete />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar variant="rounded" src={a.thumbnail} />
              </ListItemAvatar>

              <ListItemText
                primary={a.title}
                secondary={a.artist}
              />
            </ListItem>
          )
        })}
      </List>

      <Box p={2}>
        <Button
          to={`/exhibition/${props.artworks.map((a) => a.id).join(',')}`}
          component={Link}
          variant="contained"
          fullWidth
        >
          View Exhibition
        </Button>
      </Box>
    </Drawer>
  )
}
