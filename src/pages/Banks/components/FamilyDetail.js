import React, { useEffect, useState } from 'react';

import { Table, Header, Button, Icon } from 'semantic-ui-react';

import { db } from '../../../utils/firebase';

export default function FamilyDetail() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    db.collection('balances')
      .where('account.name', '==', '中國信')
      .limit(5)
      // .orderBy('date','desc')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return doc.data();
          // console.log(doc.data().title)
          // if (doc.data().title != '') return doc.data();
          // else return { ...doc.data(), title: 'abc' };
        });

        setRows(data);
      });
  }, []);
  return (
    <div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>日期</Table.HeaderCell>
            <Table.HeaderCell>項目</Table.HeaderCell>
            <Table.HeaderCell>
            <Button icon='plus' color='teal' size='mini' />
              {/* <Button icon >
                <Icon name="plus circle" color="teal" />
              </Button> */}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row) => {
            return (
              <Table.Row>
                <Table.Cell>{row.date.slice(5)}</Table.Cell>
                {/* <Table.Cell>{row.date}</Table.Cell> */}
                <Table.Cell>{row.title || row.cate}</Table.Cell>
                <Table.Cell>{row.expense || row.income}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        {/* <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell>月支出</Table.HeaderCell>
            <Table.HeaderCell colSpan="2">
              <Button
                floated="right"
                icon
                labelPosition="left"
                // color={row.color}
                basic
                size="small"
              >
                <Icon name="usd" /> 18629
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer> */}
      </Table>
    </div>
  );
}
