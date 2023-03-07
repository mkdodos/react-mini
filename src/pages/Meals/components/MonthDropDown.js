import React from 'react';
import { Dropdown } from 'semantic-ui-react';
export default function MonthDropDown({onChange}) {
  const months = ['01', '02', '03'];
  const options = months.map((m) => {
    return { key: m, text: m, value: m };
  });
  return (
    <div>
      <Dropdown options={options} onChange={onChange} />
    </div>
  );
}
