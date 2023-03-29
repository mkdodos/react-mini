import React, { useEffect, useState } from 'react';
import { Container, Segment, Form, Input, Dropdown } from 'semantic-ui-react';

export default function Index() {
  const data = [
    {
      base: 'TWD',
      rates: { USD: 0.03, JPY: 4, TWD: 1 },
    },
    {
      base: 'USD',
      rates: { USD: 1, JPY: 104, TWD: 30 },
    },
    {
      base: 'JPY',
      rates: { USD: 0.0025, JPY: 1, TWD: 0.25 },
    },
  ];

  // 下拉選項資料
  const [currencyOptions, setCurrencyOptions] = useState([]);

  // 來源幣值
  const [fromCurrency, setFromCurrency] = useState();
  // 要轉換的幣值
  const [toCurrency, setToCurrency] = useState();

  // 來源數值
  // const [fromAmount, setFromAmount] = useState(1);
  // 轉換後的值
  const [amount, setAmount] = useState(1);

  // 設定匯率
  const [rate, setRate] = useState(1);

  useEffect(() => {
    console.clear();
    setFromCurrency('TWD')
    setToCurrency(data[0].rates[0])
    // console.log(data[0]);
    // console.log(data[1]);

    // const BASE_URL = ' https://api.apilayer.com/exchangerates_data/latest';
    // fetch(`${BASE_URL}?apikey=tTYYhdkIJuRJKcI3zJ7qBYLmUSSjVOnS`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    setCurrencyOptions(Object.keys(data[0].rates));
    //   });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      // 取得匯率
      const newData = data.filter((row) => row.base == fromCurrency);
      setRate(newData[0].rates[toCurrency])
      console.log(amount*newData[0].rates[toCurrency])
      // console.log(newData[0].rates[toCurrency]);
    }
  }, [fromCurrency, toCurrency]);

  // 下拉選取
  function onSelectFromChange(e) {
    setFromCurrency(e.target.value);

    // console.log(amount)

    // 設定匯率
    // setRate(data[0].rates[e.target.value])
    // 2次set在一起無法即時更新
    // setAmount
    // setToAmount(rate*fromAmount)
  }

  function onSelectToChange(e) {
   

    setToCurrency(e.target.value);
  
  }

  // 金額計算
  let fromAmount,toAmount;
  fromAmount = amount
  toAmount = amount * rate;

  // input change 數值變更
  function handleFromAmountChange(e) {
    // setFromAmount(e.target.value);
    // 設定給 toAmount    
    setAmount(e.target.value);
    
  }


  function handleToAmountChange(e) {
    // setToAmount(e.target.value);
    // 設定給 toAmount    
    setAmount(e.target.value);    
  }


  return (
    <Container>
      <input
        type="number"
        value={fromAmount}
        onChange={handleFromAmountChange}
      />
      <select onChange={onSelectFromChange} value={fromCurrency}>
        {currencyOptions.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>

      <input type="number" value={toAmount} onChange={handleToAmountChange} />
      <select onChange={onSelectToChange} value={toCurrency}>
        {currencyOptions.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>

      {/* <Dropdown
      /> */}
    </Container>
  );
}
