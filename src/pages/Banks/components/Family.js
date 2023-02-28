import React from 'react';

import { List, Card, Icon, Loader } from 'semantic-ui-react';

import numberFormat from '../../../utils/numberFormat';

import AccordianDemo from './AccordianDemo';

export default function Family({ row }) {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>中國信託</Card.Header>
          <Card.Meta>
            <span className="date">Updated in 2/20</span>
          </Card.Meta>
          <Card.Description>
            {/* <List divided relaxed horizontal>
              <List.Item>
                <List.Icon
                  name="circle outline"
                                  
                />
                活期存款
              </List.Item>
              <List.Item>{numberFormat(row.amt)}</List.Item>             
            </List> */}

            <AccordianDemo />
          </Card.Description>
        </Card.Content>
        {/* <Card.Content extra>
          <Icon name="usd" />
          {numberFormat(row.amt + row.fixedAmt)}
        </Card.Content> */}
      </Card>
    </>
  );
}
