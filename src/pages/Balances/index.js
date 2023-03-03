import { useEffect, useState, useRef } from 'react';
import { Container, Input, Button } from 'semantic-ui-react';
import TableList from './components/TableList';
import { db } from '../../utils/firebase';

export default function Index() {
  // firebase 集合
  const dbCol = db.collection('balances');

  // 資料陣列
  const [rows, setRows] = useState([]);

  // 篩選用資料陣列
  let [rowsFilter, setRowsFilter] = useState([]);

  // 載入中
  const [loading, setLoading] = useState(false);

  // 筆數
  const [rowsCount, setRowsCount] = useState(10);

  // 最後一筆
  const lastSnapshot = useRef();

  // 取得資料
  useEffect(() => {
    dbCol
      .orderBy('date', 'desc')
      .limit(rowsCount)
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
        setRowsFilter(data);
        // 最後一筆        
        lastSnapshot.current = snapshot.docs[snapshot.docs.length - 1];      
      });
  }, []);

  const filterData = (e) => {
    // 篩選資料
    const keyword = e.target.value;
    rowsFilter = rowsFilter.filter((row) =>
      row.title.toLowerCase().includes(keyword)
    );
    setRows(rowsFilter);
  };

  // 載入更多
  // 記錄最後一筆的snapshot
  // 搭配用 startAfter
  // 每次從最後一筆之後取出資料加入原陣列 
  const loadMore = (e) => {
    dbCol
      .orderBy('date', 'desc')
      .limit(rowsCount)
      .startAfter(lastSnapshot.current)
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows([...rows,...data])
        setRowsFilter([...rows,...data])       
        lastSnapshot.current = snapshot.docs[snapshot.docs.length - 1];
      });

   
  };

  return (
    <Container>
      <Input onChange={filterData} />

      <Button onClick={loadMore}>載入更多</Button>

      <TableList loading={loading} rows={rows} />
    </Container>
  );
}
