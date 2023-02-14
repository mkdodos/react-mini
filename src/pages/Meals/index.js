import { useEffect, useState } from 'react';
import { db_echoway } from '../../utils/firebase';

import EditForm from './components/EditForm';

import { Container } from 'semantic-ui-react';

export default function Index() {
  // firebase 集合
  const dbCol = db_echoway.collection('meals');

  // 資料陣列
  const [rows, setRows] = useState([]);

  // 表單預設值
  const defalutItem = { name: '',amt:'' };

  // 編輯列
  const [row, setRow] = useState(defalutItem);


   // 編輯表單開關
   const [open, setOpen] = useState(false);

   // 載入中
   const [loading, setLoading] = useState(false);

   // 編輯列索引
  const [editRowIndex, setEditRowIndex] = useState(-1);


  // 取得資料
  useEffect(() => {
    dbCol.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setRows(data);
    });
  }, []);

  // 儲存(新增或更新)
  const saveRow = () => {
    setLoading(true);
    // 更新
    if (editRowIndex > -1) {
      dbCol
        .doc(row.id)
        .update(row)
        .then(() => {
          const newRows = rows.slice();
          Object.assign(newRows[editRowIndex], row);
          setRows(newRows);
          // 設為初始值
          setRow(defalutItem);
          setEditRowIndex(-1);
          setOpen(false);
          setLoading(false);
        });
    } else {
      // 新增

      dbCol.add(row).then((doc) => {
        const newRows = rows.slice();
        newRows.unshift({ ...row, id: doc.id });
        // 將資料加到表格中,包含剛新增的id,做為刪除之用
        // setRows([...rows, { ...row, id: doc.id }]);
        setRows(newRows);
        console.log('add');
        // 設為初始值
        setRow(defalutItem);
        setEditRowIndex(-1);
        setOpen(false);
        setLoading(false);
      });
    }
  };

  
  // 刪除
  const deleteRow = (row) => {
    setLoading(true);
    dbCol
      .doc(row.id)
      .delete()
      .then(() => {
        const newRows = rows.slice();
        newRows.splice(editRowIndex, 1);
        setRows(newRows);
        setOpen(false);
        setLoading(false);
      });
  };

  return (
    <Container>
      
      <EditForm
        open={open}
        setOpen={setOpen}
        rows={rows}
        setRows={setRows}
        row={row}
        setRow={setRow}
        saveRow={saveRow}
        deleteRow={deleteRow}
        loading={loading}
      />
    </Container>
  );
}
