import React from 'react'
import { Box, Button, Typography } from '@mui/material'

export type ErrorStateProps = {
  onRetry: () => void
}

export const ErrorState = (props: ErrorStateProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="body1">
        Sorry, something went wrong
      </Typography>

      <Button onClick={props.onRetry}>
        Retry
      </Button>
    </Box>
  )
}
