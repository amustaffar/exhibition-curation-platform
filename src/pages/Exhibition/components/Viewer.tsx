import React from 'react'
import { ArtworkView } from './ArtworkView'
import { Box, CircularProgress, IconButton } from '@mui/material'
import { ArrowForwardIos, ArrowBackIos, Close } from '@mui/icons-material'
import { Artwork } from '../../../api/types'
import { Link } from 'react-router'

export type ViewerProps = {
  id?: string
  artwork: Artwork | null
  onNextClick: () => void
  onPrevClick: () => void
}

export const Viewer = (props: ViewerProps) => {
  return (
    <Box display="flex" width="100vw" height="100vh" bgcolor="#000" color="white" alignItems="center">
      <IconButton color="inherit" size="large" onClick={props.onPrevClick}>
        <ArrowBackIos fontSize="large" />
      </IconButton>

      <Box
        sx={{
          flex: '1',
          height: '100vh'
        }}
      >
        {props.artwork !== null ? (
          <ArtworkView
            title={props.artwork.title}
            artist={props.artwork.artist}
            date={props.artwork.date}
            image={props.artwork.image}
          />
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }}
          >
            <CircularProgress color="inherit" size={50}  />
          </Box>
        )}
      </Box>

      <IconButton color="inherit" size="large" onClick={props.onNextClick}>
        <ArrowForwardIos fontSize="large" />
      </IconButton>

      {props.id && (
        <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
          <IconButton color="inherit" size="large" component={Link} to={`/exhibitions/${props.id}`}>
            <Close fontSize="large" />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}
