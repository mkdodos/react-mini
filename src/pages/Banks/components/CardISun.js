import React from 'react';
import { List } from 'semantic-ui-react';

export default function CardISun({row}) {
  return (
    <>
      <List divided relaxed horizontal>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          活存
        </List.Item>
        <List.Item>456000</List.Item>
      </List>
      
      <List divided relaxed horizontal>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          定存
        </List.Item>
        <List.Item>789000</List.Item>
      </List>
      <List divided relaxed horizontal>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          定存
        </List.Item>
        <List.Item>789000</List.Item>
      </List>
    </>
  );
}
