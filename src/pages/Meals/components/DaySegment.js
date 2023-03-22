import React, { useEffect, useState } from 'react';
import { Segment, Table, Header, Grid, Image, Label } from 'semantic-ui-react';

export default function DaySegment({ rows, queryMonth }) {
  const [daysData, setDaysData] = useState([]);
  // 將原資料重新組合3天為一筆方便顯示
  const [days3, setDays3] = useState([]);
  useEffect(() => {
    console.log(rows);
    const ym = '2023-' + queryMonth + '-';
    const arrayData = [];
    const arrayData3 = [];
    for (let i = 1; i <= 31; i++) {
      let ymd = '';
      if (i < 10) {
        ymd = ym + '0' + i;
        // console.log(ym+'0'+i);
      } else {
        ymd = ym + i;
        // console.log(ym + i);
      }

      let newData = rows.filter((row) => row.date == ymd);

      // console.log(newData);
      if (newData.length > 0) arrayData.push(newData);
    }

    console.log(arrayData.slice(0, 3));
    console.log(arrayData.slice(3, 6));

    // newData = rows.filter((row) => row.date == '2023-02-07');
    // arrayData.push(newData)
    setDaysData(arrayData);
  }, [rows]);

  // 計算加總金額
  const calTotal = (rows) => {
    let total = 0;
    rows.map((row) => {
      total += Number(row.amt);
    });
    return total;
  };

  // 組合每一列的欄位資料
  const dayColumns = (index, columnsCount) => {
    let dd = [];

    daysData.slice(index, index + columnsCount).map((day, index) => {
      dd.push(
        <Grid.Column>
          <Segment>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>{day[0].date}</Table.HeaderCell>
                  <Table.HeaderCell>{calTotal(day)}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {day.map((row) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{row.name}</Table.Cell>
                      <Table.Cell>{row.amt}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      );
    });

    return dd;
  };

  // 依欄數組合每幾天一列
  const dayRows = (columnsCount) => {
    const output = [];
    for (let i = 0; i < daysData.length; i++) {
      if (i % columnsCount == 0)
        output.push(<Grid.Row>{dayColumns(i, columnsCount)}</Grid.Row>);
    }
    return output;
  };

  return (
    <>
      <Grid columns={5}>{dayRows(5)}</Grid>
    </>
  );
}
