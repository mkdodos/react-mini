import React, { useState } from 'react';
import {
  Label,
  Input,
  Icon,
  Button,
  Header,
  Modal,
  List,
} from 'semantic-ui-react';
import Trans from './Trans';
import './index.css';
import { db } from '../../utils/firebase';

export default function TransList({ rows, options }) {
  const [from, setFrom] = useState();
  const [fromAcc, setFromAcc] = useState();
  const [amount, setAmount] = useState();
  const [to, setTo] = useState();
  const [toAcc, setToAcc] = useState();
  const [open, setOpen] = useState(false);

  function handleClick() {
    // const id = fromAcc.id;
    // const amt = fromAcc.balance
    // db.collection('accounts')
    //   .doc(id)
    //   .update({ balance: Number(fromAcc.balance) - amount });
    // setOpen(true);
    // 更新帳戶餘額

    // 取得帳戶餘額
    db.collection('accounts')
      .doc(from)
      .get()
      .then((doc) => {
        // 更新帳戶餘額

        db.collection('accounts')
          .doc(from)
          .update({ balance: Number(doc.data().balance) - amount });
      });

    // 取得帳戶餘額
    db.collection('accounts')
      .doc(to)
      .get()
      .then((doc) => {
        // 更新帳戶餘額

        db.collection('accounts')
          .doc(to)
          .update({ balance: Number(doc.data().balance) + Number(amount) });
      });

    setOpen(true);

    console.log(from);
    // console.log(amount);
    // console.log(toAcc);
  }

  function onFromChange(e, obj) {
    // 設定下拉值
    setFrom(obj.value);
    setFromAcc(obj.name);
    console.log(obj.text);
    // 依下拉值設定該帳戶資料
    // const acc = rows.filter((row) => row.name == obj.value);
    // setFromAcc(acc[0]);
  }

  function onToChange(e, obj) {
    setTo(obj.value);
    // const acc = rows.filter((row) => row.name == obj.value);
    // setToAcc(acc[0]);
  }

  return (
    <>
      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon="archive" content="轉帳成功 !" />
        <Modal.Content>
          <div>
            <Label size="large">{fromAcc?.name}</Label>
            <Icon name="arrow right" />
            <Label size="large" color="teal">
              ${amount}
            </Label>{' '}
            <Icon name="arrow right" />{' '}
            <Label size="large">{toAcc?.name}</Label>{' '}
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={() => setOpen(false)}>
            <Icon name="checkmark" /> 關閉
          </Button>
        </Modal.Actions>
      </Modal>

      <div className="trans-container">
        <div className="trans-card">
          <div className="header">轉帳作業</div>
          <div className="acc">
            <Trans rows={options} onChange={onFromChange} value={from} />
          </div>
          <div className="acc">
            <Input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              label="$"
              fluid
              placeholder="轉帳金額"
            />
          </div>
          <div className="acc">
            <Trans rows={options} onChange={onToChange} value={to} />
          </div>
          <div className="acc footer">
            <Button fluid color="teal" onClick={handleClick}>
              確定
            </Button>
          </div>
        </div>
      </div>
    </>

    // <Trans rows={rows} />
    // <Input placeholder="$ 轉帳金額" />
  );
}
