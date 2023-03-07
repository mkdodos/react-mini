import React, { useEffect, useState } from 'react';
import { Segment, Table, Header } from 'semantic-ui-react';

export default function DaySegment({ rows }) {
  const [daysData, setDaysData] = useState([]);
  useEffect(() => {
    console.log(rows);
    let newData = rows.filter((row) => row.date == '2023-02-05');

    const arrayData = [];
    arrayData.push(newData)

    newData = rows.filter((row) => row.date == '2023-02-07');
    arrayData.push(newData)
    setDaysData(arrayData);
  }, []);
  return (
    <div>
      <Segment>
        <Table basic="very" celled collapsing unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>D</Table.HeaderCell>
              <Table.HeaderCell>姓名</Table.HeaderCell>
              <Table.HeaderCell>金額</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {daysData[0].map((row) => {
              return (
                <Table.Row key={row.id}>
                  <Table.Cell>{row.date}</Table.Cell>
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
    </div>
  );
}
