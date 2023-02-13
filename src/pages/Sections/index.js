import { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import TableList from './components/TableList';
import EditForm from './components/EditForm';
import { Tab } from 'semantic-ui-react';

export default function Index() {
  // 編輯表單開關
  const [open, setOpen] = useState(false);

  // 載入中
  const [loading, setLoading] = useState(false);

  // 資料集合
  const [rows, setRows] = useState([]);

  // firebase 集合
  const dbCol = db.collection('sections');

  // 表單預設值
  const defalutItem = {section:''};

  // 編輯列
  const [row, setRow] = useState(defalutItem);

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

  // 編輯(設定索引和編輯列)
  const editRow = (row, index) => {
    setEditRowIndex(index);
    setRow(row);
    setOpen(true);
  };

  return (
    <div>
      <TableList loading={loading} deleteRow={deleteRow} rows={rows} editRow={editRow} />
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
    </div>
  );
}
