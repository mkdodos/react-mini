import React, { useEffect, useState } from 'react';
import { db } from '../utils/firebase';
import {
  Icon,
  Label,
  Menu,
  Table,
  Container,
  Button,
  Header,
} from 'semantic-ui-react';

export default function Credit() {
  const [rows, setRows] = useState([]);

  const dbCol = db.collection('credits');
  useEffect(() => {
    // dbCol.add({ note: 'ddd' });
    dbCol.get().then((snapshot) => {
      console.log(snapshot.docs);
      console.log(snapshot.docs[0].id);
      console.log(snapshot.docs[0].data());
      console.log(snapshot.size);

      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });

      setRows(data);

      console.log(data);
    });
  }, []);
  return (
    <div>
      <Container>
        <Header as="h1">First Header</Header>
        <Button>新增</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}>消費日</Table.HeaderCell>
              <Table.HeaderCell width={2}>入帳日</Table.HeaderCell>
              <Table.HeaderCell>明細</Table.HeaderCell>
              <Table.HeaderCell>金額</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {rows.map((row) => {
              return (
                <Table.Row>
                  <Table.Cell>{row.consume_date}</Table.Cell>
                  <Table.Cell>{row.account_date}</Table.Cell>
                  <Table.Cell>{row.note}</Table.Cell>
                  <Table.Cell>{row.amt}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
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
      </Container>
    </div>
  );
}
