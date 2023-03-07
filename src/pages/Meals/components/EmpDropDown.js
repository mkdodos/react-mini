import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import axios from 'axios';

export default function EmpDropDown() {
  const url = 'http://localhost:8888/pdo-salary/employee/read.php';

  const [rows,setRows]=useState([])
  useEffect(() => {
    axios.get(url).then((res) => {
      const data = res.data.map(emp=>{
        return {key:emp.name,text:emp.name,value:emp.name}
      })
      setRows(data)
      console.log(data);
    });
  }, []);
  const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
    },
  ];

  const handleChange = (e, { value }) => {
    console.log(value);
  };
  return (
    <div>
      <Dropdown
        placeholder="Select Friend"
        fluid
        selection
        options={rows}
        onChange={handleChange}
      />
    </div>
  );
}
