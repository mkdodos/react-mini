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

export default function CardList() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>土銀</Card.Header>
          <Card.Meta>
            <span className="date">Updated in 2/20</span>
          </Card.Meta>
          <Card.Description>
            <List divided relaxed>
              <List.Item>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                241+146=387
              </List.Item>
              <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
                1604+6638=18242</List.Item>
              <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
                83942+3991117=4075059</List.Item>
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
