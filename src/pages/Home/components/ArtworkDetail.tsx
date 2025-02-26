import React from 'react'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Toolbar, Typography } from '@mui/material'
import { Artwork } from '../../../api/types'
import { Close } from '@mui/icons-material'

export type ArtworkDetailProps = {
  artwork: Artwork | null
  onClose: () => void
}

export const ArtworkDetail = (props: ArtworkDetailProps) => {
  return (
    <Dialog
      keepMounted
      open={props.artwork !== null}
      onClose={props.onClose}
      maxWidth="md"
      scroll="body"
    >
      <Toolbar disableGutters variant="dense" sx={{ borderBottom: '1px solid #e5e5e5' }}>
        <IconButton onClick={props.onClose}>
          <Close />
        </IconButton>
      </Toolbar>

      <Box component="img" src={props.artwork?.image} sx={{ width: '100%' }} />

      <DialogContent>
        <Typography variant="h6">{props.artwork?.title}</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>{props.artwork?.artist}, {props.artwork?.date}</Typography>
        <Typography variant="body2">{props.artwork?.summary}</Typography>
      </DialogContent>
    </Dialog>
  )
}
