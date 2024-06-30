import { useState, useEffect } from "react";
import TwoInputBoxes from './components/TwoInputBoxes'

export default function App() { 
  const [fromCurr, setFromCurr] = useState("CNY")
  const [toCurr, setToCurr] = useState("CHF")

  const [fromAmount, setFromAmount] = useState(1)
  const [toAmount, setToAmount] = useState(1)

  useEffect(() => {
    const apiUrl = `https://api.api-ninjas.com/v1/convertcurrency?have=${fromCurr}&want=${toCurr}&amount=${fromAmount}`

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": "GKlXWhLputDyeIZ4v3cwwA==4oSTBWFCkR7eJzwR"
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setToAmount(data.new_amount)
      })
  }, [fromCurr, fromAmount])

  function handleFromChange(e) {
    setFromCurr(e.target.value)
  }
  function handleToChange(e) {
    setToCurr(e.target.value)
  }

  function handleFromAmtChange(e) {
    setFromAmount(e.target.value)
  }
  function handleToAmtChange(e) {
    setToAmount(e.target.value)
  }

  return (
    <div className='main-box'>
      <h1>Currency Converter</h1>

      <TwoInputBoxes curr={fromCurr} handleChange={handleFromChange} amount={fromAmount} handleAmtChange={handleFromAmtChange} />

      {/* <i className="fa-solid fa-arrow-right-arrow-left"></i> */}
      <i className="fa-solid fa-arrow-down"></i>

      <TwoInputBoxes curr={toCurr} handleChange={handleToChange} amount={toAmount} handleAmtChange={handleToAmtChange} />
    </div>
  )
}