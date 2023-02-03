import React from 'react';
import { useState } from 'react';
import { db } from '../utils/firebase';

export default function Footer() {
  const [rows, setRows] = useState([]);

  const dbCol = db.collection('cates');
  // const dbCol = db.collection('balances');

  React.useEffect(() => {
    dbCol
      .where('user', '==', 'mkdodos@gmail.com')
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setRows(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        {rows.map((row) => {
          return row.name;
        })}
      </div>
    </>
  );
}
