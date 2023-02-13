import {
  Icon,
  Label,
  Menu,
  Table,
  Container,
  Button,
  Header,
} from 'semantic-ui-react';

export default function TableList({ rows, deleteRow, editRow,loading }) {
  return (
    <div>
      <Table celled selectable unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>期數</Table.HeaderCell>

            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell>{row.section}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="green"
                    basic
                    onClick={() => editRow(row, index)}
                  >
                    Edit
                  </Button>
                  <Button
                  loading={loading}
                    color="red"
                    basic
                    onClick={() => deleteRow(row, index)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
