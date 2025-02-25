import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Add, Delete } from '@mui/icons-material'

export type ArtworkCardProps = {
  id: string
  image: string
  title: string
  artist: string
  date: string
  onAdd: () => void
  onRemove: () => void
  onClick: () => void
  selected?: boolean
}

export const ArtworkCard = (props: ArtworkCardProps) => {
  return (
    <Card variant="outlined">
      <CardActionArea onClick={props.onClick}>
        <CardMedia
          sx={{ aspectRatio: '1/1', backgroundColor: '#fafafa' }}
          image={props.image}
        />

        <CardContent>
          <Typography variant="body1" component="div" noWrap>
            {props.title}
          </Typography>

          <Typography variant="body2" component="div" noWrap>
            {props.artist}: {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {props.selected ? (
          <Button
            size="small"
            color="error"
            startIcon={<Delete />}
            onClick={() => props.onRemove()}
          >
            Remove from Exhibition
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            startIcon={<Add />}
            onClick={() => props.onAdd()}
          >
            Add to Exhibition
          </Button>
        )}
      </CardActions>
    </Card>
  )
}
