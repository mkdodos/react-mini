import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu>
      <Dropdown item icon="setting">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/sections" name="sections">
            期數
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/credits" name="credits">
            信用卡
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/banks" name="banks">
            銀行帳戶
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <Menu.Item name="editorials">
        <Link className="link" to="/credits">
          信用卡
        </Link>
      </Menu.Item> */}

      {/* <Menu.Item name="reviews">
        <Link className="link" to="/sections">
          期數
        </Link>
      </Menu.Item> */}

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
      {/* <Menu.Item name="reviews">
        <Link className="link" to="/banks">
          銀行帳戶
        </Link>
      </Menu.Item> */}
      {/* <Menu.Item name="reviews">
        <Link className="link" to="/car-routes">
          派車記錄
        </Link>
      </Menu.Item> */}

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

      {/* <Menu.Item name="reviews">
        <Link className="link" to="/currency-converter">
          匯率轉換器
        </Link>
      </Menu.Item> */}

      <Menu.Item name="reviews">
        <Link className="link" to="/flashcard">
          閃卡
        </Link>
      </Menu.Item>
    </Menu>
  );
}
