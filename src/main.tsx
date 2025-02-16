import React from 'react'
import { CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './App'

const root = createRoot(document.getElementById('root')!)

root.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>
)
