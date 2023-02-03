import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import List from './components/List';
import EditForm from './components/EditForm';
import Dashboard from './components/Dashboard';
import { Container,Button } from 'semantic-ui-react';
import Modal from './components/Modal';


export default function Index() {
  // 資料集合
  const [rows, setRows] = useState([]);

  // 編輯列索引
  const [editRowIndex, setEditRowIndex] = useState(-1);

  // 表單預設值
  const defalutItem = {
    consumeDate: new Date().toISOString().slice(0, 10),
    note: '',
    amt: '',
  };

  // 編輯列
  const [row, setRow] = useState(defalutItem);

  // firebase 集合
  const dbCol = db.collection('credits');

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
        });
    } else {
      // 新增
      dbCol.add(row).then((doc) => {
        // 將資料加到表格中,包含剛新增的id,做為刪除之用
        setRows([...rows, { ...row, id: doc.id }]);
        // 設為初始值
        setRow(defalutItem);
        setEditRowIndex(-1);
      });
    }
  };

  // 刪除
  const deleteRow = (row, index) => {
    dbCol
      .doc(row.id)
      .delete()
      .then(() => {
        const newRows = rows.slice();
        newRows.splice(index, 1);
        setRows(newRows);
      });
  };

  // 編輯(設定索引和編輯列)
  const editRow = (row, index) => {
    setEditRowIndex(index);
    setRow(row);
  };

 

  return (
    <div>
      <Container>
      <EditForm
          rows={rows}
          setRows={setRows}
          row={row}
          setRow={setRow}
          saveRow={saveRow}
        />
        <Modal rows={rows} editRow={editRow}/>
      

      
        {/* <Dashboard rows={rows} /> */}
       
        {/* <List rows={rows} deleteRow={deleteRow} editRow={editRow} /> */}
      </Container>
    </div>
  );
}
