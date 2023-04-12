import React from 'react';
import Card from './Card';

export default function CardList({ rows }) {
  return (
    <div className="plan-grid">
      <div className="workdone">
        {rows.map((row) => {
          return <Card key={row.work_id} row={row} />;
        })}
      </div>
      <div className="car-request">
        {rows.map((row) => {
          return <Card key={row.work_id} row={row} />;
        })}
      </div>
      <div className="arrdone">
        {rows.map((row) => {
          return <Card key={row.work_id} row={row} />;
        })}
      </div>
    </div>
  );
}
