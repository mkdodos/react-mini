import React, { useEffect, useState } from 'react';
import { Button, Container, Input } from 'semantic-ui-react';
import './styles.css';
// import data from './data.json';
import MycardList from './components/MycardList';
import WordList from './components/WordList';
// import Word from './components/Word';

import { db } from '../../utils/firebase';

export default function Index() {
  const [rows, setRows] = useState([]);

  const [item, setItem] = useState({ ch: '', en: '' });

  const [search, setSearch] = useState('');




  useEffect(() => {
    if (search != '') {
    } else {
      
    }

    db.collection('words').limit(10).orderBy('createdAt','desc').onSnapshot((snapshot) => {
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
      // https://stackoverflow.com/questions/46573804/firestore-query-documents-startswith-a-string
      // 以下2條件相當於startsWith 
      .where('ch', '>=', search)
      .where('ch', '<=', search + '\uf8ff')
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
      <WordList words={rows}/>
     
      {/* <Input value={search} onChange={(e) => setSearch(e.target.value)} />
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
      <MycardList data={rows} />   */}
    </Container>
  );
}
