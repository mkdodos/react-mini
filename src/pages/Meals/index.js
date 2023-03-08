import { useEffect, useState } from 'react';
import { db_echoway } from '../../utils/firebase';

import TableList from './components/TableList';
import EditForm from './components/EditForm';
import Dashboard from './components/Dashboard';
import MonthDropDown from './components/MonthDropDown';
import DaySegment from './components/DaySegment';

import { Button, Container, Segment } from 'semantic-ui-react';

export default function Index() {
  // firebase 集合
  const dbCol = db_echoway.collection('meals');

  // 資料陣列
  const [rows, setRows] = useState([]);

  // 表單預設值
  const defalutItem = {
    date: new Date().toISOString().slice(0, 10),
    name: '',
    amt: '',
  };

  // 編輯列
  const [row, setRow] = useState(defalutItem);

  // 編輯表單開關
  const [open, setOpen] = useState(false);

  // 載入中
  const [loading, setLoading] = useState(false);

  // 編輯列索引
  const [editRowIndex, setEditRowIndex] = useState(-1);

  // 篩選
  const [queryMonth, setQueryMonth] = useState('02');
  // 取得資料
  useEffect(() => {
    const queryDateBegin = '2023-' + queryMonth + '-01';
    const queryDateEnd = '2023-' + queryMonth + '-31';
    dbCol
      .where('date', '>=', queryDateBegin)
      .where('date', '<=', queryDateEnd)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setRows(data);
      });
    // dbCol.get().then((snapshot) => {
    //   const data = snapshot.docs.map((doc) => {
    //     return { ...doc.data(), id: doc.id };
    //   });

    //   setRows(data);
    // });
  }, [queryMonth]);

  // 編輯(設定索引和編輯列)
  const editRow = (row, index) => {
    setEditRowIndex(index);
    setRow(row);
    setOpen(true);
  };

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

        // 設為初始值
        setRow(defalutItem);
        setEditRowIndex(-1);
        setOpen(false);
        setLoading(false);
      });
  };

  const newRow = () => {
    // 設為初始值(有可能按了編輯沒儲存,再按新增時,需要做此動作)
    setRow(defalutItem);
    setEditRowIndex(-1);
    setOpen(true);
  };

  const handleMonthChange = (e, { value }) => {
    setQueryMonth(value);
    console.log(value);
  };

  return (
    <Container>
      <DaySegment rows={rows} queryMonth={queryMonth} />
      <Dashboard rows={rows} />

      <MonthDropDown onChange={handleMonthChange} />
      <Segment>
        <Button onClick={newRow}>新增</Button>
      </Segment>

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
        editRowIndex={editRowIndex}
      />

      <TableList
        loading={loading}
        deleteRow={deleteRow}
        rows={rows}
        editRow={editRow}
      />
    </Container>
  );
}
