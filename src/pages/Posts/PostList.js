import React from 'react';
import Post from './Post';
export default function PostList({ rows }) {
  return (
    <div className="post-list">
      {rows.map((row) => {
        return <Post key={row.work_id} row={row} />;
      })}
    </div>
  );
}
