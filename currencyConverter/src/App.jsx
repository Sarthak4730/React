import { useState, useEffect } from 'react'
import TwoInputBoxes from './components/TwoInputBoxes'

export default function App() {

  return (
    <div className='main-box'>
      <h1>Currency Converter</h1>
      <TwoInputBoxes />
      <i className="fa-solid fa-arrow-right-arrow-left"></i>
      <TwoInputBoxes />
    </div>
  )
}