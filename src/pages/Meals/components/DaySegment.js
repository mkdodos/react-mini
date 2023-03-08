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

      console.log(newData);
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

  const abc = (index) => {
    let dd = [];
    // for (let i = 0; i < 10; i++) {
    //   dd.push(
    //     <Grid.Column>
    //       <Segment>{i}</Segment>
    //     </Grid.Column>
    //   );
    // }

    //

    daysData.slice(index, index + 3).map((day, index) => {
      dd.push(
        <Grid.Column>
          {/* <Segment></Segment> */}
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

            {/* {day[0].date} */}
            {/* {day.map((row) => {
              return row.name;
            })} */}
          </Segment>
        </Grid.Column>
      );
    });

    return dd;
  };

  const cde = () => {
    const output = [];
    for (let i = 0; i < daysData.length; i++) {
      if (i % 3 == 0) output.push(<Grid.Row>{abc(i)}</Grid.Row>);
    }
    return output;
  };

  return (
    <>
      {/* {cde()} */}
      {/* {daysData.slice(0, 3).map((day) => {
        return day.map((row) => {
          return <div key={row.id}>{row.date}{row.name}</div>;
        });
      })} */}

      <Grid columns={3}>
        {cde()}
        {/* <Grid.Row>{abc()}</Grid.Row> */}
      </Grid>

      <Grid columns={3}>
        {/* <Grid.Row>
          {daysData.slice(0, 3).map((day, index) => {
            return (
              <Grid.Column>
                <Segment>
                  {day.map((row) => {
                    return (
                      <div>
                        {row.date}
                        {row.name}
                        {row.amt}
                      </div>
                    );
                  })}
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid.Row> */}
        {/* <Grid.Row>
          {daysData.slice(3, 6).map((day, index) => {
            return (
              <Grid.Column>
                <Segment>
                  {day.map((row) => {
                    return (
                      <div>
                        {row.date}
                        {row.name}
                        {row.amt}
                      </div>
                    );
                  })}
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid.Row> */}
      </Grid>

      {/* <Grid columns={3}>       
        <Grid.Row>
          {daysData.map((day, index) => {
            return (
              <Grid.Column>
                <Segment>
                  {day.map((row) => {
                    return (
                      <div>
                        {row.date}
                        {row.name}
                        {row.amt}
                      </div>
                    );
                  })}
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid.Row>       
      </Grid> */}
    </>
  );
}
