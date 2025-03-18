import { Accordion, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'

export const Intro = () => {
  return (
    <Box py={2}>
      <Typography variant="h5" mb={1}>
        Welcome!
      </Typography>

      <Typography variant="body1" py={1}>
        This platform enables users to explore virtual exhibitions from combined collections of antiquities and fine art. It will serve researchers, students and fine art enthusiasts, providing a searcheable and interactive experience of the collections
      </Typography>
    </Box>
  )
}
