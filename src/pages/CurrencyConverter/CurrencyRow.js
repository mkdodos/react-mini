import React from 'react';
import { Form,Input,Dropdown } from 'semantic-ui-react';

export default function CurrencyRow({options,value}) {
  return (
    <div>
      {' '}
      <Form.Group inline>
        <Form.Field>
          
          <Input  />
        </Form.Field>
        <Form.Field>
          <Dropdown
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
