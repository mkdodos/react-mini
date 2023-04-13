import React from 'react';
import { Input } from 'semantic-ui-react';
import Trans from './Trans';
import './index.css';

export default function TransList({ rows }) {
  return (
    <div className="trans">
      <div className="acc">
        <div>
          <Trans rows={rows} />
        </div>
        <div>
          <Input placeholder="$ 轉帳金額" />
        </div>
        <div>
          <Trans rows={rows} />
        </div>
      </div>
    </div>
  );
}
