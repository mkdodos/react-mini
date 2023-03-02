import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import TableList from './components/TableList';
import { db } from '../../utils/firebase';

export default function Index() {
  // firebase 集合
  const dbCol = db.collection('balances');

  // 資料陣列
  const [rows, setRows] = useState([]);
  // 載入中
  const [loading, setLoading] = useState(false);

  // 筆數
  const [rowsCount, setRowsCount] = useState(20);


  // 取得資料
  useEffect(() => {
    dbCol.orderBy('date','desc').limit(rowsCount).get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setRows(data);
    });
  }, []);

  return (
    <Container>
      <TableList loading={loading} rows={rows} />
    </Container>
  );
}
