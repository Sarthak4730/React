import { useState, useEffect } from "react";
import TwoInputBoxes from './components/TwoInputBoxes'

export default function App() { 
  const [fromCurr, setFromCurr] = useState("CNY")
  const [toCurr, setToCurr] = useState("CHF")
  const [fromAmount, setFromAmount] = useState(1)
  const [toAmount, setToAmount] = useState()

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
  }, [])

  function handleFromChange(e) {
    setFromCurr(e.target.value)
  }
  function handleToChange(e) {
    setToCurr(e.target.value)
  }

  return (
    <div className='main-box'>
      <h1>Currency Converter</h1>

      <TwoInputBoxes curr={fromCurr} onCurrChange={handleFromChange} amount={fromAmount} />

      <i className="fa-solid fa-arrow-right-arrow-left"></i>

      <TwoInputBoxes curr={toCurr} onCurrChange={handleToChange} amount={toAmount} />
    </div>
  )
}