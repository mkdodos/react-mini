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

export default function CardTable({ row }) {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            {row?.routeId}
          </Card.Header>
          <Card.Meta>
            <span className="date">{row?.createdAt}</span>
          </Card.Meta>
          <Card.Description>
            <Table basic="very" celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>工單</Table.HeaderCell>
                  <Table.HeaderCell>數量</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {row?.route_details?.map((obj) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{obj.id}</Table.Cell>
                      <Table.Cell>{obj.qty}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell>月支出</Table.HeaderCell>
                  <Table.HeaderCell colSpan="2">
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      basic
                      size="small"
                    >
                      <Icon name="usd" /> 18629
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
