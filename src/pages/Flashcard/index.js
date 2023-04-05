import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './styles.css';

export default function Index() {
  const [flip, setFlip] = useState(false);

  return (
    <Container>
      {/* className='card flip' 在 css 中設定 .card.flip */}
      {/* 動態改變樣式 */}
      <div
        className={`card ${flip ? 'flip' : ''}`}
        onClick={() => {
          setFlip(!flip);
        }}
      >
        <div className="front">鳥</div>
        <div className="back">Bird</div>
      </div>
    </Container>
  );
}
