import React from 'react';
import { Card, Input, Icon, Button, Label } from 'semantic-ui-react';
import Trans from './Trans';
import './index.css';

export default function TransList({ rows }) {
  return (
    <div className="trans-container">
      <div className="trans-card">
        <div className="header">轉帳作業</div>
        <div className="acc">
          <Trans rows={rows} />
        </div>
        <div className="acc">
          <Input type="number" label="$" fluid placeholder="轉帳金額" />
        </div>
        <div className="acc">
          <Trans rows={rows} />
        </div>
        <div className="acc footer">
          <Button fluid color="teal">
            確定
          </Button>
        </div>
      </div>
    </div>

    // <Trans rows={rows} />
    // <Input placeholder="$ 轉帳金額" />
  );
}
