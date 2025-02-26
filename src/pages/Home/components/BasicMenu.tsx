import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { galleries, GalleryKey, galleryName } from '../../../api/galleries';

export type BasicMenuProps = {
  onChange: (value: GalleryKey) => void
  value: GalleryKey
};

export function BasicMenu(props: BasicMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (value: GalleryKey): void => {
    props.onChange(value);
    handleClose()
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Gallery: {galleryName(props.value)}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {galleries().map((g) => {
          return (
            <MenuItem 
              key={g.key}
              onClick={() => {handleSelect(g.key)}}
            >
              {g.name}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  );
}