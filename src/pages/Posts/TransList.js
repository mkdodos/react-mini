import React from 'react';
import { Card, Input, Icon, Button, Label } from 'semantic-ui-react';
import Trans from './Trans';
import './index.css';

export default function TransList({ rows }) {
  return (
    <div className="trans-container">
      <div className="trans-card">
        <div className="acc">
          <Trans rows={rows} />
        </div>
        <div className="acc">
          <Input label="$" fluid placeholder="轉帳金額" />
        </div>
        <div className="acc">
          <Trans rows={rows} />
        </div>
        <div className="acc">
          <Button fluid primary>
            轉帳
          </Button>
        </div>
      </div>
    </div>

    // <Trans rows={rows} />
    // <Input placeholder="$ 轉帳金額" />
  );
}
