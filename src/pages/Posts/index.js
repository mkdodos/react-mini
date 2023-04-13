import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import AccList from './AccList';
import TransList from './TransList';
import './index.css';

export default function Index() {
  // {
  //   "name": "一卡通",
  //   "balance": 0,
  //   "prior": 6,
  //   "user": "dada@gmail.com",
  //   "id": "4NV13sCkLhIhxX1EfXZF"
  // }

  const [rows, setRows] = useState([]);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.clear();
    db.collection('accounts')
      .where('user', '==', 'dada@gmail.com')
      // .limit(1)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setRows(data);

        const items = snapshot.docs.map((doc) => {
          const item = doc.data();
          return {
            key: doc.id,
            text: item.name,
            value: item.name,
          };
        });

        setOptions(items);

        console.log(items);
      });
  }, []);
  return (
    <div>
      <TransList rows={options} />
      {/* <AccList rows={rows} /> */}
    </div>
  );
}
