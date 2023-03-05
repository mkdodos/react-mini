import { useEffect, useState, useRef } from 'react';
import { Container, Input, Button, Menu, Icon } from 'semantic-ui-react';
import TableList from './components/TableList';
import { db } from '../../utils/firebase';

export default function Index() {
  // firebase 集合
  const dbCol = db.collection('balances');

  // 資料陣列
  const [rows, setRows] = useState([]);

  // 篩選用資料陣列
  let [rowsFilter, setRowsFilter] = useState([]);

  // 分頁用資料陣列
  let [rowsPage, setRowsPage] = useState([]);

  // 每頁筆數
  const rowsPerPage = 10;

  // 載入中
  const [loading, setLoading] = useState(false);  
  
  // 筆數
  // const [rowsCount, setRowsCount] = useState(5);

  // 目前頁數
  const [currentPage, setCurrentPage] = useState(1);

  // 最後一筆
  const lastSnapshot = useRef();

  // 取得資料
  useEffect(() => {
    dbCol
      .orderBy('date', 'desc')
      .limit(rowsPerPage)
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);

        setRowsFilter(data);
        setRowsPage(data);

        // 分頁
        // const totalRows = data.length;
        // const rowsPerPage = 5;
        // const pages = totalRows / rowsPerPage;
        // const pageBegin = (currentPage - 1) * rowsPerPage;
        // const pageEnd = pageBegin + rowsPerPage;
        // const pageRow = data.slice(pageBegin, pageEnd);
        // setRows(pageRow);

        // 最後一筆
        lastSnapshot.current = snapshot.docs[snapshot.docs.length - 1];
      });
  }, []);

  // // 取得資料
  // useEffect(() => {
  //   // 分頁
  //   const totalRows = rows.length;
  //   const rowsPerPage = 5;
  //   const pages = totalRows / rowsPerPage;
  //   const pageBegin = (currentPage - 1) * rowsPerPage;
  //   const pageEnd = pageBegin + rowsPerPage;
  //   const pageRow = rowsFilter.slice(pageBegin, pageEnd);
  //   setRows(pageRow);
  // }, [currentPage]);

  // 分頁
  const handlePageChanged = (e, { content }) => {

    // const rowsPerPage = 5;
    const totalRows = rows.length;
    const pages = totalRows / rowsPerPage;
    const pageBegin = (content - 1) * rowsPerPage;
    const pageEnd = pageBegin + rowsPerPage;
    const pageRow = rowsPage.slice(pageBegin, pageEnd);
    setRows(pageRow);
    setCurrentPage(content);
    
  };

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
      .limit(rowsPerPage)
      .startAfter(lastSnapshot.current)
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        // setRows([...rows, ...data]);
        setRows(data);
        setRowsFilter([...rowsFilter, ...data]);
        setRowsPage([...rowsPage, ...data]);
        lastSnapshot.current = snapshot.docs[snapshot.docs.length - 1];

        // 頁碼跳至最後一頁
        setCurrentPage(Math.ceil(rowsPage.length / rowsPerPage)+1);
      });

    // console.log(rows)
  };

  // 組合分頁條
  let menuItems = [];
  for (let i = 1; i <= Math.ceil(rowsPage.length / rowsPerPage); i++) {
    menuItems.push(
      <Menu.Item color='orange' active={currentPage==i} as="a" onClick={handlePageChanged} content={i}>
        {i}
        {/* <Icon name='gamepad' /> */}
      </Menu.Item>
    );
  }
  return (
    <Container>
      {/* {Math.ceil(rowsPage.length / rowsPerPage)} */}
      <Input onChange={filterData} />

      <Button onClick={loadMore}>載入更多</Button>

      <Menu floated="right" pagination >
        <Menu.Item as="a" icon>
          <Icon name="chevron left" />
        </Menu.Item>

        {menuItems}
        {/* <Menu.Item as="a" onClick={handlePageChanged} content="1">
          1
        </Menu.Item>
        <Menu.Item as="a" content="2" onClick={handlePageChanged}>
          2
        </Menu.Item>
        <Menu.Item as="a" content="3" onClick={handlePageChanged}>
          3
        </Menu.Item>
        <Menu.Item as="a" content="4" onClick={handlePageChanged}>
          4
        </Menu.Item> */}

        <Menu.Item as="a" icon>
          <Icon name="chevron right" />
        </Menu.Item>
      </Menu>
      <TableList loading={loading} rows={rows} setRows={setRows} />
    </Container>
  );
}
