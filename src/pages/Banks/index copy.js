import React, { useEffect, useState } from 'react';
import {
  Container,
  Segment,
  Header,
  Icon,
  Label,
  Grid,
  Image,
  Card,
  List,
  Divider,
  Loader
} from 'semantic-ui-react';

import CardList from './components/CardList';
import CardList2 from './components/CardList2';
import CardTable from './components/CardTable';

import CardChild from './components/CardChild';
import CardISun from './components/CardISun';
import Isun from './components/Isun';
import numberFormat from '../../utils/numberFormat';
import { db } from '../../utils/firebase';

export default function Index() {
  // const rows = [
  //   { name: '土地銀行', amt: 12563, color: 'green' },
  //   { name: '玉山銀行', amt: 122831, fixedAmt: 300000, color: 'teal' },
  // ];

  const [rows, setRows] = useState([]);

  const [row, setRow] = useState({});
  useEffect(() => {
    db.collection('accounts')
      .where('name', '==', '玉山')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return doc.data();
        });
        console.log(data[0]);
        setRows(data);
        setRow(data[0]);
      });
  }, []);
  return (
    <div>
      <Container>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="tag" />
            帳戶
          </Header>
        </Divider>

        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column>
              <CardList />
            </Grid.Column>
            <Grid.Column>
              {/* 等資料載入成功再顯示,才不會出現空白 */}
              {row.amt ? <Isun row={row}/> : <Loader active inline='centered' />}
              {/* <Isun row={row}/> */}

              {/* <CardTable row={rows[0]} child={<CardChild row={rows[0]} />} /> */}
            </Grid.Column>
            <Grid.Column>
              {/* <CardTable row={rows[1]} child={<CardISun row={rows[1]} />} /> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* <Segment circular>
          <Header as="h2">
            Sale!
            <Header.Subheader>$10.99</Header.Subheader>
          </Header>
        </Segment> */}
        <Segment padded>
          <Header>玉山</Header>
          <Label color="blue">
            <Icon name="mail" /> 2/23
          </Label>
        </Segment>
      </Container>
    </div>
  );
}
