import React from 'react';

import { List, Card, Icon } from 'semantic-ui-react';
export default function Isun() {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>玉山</Card.Header>
          <Card.Meta>
            <span className="date">Updated in 2/20</span>
          </Card.Meta>
          <Card.Description>
            <List divided relaxed horizontal>
              <List.Item>
                <List.Icon
                  name="circle outline"
                  size="middle"
                  // verticalAlign="middle"
                />
                活期存款
              </List.Item>

              <List.Item>145600</List.Item>
            </List>
            <List divided relaxed horizontal>
              <List.Item>
                <List.Icon
                  name="circle"
                  // size="large"
                  // verticalAlign="middle"
                />
                定期存款
              </List.Item>
              <List.Item>789000</List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="usd" />
          42,235
        </Card.Content>
      </Card>
    </>
  );
}
