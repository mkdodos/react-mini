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
  Table,
  Button,
} from 'semantic-ui-react';

import numberFormat from '../../../utils/numberFormat'

import CardISun from './CardISun';
import CardList from './CardList';
export default function CardTable({row,child}) {
  return (
    <>
   
      <Card>
        <Card.Content>
          <Card.Header>
            <List.Icon color={row.color} name="github" size="large" verticalAlign="middle" />
            {row.name}
          </Card.Header>
          <Card.Meta>
            <span className="date">Updated in 2/20</span>
          </Card.Meta>
          <Card.Description>
            <CardISun/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>          
        <Card.Content extra>
          <Icon name="usd" />
          42,235
        </Card.Content>
          {/* <Header>餘額 {numberFormat(row.amt)}</Header> */}
        </Card.Content>
      </Card>
    </>
  );
}
