export default function TwoInputBoxes( {curr, onCurrChange, amount} ){
    const currOptions = {
                            "CNY": "Chinese Yuan",
                            "CHF": "Swiss Franc",
                            "AUD": "Australian Dollar",
                            "PLN": "Polish Zloty",
                            "TRY": "Turkish Lira",
                            "GBP": "British Pound",
                            "NZD": "New Zealand Dollar",
                            "KRW": "South Korean Won",
                            "DKK": "Danish Krone",
                            "HKD": "Hong Kong Dollar"
                        }
    const currOptionsEntries = Object.entries(currOptions)

    return (
        <div className="two-inputs">
            <input type="number" placeholder={amount}/>

            <select value={curr} onChange={onCurrChange} >
                {currOptionsEntries.map( c => {
                    return <option key={c[0]} value={c[0]} > {c[1]} </option>
                })}
            </select>
        </div>
    )
}