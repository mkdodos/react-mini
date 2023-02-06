import React from 'react';
import { Table, Header, Label } from 'semantic-ui-react';
export default function DataList({ rows,editRow }) {
  return (
    <div>
      <Table unstackable>
        <Table.Body>
          {rows.map((row,index) => {
            return (
              <Table.Row onClick={() => editRow(row,index)}>
                <Table.Cell>
                  <Header as="h4">{row.note}</Header>
                  <span>{row.consumeDate} </span>
                </Table.Cell>
                <Table.Cell textAlign="right">
                  <Label color='teal'  basic>
                    ${row.amt}
                  </Label>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
