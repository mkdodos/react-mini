import React, { useEffect, useState } from 'react';
import { Button, Container, Input } from 'semantic-ui-react';
import './styles.css';
// import data from './data.json';
import MycardList from './components/MycardList';

import { db } from '../../utils/firebase';

export default function Index() {
  const [rows, setRows] = useState([]);

  const [item, setItem] = useState({ ch: '', en: '' });

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search != '') {
    } else {
      
    }

    db.collection('words').limit(2).orderBy('createdAt','desc').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setRows(data);
      console.log(snapshot.size);
    });

    // console.log(data[1])
  }, []);

  function handleClick() {
    db.collection('words')
      .add({ ...item, createdAt: Date.now() })
      .then(() => setItem({ en: '', ch: '' }));
  }

  function handleSearch() {
    db.collection('words')
      // .where('en', '==', search)      
      .where('en', '>=', search)
      .where('en', '<=', search + '\uf8ff')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
        console.log(snapshot.size);
      });
  }

  function handleChange(e) {
    // console.log(e.target.name)
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  // console.log(rows);

  return (
    <Container>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button onClick={handleSearch}>搜尋</Button>
      <input
        className="my-input"
        placeholder="guide"
        name="en"
        value={item.en}
        onChange={handleChange}
      />
      <input
        className="my-input"
        placeholder="指導"
        name="ch"
        value={item.ch}
        onChange={handleChange}
      />
      <button className="my-button" onClick={handleClick}>
        新增
      </button>
      <MycardList data={rows} />
      {/* className='card flip' 在 css 中設定 .card.flip */}
      {/* 動態改變樣式 */}
      {/* <div
        className={`card ${flip ? 'flip' : ''}`}
        onClick={() => {
          setFlip(!flip);
        }}
      >
        <div className="front">鳥</div>
        <div className="back">Bird</div>
      </div> */}
    </Container>
  );
}
