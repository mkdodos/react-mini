import React from 'react';
import { Table,Header,Button,Icon } from 'semantic-ui-react';

export default function CardChild({row}) {
  return (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>本金</Table.HeaderCell>
            <Table.HeaderCell>利息</Table.HeaderCell>
            <Table.HeaderCell>小計</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>241</Table.Cell>
            <Table.Cell>146</Table.Cell>
            <Table.Cell>
              <Header as="h4" image>
                <Header.Content>387</Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>11604</Table.Cell>
            <Table.Cell>6638</Table.Cell>
            <Table.Cell>
              <Header as="h4" image>
                <Header.Content>18242</Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell>月支出</Table.HeaderCell>
            <Table.HeaderCell colSpan="2">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color={row.color}
                basic
                size="small"
              >
                <Icon name="usd" /> 18629
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
