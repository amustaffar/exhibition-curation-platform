import React, { useState, useCallback, MouseEvent, useMemo, ReactNode } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ArrowDownward, ArrowDropDown } from '@mui/icons-material';

export type Item<T extends string> = { label: string; value: T }

export type BasicMenuProps<T extends string> = {
  icon?: ReactNode
  items: ReadonlyArray<Item<T>>
  onChange: (value: T) => void
  value: T
};

export function BasicMenu<T extends string>(props: BasicMenuProps<T>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);


  const handleSelect = useCallback((value: T): void => {
    props.onChange(value);
    handleClose()
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const label = useMemo(() => {
    return props.items.find((x) => x.value === props.value)?.label ?? ''
  }, [props.value])

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={props.icon}
        endIcon={<ArrowDropDown />}
        variant="outlined"
        size="small"
      >
        {label}
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
        {props.items.map((g) => {
          return (
            <MenuItem 
              key={g.value}
              onClick={() => {handleSelect(g.value)}}
            >
              {g.label}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  );
}