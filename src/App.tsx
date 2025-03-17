import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router'
import * as Exhibition from './pages/Exhibition'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing'

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/exhibitions/:id" Component={Home} />
        <Route path="/exhibitions/:id/view" Component={Exhibition.View} />
        <Route path="/shared-exhibition/:ids" Component={Exhibition.Share} />
      </Routes>
    </Box>
  )
}

