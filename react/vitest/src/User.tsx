import React from 'react';

export default function User({ data }) {
  if (!data) return null;
  return (
    <p>
      Name: {data.name || data.username || 'unknown'}
    </p>
  );
}