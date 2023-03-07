import { useEffect, useState } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import EmpDropDown from './EmpDropDown';

export default function EditForm({
  rows,
  setRows,
  open,
  setOpen,
  row,
  setRow,
  saveRow,
  deleteRow,
  loading,
}) {
  useEffect(() => {}, []);

  // 輸入資料時同時設定 row
  const inputChange = (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };

  const empChange = (e, { value }) => {
    setRow({ ...row, name: value });
  };

  return (
    <div>
      <Modal open={open} closeIcon onClose={() => setOpen(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>日期</label>
              <input
                type="date"
                value={row.date}
                onChange={inputChange}
                name="date"
              />
            </Form.Field>
            {/* <Form.Field>
              <label>姓名</label>
              <input value={row.name} onChange={inputChange} name="name" />
            </Form.Field> */}

            <Form.Field>
              <label>姓名</label>
              <EmpDropDown value={row.name} onChange={empChange} />
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

            <Button
              primary
              fluid
              loading={loading}
              type="submit"
              onClick={saveRow}
            >
              儲存
            </Button>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            // floated='left'
            loading={loading}
            color="red"
            basic
            onClick={() => deleteRow(row)}
          >
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
