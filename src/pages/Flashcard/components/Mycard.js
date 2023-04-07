import React,{useState} from 'react';

export default function Mycard({card}) {
  
  const [flip, setFlip] = useState(false);
  return (    
    <div
    // className='card flip' 在 css 中設定 .card.flip   
    className={`card ${flip ? 'flip' : ''}`}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <div className="front">{card.en}</div>
      <div className="back">{card.ch}</div>
    </div>
  );
}
