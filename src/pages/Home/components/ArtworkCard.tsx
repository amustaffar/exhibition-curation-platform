import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

export type ArtworkCardProps = {
  id: string
  image: string
  title: string
  artist: string
  date: string
}

export const ArtworkCard = (props: ArtworkCardProps) => {
  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardMedia
          sx={{ aspectRatio: '1/1', backgroundColor: '#fafafa' }}
          image={props.image}
        />

        <CardContent>
          <Typography variant="body1" component="div">
            {props.title}
          </Typography>

          <Typography variant="body2" component="div">
            {props.artist} - {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" startIcon={<Add />}>
          Add to Exhibition
        </Button>
      </CardActions>
    </Card>
  )
}
