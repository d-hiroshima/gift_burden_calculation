import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ yen, setYen ] = useState<number>(0)
  const [ numberOfPeople ,setNumberOfPeople ] = useState<number>(0)
  const [ birthdayCount, setBirthdayCount ] = useState<number>(0)
  
  const handleYen = (e: any) => {
    setYen(e.target.value)
  }
  
  const handleNumberOfPeople = (e: any) => {
    setNumberOfPeople(e.target.value)
  }
  
  const handleBirthdayCount = (e: any) => {
    setBirthdayCount(e.target.value)
  }
  
  const MathMoney = () => {
    let price = 0
    let ninzuu = numberOfPeople
    if ( yen && ninzuu ) {
      if ( birthdayCount > 0 ) {
        ninzuu = ninzuu - birthdayCount
      }
      price = yen / ninzuu
    }
    return price
  }
  
  let onePeopleYen: number = MathMoney()
  if ( isNaN(onePeopleYen) ) {
    onePeopleYen = 0
  }
  
  return (
    <div className="App">
      <h2>ココイチ計算ツール</h2>
      <br />
      <p style={{ fontWeight: 'bold' }}>【任意】誕生日人数</p>
      <input type="number" value={birthdayCount} onChange={handleBirthdayCount} />
      <br />
      <br />
      <br />
      誕生日の人の金額：<input type="number" value={yen} onChange={handleYen}/>円<br />
      食事をかこむ人数：<input type="number" value={numberOfPeople} onChange={handleNumberOfPeople}/>人
      <br />
      <br />
      <div style={{ fontWeight: 'bold' }}>
        一人当たり：{Math.ceil(onePeopleYen)}円追加で負担
      </div>
    </div>
  );
}

export default App;
