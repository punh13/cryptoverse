import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './styles.css';

export default function Loader() {
  return (
    <div className="loader">
      <CircularProgress sx={{ color: 'var(--orange)' }} />
    </div>
  );
}

