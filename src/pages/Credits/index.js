import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import List from './components/List';
import EditForm from './components/EditForm';
import Dashboard from './components/Dashboard';
import { Container, Button } from 'semantic-ui-react';

import DataList from './components/DataList';
import ModalForm from './components/ModalForm';

export default function Index() {
  // 編輯表單開關
  const [open, setOpen] = React.useState(false);

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
          setOpen(false);
        });
    } else {
      // 新增
      dbCol.add(row).then((doc) => {
        // 將資料加到表格中,包含剛新增的id,做為刪除之用
        setRows([...rows, { ...row, id: doc.id }]);
        // 設為初始值
        setRow(defalutItem);
        setEditRowIndex(-1);
        setOpen(false);
      });
    }
  };

  // 刪除
  const deleteRow = (row) => {
    dbCol
      .doc(row.id)
      .delete()
      .then(() => {
        const newRows = rows.slice();
        newRows.splice(editRowIndex, 1);
        setRows(newRows);
        setOpen(false);
      });
  };

  // 編輯(設定索引和編輯列)
  const editRow = (row, index) => {
    setEditRowIndex(index);
    setRow(row);
    setOpen(true);
  };

  // 新增一筆
  const newRow = () => {
    setEditRowIndex(-1);
    setRow(defalutItem);
    setOpen(true);
  };

  return (
    <div>
      <Container>
        {/* <EditForm
          rows={rows}
          setRows={setRows}
          row={row}
          setRow={setRow}
          saveRow={saveRow}
        /> */}

        <Button onClick={newRow}>新增</Button>
        <ModalForm
          open={open}
          setOpen={setOpen}
          rows={rows}
          setRows={setRows}
          row={row}
          setRow={setRow}
          saveRow={saveRow}
          deleteRow={deleteRow}
        />

        <DataList rows={rows} editRow={editRow} />

        {/* <Modal rows={rows} editRow={editRow}/> */}

        {/* <Dashboard rows={rows} /> */}

        {/* <List rows={rows} deleteRow={deleteRow} editRow={editRow} /> */}
      </Container>
    </div>
  );
}
