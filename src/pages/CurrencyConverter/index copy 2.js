import React, { useEffect, useState } from 'react';
import { Container, Segment, Form, Input, Dropdown } from 'semantic-ui-react';
import CurrencyRow from './CurrencyRow';

export default function Index() {
  const data = {
    success: true,
    timestamp: 1519296206,
    base: 'TWD',
    date: '2021-03-17',
    rates: {
      CAD: 1.2,
      AUD: 2,
      CHF: 3,
      GBP: 4,
      JPY: 5,
    },
  };

  const [options, setOptions] = useState([]);

  // 基本匯率數字,轉換匯率數字
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  // 輸入值
  const [amount, setAmount] = useState(1);

  // 匯率
  const [rate, setRate] = useState(1);

  // 判斷輸入那一個文字方塊
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let fromAmount, toAmount;

  fromAmount = amount;
  toAmount = amount * rate;

  const BASE_URL = ' https://api.apilayer.com/exchangerates_data/latest';

  useEffect(() => {
    console.clear();

    fetch(`${BASE_URL}?apikey=tTYYhdkIJuRJKcI3zJ7qBYLmUSSjVOnS`)
      .then((response) => response.json())
      .then((data) => {

        // 下拉選項資料
        const tmp = Object.keys(data.rates).map((row) => {
          return { key: row, text: row, value: row };
        });

        // 加入基本匯率
        setOptions([
          ...tmp,
          // { key: data.base, text: data.base, value: data.base },
        ]);

        const firstCurrency = Object.keys(data.rates)[0];
        // 設定預設選項
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setRate(data.rates[firstCurrency]);

        // console.log(Object.keys(result.rates));
      })
      .catch((error) => console.log('error', error));

   
    // setToCurrency("AUD");
    // console.log(firstCurrency);
    // console.log(data.base);
    // console.log(data.rates[data.base]);
    // setAmount(data.rates[data.base])
    // 下拉選項資料
    // const tmp = Object.keys(data.rates).map((row) => {

    //   return { key: row, text: row, value: row };
    // });
  }, []);

  // const BASE_URL = 'https://api.exchangeratesapi.io/latest';

  // https://api.apilayer.com/exchangerates_data/latest

  // var myHeaders = new Headers();
  // myHeaders.append('apikey', 'tTYYhdkIJuRJKcI3zJ7qBYLmUSSjVOnS');

  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow',
  //   headers: myHeaders,
  // };

  useEffect(() => {
    console.clear();
    fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}&apikey=tTYYhdkIJuRJKcI3zJ7qBYLmUSSjVOnS`)
      .then((response) => response.json())
      .then((data) => {
        setRate(data.rates[toCurrency]);
        console.log(data.rates[toCurrency])
      })
      .catch((error) => console.log('error', error));

    
  }, [fromCurrency, toCurrency]);

  // select change 幣值選項
  function handleChangeFromCurrency(e, { value }) {
    setFromCurrency(value);

    // console.log(value)
    // setAmount(fromAmount)
  }

  //
  function handleChangeToCurrency(e, { value }) {
    setToCurrency(value);
    // setRate(data.rates[value])
    // console.log(value)
    // setAmount(toAmount)
  }

  // input change
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setToCurrency(e.target.value);
  }
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setFromCurrency(e.target.value);
  }

  return (
    <Container>
      <Segment>
        <Form>
          <CurrencyRow
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
            options={options}
            value={fromCurrency}
            onChangeCurrency={handleChangeFromCurrency}
          />
          <CurrencyRow
            options={options}
            amount={toAmount}
            value={toCurrency}
            onChangeAmount={handleToAmountChange}
            onChangeCurrency={handleChangeToCurrency}
          />
        </Form>
      </Segment>
    </Container>
  );
}
