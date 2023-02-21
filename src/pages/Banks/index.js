import React from 'react';
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
} from 'semantic-ui-react';

import CardList from './components/CardList';
import CardList2 from './components/CardList2';

export default function Index() {
  return (
    <div>
      <Container>
        <CardList />

        <Divider />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <CardList />
              {/* <Segment padded>
                <Label attached="top">
                  <Header>土銀</Header>
                </Label>
                241+146=387
                <Label as="a" color="teal" tag>
                  2/20
                </Label>
              </Segment> */}
            </Grid.Column>
            <Grid.Column>
             <CardList2/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment circular>
          <Header as="h2">
            Sale!
            <Header.Subheader>$10.99</Header.Subheader>
          </Header>
        </Segment>
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
