import React from 'react';

export default function Post({ row }) {
  return (
    <div className="post">
      <div className="first-column">
        <div>{row.work_id}</div>
        <div>{row.cust_name}</div>
      </div>
      <div className="second-column">
        <div>{row.size}</div>
        <div>{row.work_name}</div>
      </div>
      <div className="right">
        <div>{row.qty}</div>
        <div>{row.qty}</div>
      </div>
    </div>
  );
}
