import React from 'react';

import { List, Card, Icon, Loader } from 'semantic-ui-react';

import numberFormat from '../../../utils/numberFormat';

export default function Isun({ row }) {
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

              <List.Item>{numberFormat(row.amt)}</List.Item>
              {/* <List.Item>{row.amt}</List.Item> */}
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
              <List.Item>{numberFormat(row.fixedAmt)}</List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="usd" />
          {numberFormat(row.amt + row.fixedAmt)}
        </Card.Content>
      </Card>
    </>
  );
}
