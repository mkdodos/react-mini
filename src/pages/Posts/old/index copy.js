import React, { useEffect, useState } from 'react';
import api from '../../api/posts';
import PostList from './PostList';
import CardList from './CardList';
import './index.css';

export default function Index() {
  // workdone
  // {
  //   "cust_name": "萬龍",
  //   "work_id": "2022112904",
  //   "in_qty": "2",
  //   "qty": "2",
  //   "work_name": "刀軸",
  //   "pic_no": "",
  //   "size": "Φ185*1440*2425",
  //   "dest": ""
  //   }
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res1 = await api.get(
          '/react-plan/pdo/carRouting/car_request.php'
        );
        const res2 = await api.get('/react-plan/pdo/carRouting/workdone.php');
        // setRows(res1.data);
        setRows(res2.data);
        console.log(res1.data);
        console.log(res2.data);
      } catch (err) {}
    };

    fetchPosts();
  }, []);
  return (
    <div>
      {/* <PostList rows={rows} /> */}
      <CardList rows={rows} />
    </div>
  );
}
