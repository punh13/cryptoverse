import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import './styles.css';

import Select from '@mui/material/Select';

export default function SelectDays({ days, handleDaysChange, noMargin }) {
  return (
    <div className={`select-days ${noMargin ? 'no-margin' : ''}`}>
      <p>Change in : </p>
      <Select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        sx={{
          height: '2.5rem',
          color: 'var(--white)',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--white)',
          },
          '& .MuiSvgIcon-root': {
            color: 'var(--white)',
          },
          '&:hover': {
            '&& fieldset': {
              borderColor: '#3a80e9',
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
      </Select>
    </div>
  );
}
