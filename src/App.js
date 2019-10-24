import React ,{useState}from 'react';
import './App.css';
import InputNumber from "./components/inputNumber"


function App() {
  const [value, setValue] = useState('aaa')
  return (
    <div>
      <InputNumber value={value} onChange={e => {
        setValue(e.target.value)
      }} />
      <InputNumber defaultValue={value} onChange={e => { }} />
    </div>
  )
}

export default App
