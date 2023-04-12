import React from 'react';
import './index.css';

import Card from './components/Card';

export default function Index() {
  // useEffect(() => {
  //   console.log('abc');
  // }, []);
  return (
    <div className="wb-container">
      <div className="cards">
        <Card />
        <Card />
      </div>

      {/* <div className="wb">
        <div>w</div>
        <div>b</div>
      </div> */}
    </div>
  );
}
