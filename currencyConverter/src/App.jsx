import { useState, useEffect } from "react";
import TwoInputBoxes from './components/TwoInputBoxes'

export default function App() { 
  const [fromCurr, setFromCurr] = useState("CNY")
  const [toCurr, setToCurr] = useState("CHF")

  const [fromAmount, setFromAmount] = useState(1)
  const [toAmount, setToAmount] = useState(1)

  const [downToUp, setDownToUp] = useState(false)

  useEffect(() => {

    if(downToUp){
      const apiUrl = `https://api.api-ninjas.com/v1/convertcurrency?have=${toCurr}&want=${fromCurr}&amount=${toAmount}`

      fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": "GKlXWhLputDyeIZ4v3cwwA==4oSTBWFCkR7eJzwR"
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data)
          setFromAmount(data.new_amount)
        })

    }else{
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

    }
  }, [fromCurr, fromAmount, toCurr, toAmount])

  function handleFromChange(e) {
    setDownToUp(false)
    setFromCurr(e.target.value)
  }
  function handleToChange(e) {
    setDownToUp(true)
    setToCurr(e.target.value)
  }

  function handleFromAmtChange(e) {
    setDownToUp(false)
    setFromAmount(e.target.value)
  }
  function handleToAmtChange(e) {
    setDownToUp(true)
    setToAmount(e.target.value)
  }

  return (
    <div className='main-box'>
      <h1>Currency Converter</h1>

      <TwoInputBoxes curr={fromCurr} handleChange={handleFromChange} amount={fromAmount} handleAmtChange={handleFromAmtChange} />

      <i className="fa-solid fa-arrow-right-arrow-left"></i>

      <TwoInputBoxes curr={toCurr} handleChange={handleToChange} amount={toAmount} handleAmtChange={handleToAmtChange} />
    </div>
  )
}