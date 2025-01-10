import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './styles.css';

export default function PaginationControlled({ page, setPage, totalPages }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} alignItems="center" className="custom-stack">
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        className="custom-pagination"
      />
    </Stack>
  );
}
