import React from 'react';

export default function Acc({ row }) {
  return (
    <div className="acc">
      {/* <div className="first-column">{row.user}</div> */}
      <div className="second-column">
        <div>{row.name}</div>
        <div>{row.prior}</div>
      </div>
      <div className="second-column">
        <div>{row.name}</div>
        <div>{row.prior}</div>
      </div>
    </div>
  );
}
