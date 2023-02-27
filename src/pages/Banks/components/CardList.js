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
          <Card.Header>帳戶</Card.Header>
          <Card.Meta>
            <span className="date">Updated in 2/20</span>
          </Card.Meta>
          <Card.Description>
            <List divided relaxed horizontal>
              <List.Item>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                土地銀行
              </List.Item>

              <List.Item>145600</List.Item>
            </List>
            <List divided relaxed horizontal>
              <List.Item>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                玉山銀行
              </List.Item>
              <List.Item>789000</List.Item>
            </List>

            <List divided relaxed horizontal>
              <List.Item>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                中國信託
              </List.Item>
              <List.Item>7890</List.Item>
            </List>

            {/* <List divided relaxed>
              <List.Item>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                土地銀行
              </List.Item>
              <List.Item>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                玉山銀行
              </List.Item>
              <List.Item>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                中國信託
              </List.Item>
            </List> */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="usd" />
          42,235
        </Card.Content>
      </Card>
    </div>
  );
}
