import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router'
import { Exhibition } from './pages/Exhibition'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/exhibition/:ids" Component={Exhibition} />
      </Routes>
    </Box>
  )
}

