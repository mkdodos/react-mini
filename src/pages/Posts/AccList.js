import React from 'react';
import Acc from './Acc';
export default function AccList({ rows }) {
  return (
    <div className="grid">
      {rows.map((row) => {
        return <Acc key={row.id} row={row} />;
      })}
    </div>
  );
}
