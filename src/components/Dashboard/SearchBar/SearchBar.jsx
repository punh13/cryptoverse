import React, { useState } from 'react';
import './styles.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function SearchBar({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchRoundedIcon />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}
