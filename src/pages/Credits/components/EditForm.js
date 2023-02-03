import { useEffect, useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

export default function EditForm({ rows, setRows, row, setRow, saveRow }) {
  useEffect(() => {}, []);

  // 輸入資料時同時設定 row
  const inputChange = (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>日期</label>
          <input
            type="date"
            value={row.consumeDate}
            placeholder=""
            onChange={inputChange}
            name="consumeDate"
          />
        </Form.Field>
        <Form.Field>
          <label>項目</label>
          <input
            placeholder=""
            value={row.note}
            onChange={inputChange}
            name="note"
          />
        </Form.Field>

        <Form.Field>
          <label>金額</label>
          <input
            placeholder=""
            value={row.amt}
            onChange={inputChange}
            name="amt"
          />
        </Form.Field>

        <Button type="submit" onClick={saveRow}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
