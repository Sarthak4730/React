export default function TwoInputBoxes(){
    return (
        <div className="two-inputs">
            <input type="number" placeholder="1"/>
            <select>
                <option value={"USD"}> USD </option>
                <option value={"INR"}> INR </option>
            </select>
        </div>
    )
}