import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function Trans({ rows }) {
  const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
    },
  ];

  return (
    <Dropdown fluid placeholder="選取帳戶" selection options={rows}></Dropdown>
  );
}
