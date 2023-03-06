import React from 'react';
import { Card, List, Table, Image, Header, Segment,Statistic } from 'semantic-ui-react';

export default function Dashboard({ rows }) {
  // 人員
  const employees = ['馬', '陳', '林'];

  // 計算人員加總金額
  const calEmpTotal = (emp) => {
    let total = 0;
    let rowsEmp = rows.slice();
    rowsEmp = rows.filter((row) => row.name == emp);
    rowsEmp.map((row) => {
      total += Number(row.amt);
    });
    return total;
  };

  // 計算加總金額
  const calTotal = () => {
    let total = 0;
    rows.map((row) => {
      total += Number(row.amt);
    });
    return total;
  };

  // 人員金額加總列表
  const lists = [];
  employees.forEach((emp) => {
    lists.push({ name: emp, total: calEmpTotal(emp) });
  });

  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>
            <Segment>
              {/* 合計:{calTotal()} */}
            
            <Statistic  size='mini' horizontal  value={calTotal()} />
            </Segment>
          </Card.Header>
          <Card.Description>
            <Segment>
              <Table basic="very" celled collapsing>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>姓名</Table.HeaderCell>
                    <Table.HeaderCell>金額</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {lists.map((row) => {
                    return (
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>{row.name}</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>{row.total}</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </Segment>

            {/* {lists.map((row) => {
              return (
                <List celled horizontal>
                  <List.Item>{row.name}</List.Item>
                  <List.Item>{row.total}</List.Item>
                </List>
              );
            })} */}
          </Card.Description>
        </Card.Content>
      </Card>
      {/* {lists.map((row) => {
        return (
          <div>
            {row.name}
            {row.total}
          </div>
        );
      })} */}
    </>
  );

  // return <div>{calTotal('陳')}</div>;
  // return <div>{lists[0].emp}{lists[0].total}</div>;
}
