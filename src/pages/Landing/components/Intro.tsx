import { Box, Typography } from '@mui/material'
import React from 'react'

export const Intro = () => {
  return (
    <Box py={2}>
      <Typography variant="h4" mb={2}>
        Welcome
      </Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ipsum, convallis ut justo a, aliquet sollicitudin leo. Duis tellus orci, ornare ac dictum nec, scelerisque eu felis. Sed ut mi vel ipsum ornare dictum. Quisque suscipit elit varius consequat elementum. Praesent ac purus porttitor, hendrerit nisi non, venenatis tortor.
      </Typography>
    </Box>
  )
}
