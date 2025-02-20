import React from 'react'
import { Box, Typography } from '@mui/material'

type ArtworkViewProps = {
  title: string
  artist: string
  date: string
  image: string
}

export const ArtworkView = (props: ArtworkViewProps) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Box
        component="img"
        src={props.image}
        sx={{
          width: '100%',
          height: '80%',
          objectFit: 'contain',
          flex: 1,
          flexGrow: 0,
          mb: 2
        }}
      />
      
      <Typography variant="body1" sx={{ mb: 1 }}>{props.title}</Typography>
      <Typography variant="body2">{props.artist} - {props.date}</Typography>
    </Box>
  )
}
