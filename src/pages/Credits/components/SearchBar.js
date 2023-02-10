import React from 'react';
import { Button, Header, Image, Modal, Input } from 'semantic-ui-react';
import EditForm from './EditForm';

export default function SearchBar({
  open,
  setOpen,
  rows,
  setRows,
  filter,
  handleFilter,
  handleInputChange,
}) {
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        closeIcon
        // trigger={<Button>搜尋</Button>}
      >
        <Modal.Header>篩選表單</Modal.Header>
        <Modal.Content>
          <Input
            value={filter.note}
            placeholder="note"
            onChange={handleInputChange}
            name="note"
            size="small"
          />
          <Input
            value={filter.section}
            onChange={handleInputChange}
            name="section"
            size="small"
          />
          <Button onClick={handleFilter}>篩選</Button>
        </Modal.Content>
        <Modal.Actions></Modal.Actions>
      </Modal>
    </div>
  );
}
