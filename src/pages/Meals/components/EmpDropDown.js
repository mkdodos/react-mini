import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import axios from 'axios';

export default function EmpDropDown({value,onChange}) {
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
  

  // const handleChange = (e, { value }) => {
  //   console.log(value);
  // };
  return (
    <div>
      <Dropdown
        placeholder="選取人員"
        fluid
        selection
        search
        options={rows}
        value={value}        
        onChange={onChange}
      />
    </div>
  );
}
