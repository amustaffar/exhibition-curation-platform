import React from 'react'
import { Box, Typography } from '@mui/material'

export type NotFoundStateProps = {}

export const NotFoundState = (_: NotFoundStateProps) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="body1">
        Not Found
      </Typography>
    </Box>
  )
}
