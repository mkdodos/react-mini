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
} from 'semantic-ui-react';

export default function CardList2() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>土銀</Card.Header>
          <Card.Meta>
            <span className="date">Updated in 2/20</span>
          </Card.Meta>
          <Card.Description>
            <List divided horizontal>
              <List.Item>
                <List.Content>
                  <List.Header>241</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>146</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>387</List.Header>
                </List.Content>
              </List.Item>
            </List>
            <br/>
            <List divided horizontal>
              <List.Item>
                <List.Content>
                  <List.Header>11604</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>146</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>387</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="usd" />
          <Header> 42,235</Header>
        </Card.Content>
      </Card>
    </div>
  );
}
