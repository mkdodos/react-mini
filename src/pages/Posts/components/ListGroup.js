import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Item, List, Table } from 'semantic-ui-react';

export default function ListGroup() {
  const yearOptions = [];
  const data = [
    {
      year: 2023,
      monthData: [
        { month: '1', amt: 2023458 },
        { month: '2', amt: 2023654 },
        { month: '3', amt: 202303123 },
      ],
    },
    {
      year: 2022,
      monthData: [
        { month: '1', amt: 20224346 },
        { month: '2', amt: 202293456 },
      ],
    },
    {
      year: 2021,
      monthData: [
        { month: '1', amt: 2021456 },
        { month: '2', amt: 2021458 },
      ],
    },
  ];
  for (let i = 2023; i > 2020; i--) {
    yearOptions.push({ text: i, value: i, key: i });
  }

  const [year, setYear] = useState(2023);

  const [monthRows, setMonthRows] = useState([]);

  useEffect(() => {
    const d = data.filter((row) => row.year == 2023);
    setMonthRows(d[0].monthData);
  }, []);

  function handleYearChange(e, { value }) {
    const d = data.filter((row) => row.year == value);
    setMonthRows(d[0].monthData);
    console.log(d[0].monthData);
    setYear(value);
  }
  return (
    <Container>
      <Dropdown
        options={yearOptions}
        value={year}
        onChange={handleYearChange}
      />
      <Table celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>月份</Table.HeaderCell>
            <Table.HeaderCell>小計</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {monthRows.map((row) => {
            return (
              <Table.Row key={row.month}>
                <Table.Cell>{row.month}</Table.Cell>
                <Table.Cell>{row.amt}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {/* <List divided>
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List> */}
    </Container>
    // <ul className="list-group">
    //   <li className="list-group-item">An item</li>
    //   <li className="list-group-item">A second item</li>
    //   <li className="list-group-item">A third item</li>
    //   <li className="list-group-item">A fourth item</li>
    //   <li className="list-group-item">And a fifth one</li>
    // </ul>
  );
}
