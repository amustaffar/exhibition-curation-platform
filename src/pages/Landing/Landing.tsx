import { Box, Container, Divider } from '@mui/material'
import React, { useState } from 'react'
import { TopBar } from './components/TopBar'
import { Intro } from './components/Intro'
import { ExhibitionList } from './components/ExhibitionList'
import { AddExhibition } from './components/AddExhibition'
import { useExhibitions } from '../../state'
import { AccordionExpandIcon } from './components/AccordionExpandIcon'

export const Landing = () => {
  const exhibitions = useExhibitions()
  const [adding, setAdding] = useState(false)
  

  return (
    <Box>
      <TopBar />

      <AddExhibition
        open={adding}
        onClose={() => setAdding(false)}
        onSubmit={exhibitions.add}
      />

      <Container maxWidth="lg">
        <Intro />
        <AccordionExpandIcon/>
        <Divider />

        <ExhibitionList
          exhibitions={exhibitions.data}
          onRemove={exhibitions.remove}
          onAdd={() => setAdding(true)}
        />
      </Container>
    </Box>
  )
}