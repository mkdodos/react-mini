import React, { useEffect, useState } from 'react';
import {
  Container,
  Divider,
  Header,
  Icon,
  Table,
  List,
} from 'semantic-ui-react';
import { db_echoway } from '../../utils/firebase';

export default function Index() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    // db_echoway.collection('carRoutes').onSnapshot((snapshot) => {
    db_echoway
      .collection('carRoutes')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setRows(data);
        console.log(data);
      });
  }, []);
  return (
    <Container>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="tag" />
          主表
        </Header>
        
      </Divider>

      <List bulleted horizontal>
        <List.Item>{rows[0]?.routeId}</List.Item>
        <List.Item>{rows[0]?.planer}</List.Item>
        <List.Item>{rows[0]?.driver}</List.Item>
        <List.Item>{rows[0]?.createdAt}</List.Item>
      </List>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="bar chart" />
          明細
        </Header>
      </Divider>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>工單</Table.Cell>
            <Table.Cell>{rows[0]?.route_details[0]?.id}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>數量</Table.Cell>
            <Table.Cell>{rows[0]?.route_details[0]?.qty}</Table.Cell>
          </Table.Row>
         
        </Table.Body>
      </Table>
    </Container>
  );
}
