import React from 'react';
import { Container, Table } from 'semantic-ui-react';

export default function index() {
  const rows = [    
    {
      date: '2023-03-01',
      km:14645,
      station: '仁德',
      qty: 41.78,
      price: 32.5,
      minus: 83,
    },
    
  ];
  return (
    <Container>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>日期</Table.HeaderCell>
            <Table.HeaderCell>公里數</Table.HeaderCell>
            <Table.HeaderCell>地點</Table.HeaderCell>
            <Table.HeaderCell>公升數</Table.HeaderCell>
            <Table.HeaderCell>單價</Table.HeaderCell>
            <Table.HeaderCell>小計</Table.HeaderCell>
            <Table.HeaderCell>折扣</Table.HeaderCell>
            <Table.HeaderCell>實付</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row) => {
            return (
              <Table.Row>
                <Table.Cell>{row.date.slice(5)}</Table.Cell>
                <Table.Cell>{row.km}</Table.Cell>
                <Table.Cell>{row.station}</Table.Cell>
                <Table.Cell>{row.qty}</Table.Cell>
                <Table.Cell>{row.price}</Table.Cell>
                <Table.Cell>{Math.round(row.qty*row.price)}</Table.Cell>
                <Table.Cell>{row.minus}</Table.Cell>
                <Table.Cell>{Math.round(row.qty*row.price)-row.minus}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  );
}
