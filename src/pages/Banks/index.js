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
  List
} from 'semantic-ui-react';
export default function Index() {
  return (
    <div>
      <Container>
        <Card>
          <Card.Content>
            <Card.Header>土銀</Card.Header>
            <Card.Meta>
              <span className="date">Updated in 2/20</span>
            </Card.Meta>
            <Card.Description>
              
              <List divided relaxed>
                <List.Item>241+146=387</List.Item>
                <List.Item>1604+6638=18242</List.Item>
                <List.Item>83942+3991117=4075059</List.Item>
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="usd" />
              42,235
            </a>
          </Card.Content>
        </Card>

        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment padded>
                <Label attached="top">
                  <Header>土銀</Header>
                </Label>
                241+146=387
                <Label as="a" color="teal" tag>
                  2/20
                </Label>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment padded>
                <Header>玉山</Header>
                <Label color="blue">
                  <Icon name="mail" /> 2/23
                </Label>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment circular>
          <Header as="h2">
            Sale!
            <Header.Subheader>$10.99</Header.Subheader>
          </Header>
        </Segment>
      </Container>
    </div>
  );
}
