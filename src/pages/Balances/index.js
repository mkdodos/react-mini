import { useEffect, useState } from 'react';
import { Container, Input } from 'semantic-ui-react';
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
  const [rowsCount, setRowsCount] = useState(20);

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

  return (
    <Container>
      <Input onChange={filterData} />

      <TableList loading={loading} rows={rows} />
    </Container>
  );
}
