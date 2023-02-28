import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Segment,
  Loader,
  Icon,
} from 'semantic-ui-react';
import CardList from './CardList';
import Isun from './Isun';
import Family from './Family';
import AccordianDemo from './AccordianDemo';
import { db } from '../../../utils/firebase';

export default function Layout() {
  const [row, setRow] = useState({});
  useEffect(() => {
    db.collection('accounts')
      .where('name', '==', '玉山')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setRow(data[0]);
      });

    db.collection('balances')
      .where('account.name', '==', '中國信')
      .get()
      .then((snapshot) => {
        console.log(snapshot.size);
      });
  }, []);

  return (
    <Container>
      <Segment placeholder>
        <Grid columns={3} relaxed="very">
          <Grid.Column>
            <CardList />
          </Grid.Column>

          <Grid.Column>
            {/* 等資料載入成功再顯示,才不會出現空白 */}
            {row.amt ? <Isun row={row} /> : <Loader active inline="centered" />}
            <Family row={row} />
          </Grid.Column>
          <Grid.Column>
            <AccordianDemo/>
          </Grid.Column>
        </Grid>

        {/* <Divider vertical>
          <Icon name="bullseye" />
        </Divider> */}
      </Segment>
    </Container>
  );
}
