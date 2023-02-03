import React, { useEffect, useState } from 'react';
import { Button,Header } from 'semantic-ui-react';

export default function Dashboard({ rows }) {
  const [total, setTotal] = useState(0);
  // 計算加總
  const calTotal = () => {
    let sum = 0;
    rows.map((row) => {
      sum += Number(row.amt);
    });
    setTotal(sum);
  };

  // 資料有變動就重新計算
  useEffect(() => {
    calTotal()
  }, [rows]);

  return (
    <div>
      <Header as="h1">合計</Header>
      <Button onClick={calTotal}>{total}</Button>
      
    </div>
  );
}
