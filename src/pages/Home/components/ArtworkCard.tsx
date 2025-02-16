import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

export type ArtworkCardProps = {}

export const ArtworkCard = (props: ArtworkCardProps) => {
  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardMedia sx={{ aspectRatio: '1/1', backgroundColor: '#fafafa' }} />

        <CardContent>
          <Typography variant="body1" component="div">
            Artwork Title
          </Typography>

          <Typography variant="body2" component="div">
            Author - 2025
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
