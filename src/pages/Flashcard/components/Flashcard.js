import React, { useState, useRef, useEffect } from 'react';
import { Divider } from 'semantic-ui-react';

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  const [height, setHeight] = useState('initial');

  const frontEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    // const backHeight = backEl.current.getBoundingClientRect().height
    // return frontHeight
    setHeight(Math.max(frontHeight, 100));
    // Math.max() 函式會回傳零或多個數字中的最大值。
  }

  useEffect(() => {
    setMaxHeight();
  }, [flashcard.question]);

  return (
    <div
      style={{ height: height }}
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <Divider />
        <div className="flashcard-options">
          {flashcard.options.map((option, index) => {
            return (
              <div key={index} className="flashcard-option">
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
      {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  );
}
