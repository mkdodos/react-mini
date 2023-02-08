import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import List from './components/List';
import EditForm from './components/EditForm';
import Dashboard from './components/Dashboard';
import {
  Container,
  Button,
  Divider,
  Icon,
  Input,
  Segment,
} from 'semantic-ui-react';

import DataList from './components/DataList';
import ModalForm from './components/ModalForm';

export default function Index() {
  // 編輯表單開關
  const [open, setOpen] = useState(false);

  // 載入中
  const [loading, setLoading] = useState(false);

  // 資料集合
  const [rows, setRows] = useState([]);

  const [rowsCopy, setRowsCopy] = useState([]);

  // 編輯列索引
  const [editRowIndex, setEditRowIndex] = useState(-1);

  // 表單預設值
  const defalutItem = {
    consumeDate: new Date().toISOString().slice(0, 10),
    note: '',
    amt: '',
    section: '11112',
  };

  // 編輯列
  const [row, setRow] = useState(defalutItem);

  // firebase 集合
  const dbCol = db.collection('credits');

  // 排序
  const [direction, setDirection] = useState('acending');
  const [column, setColumn] = useState('');

  // 篩選
  const [filterText, setFilterText] = useState('');
  const [filterSection, setFilterSection] = useState('11112');

  const [filter, setFilter] = useState({});

  // 取得資料
  useEffect(() => {
    dbCol.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setRows(data);
      setRowsCopy(data);

      // 排序
      // sortData(data).reverse()
      sortData(data);
    });
  }, []);

  // 排序
  const sortData = (data, column) => {
    data = data.slice().sort(function (a, b) {
      if (column == 'date') return a.consumeDate > b.consumeDate ? 1 : -1;
      if (column == 'amt') return a.amt * 1 > b.amt * 1 ? 1 : -1;
    });
    if (direction == 'decending') data.reverse();
    setRows(data);
    // 遞增遞減
    if (direction == 'acending') setDirection('decending');
    if (direction == 'decending') setDirection('acending');
  };

  function isBigEnough(obj) {
    return obj.amt >= 1000;
  }

  // const filter = {
  //   address: 'England',
  //   name: 'Tom',
  // };

  // 組合條件
  // const filter = {

  // };

  // 加入條件
  // filter.address='England';
  // filter.name='Tom';

  // 刪除條件
  // delete filter['name'];
  // delete filter['address'];

  // let users = [
  //   {
  //     name: 'John',
  //     email: 'johnson@mail.com',
  //     age: 25,
  //     address: 'USA',
  //   },
  //   {
  //     name: 'Tom',
  //     email: 'tom@mail.com',
  //     age: 35,
  //     address: 'England',
  //   },
  //   {
  //     name: 'Mark',
  //     email: 'mark@mail.com',
  //     age: 28,
  //     address: 'England',
  //   },
  // ];

  // 每筆資料和條件比對,只要不符合就排除
  // 參考https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions
  // users = users.filter((item) => {
  // for (let key in filter) {

  // if (item[key] != filter[key]) return false;
  // if (filter[key].length==0) return true;
  // if (item[key] === undefined || item[key] != filter[key]) return false;
  //   }
  //   return true;
  // });

  // console.log(users);

  // 篩選
  const filterData = (e) => {
    setFilter({ ...filter, note: e.target.value });
    // for(let key in filter){
    //   console.log(key)
    // }

    if (e.target.value == '')
      setFilter((current) => {
        // remove cost key from object
        const { note, ...rest } = current;
        return rest;
      });

    // let newData = rowsCopy.filter((row) => {
    //   return row.note.includes(filter.note);
    // });

    // console.log(newData);
    // includes 傳回 true false
    // let newData = rowsCopy.filter((row) => row.note.includes(e.target.value));
    // setRows(newData);
    // setRows(rowsCopy.filter((row) => row.note.includes(e.target.value)));
    // setRows(rowsCopy.filter(isBigEnough));
  };

  // 篩選
  const filterDataBySection = (e) => {
   
    if (e.target.value == ''){

      setFilter((current) => {
        // remove cost key from object
        // 將目前物件中的 section 屬性值獨立為一個變數
        // 然後物件其他的屬性值指派給 rest 這個新的物件變數

        const { section, ...rest } = current;
        // 傳回 rest ,就沒有包含 section 屬性
        return rest;
      });
    }else{

      setFilter({ ...filter, section: e.target.value }); 
    }
      

    // for(let key in filter){
    //   console.log(key)
    // }
    // let newData = rowsCopy;
    // newData = newData.filter((row) => row.section == e.target.value);
    // setRows(newData);
  };

  const handleFilter = () => {
    let newData = rowsCopy;

    newData = newData.filter((row) => {
      for (let key in filter) {
        // console.log(row[key])
        // if (row[key] != filter[key]) return false;
        // 值有可能空,加上?判斷
        if (!row[key]?.includes(filter[key])) return false;

      }
      return true;
    });
    setRows(newData);
    console.log(filter);
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

  // 新增一筆
  const newRow = () => {
    setEditRowIndex(-1);
    setRow(defalutItem);
    setOpen(true);
  };

  return (
    <div>
      <Container>
        {filter.note}
        {filter.section}
        {/* <EditForm
          rows={rows}
          setRows={setRows}
          row={row}
          setRow={setRow}
          saveRow={saveRow}
        /> */}

        <Divider horizontal>信用卡 111/12</Divider>
        <Button onClick={newRow}>
          <Icon name="plus" />
          新增
        </Button>

        <Button onClick={handleFilter}>篩選</Button>

        <ModalForm
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

        <Dashboard rows={rows} />

        <Segment>
          <Button
            icon
            onClick={() => {
              setColumn('date');
              sortData(rows, 'date');
            }}
          >
            日期
            {direction == 'decending' && column == 'date' && (
              <Icon name="angle up" />
            )}
            {direction == 'acending' && column == 'date' && (
              <Icon name="angle down" />
            )}
          </Button>

          <Button
            icon
            onClick={() => {
              setColumn('amt');
              sortData(rows, 'amt');
            }}
          >
            金額
            {direction == 'decending' && column == 'amt' && (
              <Icon name="angle up" />
            )}
            {direction == 'acending' && column == 'amt' && (
              <Icon name="angle down" />
            )}
          </Button>

          <Input onChange={filterData} size="small" />
          <Input onChange={filterDataBySection} size="small" />
        </Segment>

        {/* <List rows={rows} deleteRow={deleteRow} editRow={editRow} /> */}

        <DataList rows={rows} editRow={editRow} />

        {/* <Modal rows={rows} editRow={editRow}/> */}
      </Container>
    </div>
  );
}
