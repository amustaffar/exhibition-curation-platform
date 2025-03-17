import React from 'react'
import { Avatar, Box, Button, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import { Delete, Preview, Share } from '@mui/icons-material'
import { Artwork } from '../../../api/types'
import { Link } from 'react-router'
import { useSnackbar } from 'notistack'

export type ExhibitionDrawerProps = {
  id: string
  artworks: ReadonlyArray<Artwork>
  onRemove: (a: Artwork) => void
  onClose: () => void
  open?: boolean
}

export const ExhibitionDrawer = (props: ExhibitionDrawerProps) => {
  const { enqueueSnackbar } = useSnackbar()

  const handleShare = () => {
    const { protocol, host } = window.location
    const url = `${protocol}//${host}/shared-exhibition/${props.artworks.map((a) => encodeURIComponent(a.id)).join(',')}`
    navigator.clipboard.writeText(url)
    enqueueSnackbar('Copied URL to Clipboard!', { variant: 'success' })
  }

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

      <Stack spacing={2} direction="column" p={2}>
        <Button
          startIcon={<Preview />}
          to={`/exhibitions/${props.id}/view`}
          component={Link}
          variant="contained"
          fullWidth
        >
          View Exhibition
        </Button>

        <Button
          onClick={handleShare}
          startIcon={<Share />}
          variant="outlined"
          fullWidth
        >
          Share Exhibition
        </Button>
      </Stack>
    </Drawer>
  )
}
