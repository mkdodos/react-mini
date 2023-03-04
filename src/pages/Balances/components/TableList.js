import { useEffect } from 'react';
import {
  Icon,
  Label,
  Menu,
  Table,
  Container,
  Button,
  Header,
} from 'semantic-ui-react';

export default function TableList({
  rows,
  setRows,
  deleteRow,
  editRow,
  loading,
}) {
  useEffect(() => {
    const totalRows = rows.length;
    const rowsPerPage = 5;
    const pages = totalRows / rowsPerPage;
    // console.log(pages)
    const currentPage = 2;
    const pageBegin = (currentPage - 1) * rowsPerPage;
    const pageEnd = pageBegin + rowsPerPage;
    const pageRow = rows.slice(pageBegin, pageEnd);

    console.log(pageBegin);
    console.log(pageEnd);
    setRows(pageRow);
    console.log(rows);
    console.log(pageRow);
  }, []);

  return (
    <div>
      {/* {rows[0].id} */}
      <Table celled selectable unstackable>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>日期</Table.HeaderCell>
            <Table.HeaderCell>類別</Table.HeaderCell>
            <Table.HeaderCell>項目</Table.HeaderCell>
            <Table.HeaderCell>收入</Table.HeaderCell>
            <Table.HeaderCell>支出</Table.HeaderCell>

            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell>{index}</Table.Cell>
                <Table.Cell>{row.date}</Table.Cell>
                <Table.Cell>
                  <Label>{row.cate}</Label>
                </Table.Cell>
                <Table.Cell>{row.title}</Table.Cell>
                <Table.Cell>{row.income}</Table.Cell>
                <Table.Cell>{row.expense}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="green"
                    basic
                    onClick={() => editRow(row, index)}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
