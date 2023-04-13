import React from 'react';
import { Card, Input, Icon, List } from 'semantic-ui-react';
import Trans from './Trans';
import './index.css';

export default function TransList({ rows }) {
  return (
    <div className="trans">
      <Card>
        {/* <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
        </Card.Content> */}

        <Card.Content>
          <List>
            <List.Item>
              <Trans rows={rows} />
            </List.Item>
            <List.Item>
              <Input fluid placeholder="$ 轉帳金額" />
            </List.Item>
            <List.Item>
              <Trans rows={rows} />
            </List.Item>
          </List>

          {/* <Trans rows={rows} /> */}
          {/* <Trans rows={rows} /> */}
        </Card.Content>
      </Card>
      {/* <div className="card">
        <Trans rows={rows} />
        <Input placeholder="$ 轉帳金額" />
        <Trans rows={rows} />
      </div> */}
      {/* <div className="acc">
        <div>
          <Trans rows={rows} />
        </div>
        <div>
          <Input placeholder="$ 轉帳金額" />
        </div>
        <div>
          <Trans rows={rows} />
        </div>
      </div> */}
    </div>
  );
}
