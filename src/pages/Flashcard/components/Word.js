import React from 'react';

export default function Word({word}) {
  return (
   
      <div className="word">
        <div className="en">{word.en}</div>
        <div className="ch">{word.ch}</div>
      </div>
   
  );
}
