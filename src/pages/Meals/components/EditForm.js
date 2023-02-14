import { useEffect, useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

export default function EditForm({
  rows,
  setRows,
  row,
  setRow,
  saveRow,
  loading,
}) {
  useEffect(() => {}, []);

  // 輸入資料時同時設定 row
  const inputChange = (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>姓名</label>
          <input            
            value={row.name}
            onChange={inputChange}
            name="name"
          />
        </Form.Field>

        <Form.Field>
          <label>金額</label>
          <input
            type="number"
            value={row.amt}
            onChange={inputChange}
            name="amt"
          />
        </Form.Field>
        

        <Button primary fluid loading={loading} type="submit" onClick={saveRow}>
          儲存
        </Button>
      </Form>
    </div>
  );
}
