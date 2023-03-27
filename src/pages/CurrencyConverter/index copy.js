import React, { useEffect, useState } from 'react';
import './index.css';

export default function Index() {
  const data = {
    success: true,
    timestamp: 1519296206,
    base: 'EUR',
    date: '2021-03-17',
    rates: {
      AUD: 1.566015,
      CAD: 1.560132,
      CHF: 1.154727,
      CNY: 7.827874,
      GBP: 0.882047,
      JPY: 132.360679,
      USD: 1.23396,
    },
  };

  const [inputFrom,setInputFrom]=useState(1);
  const [inputTo,setInputTo]=useState(2);

  const [amt,setAmt]=useState(0)

  let fromAmt,toAmt 

  // 將輸入值做轉換後,設定給另一個文字方塊
  fromAmt=amt
  toAmt = fromAmt *100

  function handleInputChange(e) {
    setInputFrom(e.target.value)
    // 設定輸入值
    setAmt(e.target.value)
    // setInputTo(toAmt);
  }

  const [currencyOptions, setCurrencyOptions] = useState([]);
  useEffect(() => {
    console.log(data);
    // 取得 Object 的 所有key 組合成一個陣列
    const options = Object.keys(data.rates);
    setCurrencyOptions(options);
    console.log(options);
  }, []);

  return (
    <div className='mydiv'>
      <input type='number' value={inputFrom} onChange={handleInputChange} />
      <select>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br/>
      <input type='number' value={toAmt} />
    </div>
  );
}
