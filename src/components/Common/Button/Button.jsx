import React from 'react';
import './styles.css';

export default function Button({ text, outline }) {
  return <div className={outline ? 'outline-btn' : 'btn'}>{text}</div>;
}
