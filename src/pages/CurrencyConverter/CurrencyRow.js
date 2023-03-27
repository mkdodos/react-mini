import React from 'react';
import { Form, Input, Dropdown } from 'semantic-ui-react';

export default function CurrencyRow({
  options,
  value,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) {
  return (
    <div>
      {' '}
      <Form.Group inline>
        <Form.Field>
          <Input type="number" onChange={onChangeAmount} value={amount} />
        </Form.Field>
        <Form.Field>
          <Dropdown
            onChange={onChangeCurrency}
            value={value}
            fluid
            selection
            options={options}
          />
        </Form.Field>
      </Form.Group>
    </div>
  );
}
