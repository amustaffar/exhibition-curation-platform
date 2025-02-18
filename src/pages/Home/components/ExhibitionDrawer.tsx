import React from 'react'
import { Box, SwipeableDrawer } from '@mui/material'

export type ExhibitionDrawerProps = {
  bleeding: number
}

export const ExhibitionDrawer = (props: ExhibitionDrawerProps) => {
  return (
    <SwipeableDrawer
      PaperProps={{ sx: { overflow: 'visible', maxWidth: '50%', left: '25%' } }}
      ModalProps={{ keepMounted: true }}
      swipeAreaWidth={props.bleeding}
      onClose={() => {}}
      onOpen={() => {}}
      anchor="bottom"
    >
      <Box
        sx={{
          boxShadow: '0 -1px 10px rgba(0,0,0,0.1)',
          border: '1px solid #ddd',
          position: 'absolute',
          top: -props.bleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          backgroundColor: '#fff',
          height: props.bleeding,
          visibility: 'visible',
          right: 0,
          left: 0
        }}
      >
        zsdfasd
      </Box>
    </SwipeableDrawer>
  )
}
