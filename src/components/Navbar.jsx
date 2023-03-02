import React from 'react';
import { Menu } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu>
      <Menu.Item name="editorials">
        <Link className="link" to="/credits">
          信用卡
        </Link>
      </Menu.Item>

      <Menu.Item name="reviews">
        <Link className="link" to="/sections">
          期數
        </Link>
      </Menu.Item>

      <Menu.Item name="reviews">
        <Link className="link" to="/meals">
          訂餐
        </Link>
      </Menu.Item>

      <Menu.Item name="reviews">
        <Link className="link" to="/notes">
          記事
        </Link>
      </Menu.Item>
      <Menu.Item name="reviews">
        <Link className="link" to="/banks">
          銀行帳戶
        </Link>
      </Menu.Item>
      <Menu.Item name="reviews">
        <Link className="link" to="/car-routes">
          派車記錄
        </Link>
      </Menu.Item>

      <Menu.Item name="reviews">
        <Link className="link" to="/oil">
          加油
        </Link>
      </Menu.Item>

      <Menu.Item name="reviews">
        <Link className="link" to="/balances">
          記帳
        </Link>
      </Menu.Item>

      
    </Menu>
  );
}
