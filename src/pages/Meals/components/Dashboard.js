import React from 'react';

export default function Dashboard({ rows }) {
  
  // 人員
  const employees = ['馬', '陳', '林'];

  // 計算人員加總金額
  const calTotal = (emp) => {    
    let total = 0;
    let rowsEmp = rows.slice();
    rowsEmp = rows.filter((row) => row.name == emp);
    rowsEmp.map((row) => {
      total += Number(row.amt);
    });    
    return total;
  };

  // 人員金額加總列表
  const lists = [];
  employees.forEach((emp) => {
    lists.push({ name: emp, total: calTotal(emp) });
  });
  
  return (
    <>
      {lists.map((row) => {
        return (
          <div>
            {row.name}
            {row.total}
          </div>
        );
      })}
    </>
  );

  // return <div>{calTotal('陳')}</div>;
  // return <div>{lists[0].emp}{lists[0].total}</div>;
}
