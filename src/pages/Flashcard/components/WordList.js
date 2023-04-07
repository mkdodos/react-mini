import React from 'react';
import Word from './Word';
export default function WordList({ words }) {
  return (
    <div className="word-list">
      {words.map((word) => {
        return <Word word={word} />;
      })}
    </div>
  );
}
