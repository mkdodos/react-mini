import React, { useEffect, useState } from 'react';
import { Segment, Table, Header, Grid, Image } from 'semantic-ui-react';

export default function DaySegment({ rows, queryMonth }) {
  const [daysData, setDaysData] = useState([]);
  useEffect(() => {
    console.log(rows);
    const ym = '2023-' + queryMonth + '-';
    const arrayData = [];
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

  return (
    <>
      {/* <Segment.Group horizontal>
        {daysData.map((day) => {
          return (
            <Segment>
              <Table basic="very" celled collapsing unstackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>{day[0].date}</Table.HeaderCell>
                    <Table.HeaderCell>{calTotal(day)}</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {day.map((row) => {
                    return (
                      <Table.Row key={row.id}>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>{row.name}</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>{row.amt}</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </Segment>
          );
        })}
      </Segment.Group> */}

      <Grid columns={3}>
        {daysData.map((day) => {
          return (
            <Grid.Row>
              {day.map((row) => {
                return (
                  <Grid.Column>
                    <Segment>
                      <Table basic="very" celled collapsing unstackable>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>{day[0].date}</Table.HeaderCell>
                            <Table.HeaderCell>{calTotal(day)}</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        <Table.Body>
                          {day.map((row) => {
                            return (
                              <Table.Row key={row.id}>
                                <Table.Cell>
                                  <Header as="h4" image>
                                    <Header.Content>{row.name}</Header.Content>
                                  </Header>
                                </Table.Cell>
                                <Table.Cell>{row.amt}</Table.Cell>
                              </Table.Row>
                            );
                          })}
                        </Table.Body>
                      </Table>
                    </Segment>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          );
        })}
      </Grid>
    </>
  );
}
