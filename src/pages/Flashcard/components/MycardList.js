import React from 'react';
import Mycard from './Mycard';

export default function MycardList({ data }) {
  return (
    <div className='card-grid'>
      {data.map((row) => {
        return <Mycard key={row.id} card={row} />;
      })}
    </div>
  );
}
