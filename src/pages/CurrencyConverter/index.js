import React, { useEffect, useState } from 'react';
import { Container, Segment, Form, Input, Dropdown } from 'semantic-ui-react';
import CurrencyRow from './CurrencyRow';

export default function Index() {
  const data = {
    success: true,
    timestamp: 1519296206,
    base: 'CNY',
    date: '2021-03-17',
    rates: {
      CAD: 1.560132,
      AUD: 1.566015,
      
      CHF: 1.154727,
      // CNY: 7.827874,
      GBP: 0.882047,
      JPY: 132.360679,
      USD: 1.23396,
    },
  };

  const [options, setOptions] = useState([]);

  // 基本匯率,轉換匯率
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    const firstCurrency = Object.keys(data.rates)[0];
    // 設定預設選項
    setFromCurrency(data.base);
    setToCurrency(firstCurrency);
    // 下拉選項資料
    const tmp = Object.keys(data.rates).map((row) => {
      return { key: row, text: row, value: row };
    });
    // 加入基本匯率
    setOptions([...tmp,{ key: data.base, text: data.base, value: data.base }]);
  }, []);

  return (
    <Container>
      <Segment>
        <Form>
          <CurrencyRow options={options} value={fromCurrency} />
          <CurrencyRow options={options} value={toCurrency} />
        </Form>
      </Segment>
    </Container>
  );
}
