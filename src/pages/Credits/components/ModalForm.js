import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import EditForm from './EditForm';

export default function ModalForm({
  open,
  setOpen,
  rows,
  setRows,
  row,
  setRow,
  saveRow,
  deleteRow
}) {
  // const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <EditForm
            rows={rows}
            setRows={setRows}
            row={row}
            setRow={setRow}
            saveRow={saveRow}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => deleteRow(row)}>
            刪除
          </Button>
         
        </Modal.Actions>
      </Modal>
    </div>
  );
}
