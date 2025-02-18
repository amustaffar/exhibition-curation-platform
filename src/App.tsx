import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router'
import { Header } from './components/Header'
import { Exhibition } from './pages/Exhibition'
import { Artwork } from './pages/Artwork'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/artwork/:id" Component={Artwork} />
        <Route path="/exhibition/:id" Component={Exhibition} />
      </Routes>
    </Box>
  )
}

