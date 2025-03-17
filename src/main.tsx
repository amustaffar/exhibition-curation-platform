import React from 'react'
import { CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { SnackbarProvider } from 'notistack'
import { App } from './App'

const root = createRoot(document.getElementById('root')!)

root.render(
  <BrowserRouter>
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </BrowserRouter>
)
