import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

export type AddExhibitionProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (title: string) => void
}

export const AddExhibition = (props: AddExhibitionProps) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('')
  }, [props.open])

  const handleSubmit = useCallback(() => {
    props.onSubmit(title)
    props.onClose()
  }, [title, props.onSubmit])

  return (
    <Dialog
    open={props.open}
    onClose={props.onClose}
  >
    <DialogTitle>New Exhibition</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Enter a title for your new Exhibition
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        label="Title"
        type="text"
        fullWidth
        variant="standard"
        value={title}
        onChange={(e) => setTitle(e.target.value) }
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.onClose}>Cancel</Button>
      <Button
        disabled={title.trim() === ''}
        onClick={handleSubmit}
      >
        Save
      </Button>
    </DialogActions>
  </Dialog>
  )
}