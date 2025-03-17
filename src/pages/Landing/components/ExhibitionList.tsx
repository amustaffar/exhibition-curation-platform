import React from 'react'
import { Add, Delete } from '@mui/icons-material'
import { Box, Button, IconButton, List, ListItem, ListItemButton, ListItemSecondaryAction, ListItemText, Toolbar, Typography } from '@mui/material'
import { Exhibition } from '../../../state'
import { Link } from 'react-router'

export type ExhibitionListProps = {
  exhibitions: ReadonlyArray<Exhibition>
  onRemove: (id: string) => void
  onAdd: () => void
}

export const ExhibitionList = (props: ExhibitionListProps) => {
  return (
    <Box>
      <Toolbar disableGutters>
        <Typography variant="h6" flex="1">
          My Exhibitions
        </Typography>

        <Button
          onClick={props.onAdd}
          startIcon={<Add />}
          variant="contained"
          size="small"
        >
          Add Exhibition
        </Button>
      </Toolbar>

      <List>
        {props.exhibitions.map((x) => {
          return (
            <ListItemButton
              component={Link}
              divider
              key={x.id}
              to={`/exhibitions/${x.id}`}
            >
              <ListItemText primary={x.title} />

              <ListItemSecondaryAction>
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.preventDefault()
                    props.onRemove(x.id)
                  }}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItemButton>
          )
        })}
      </List>
    </Box>
  )
}
