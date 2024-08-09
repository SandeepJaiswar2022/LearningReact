import { useRef } from "react";
import { useId } from "react"

function InputBox({
    amount,
    label,
    placeHolder,
    onAmountChange,
    onCurrencyNameChange,
    selectCurrency = "usd",
    currencyOptions = [],
    amountDisable = false
}) {
    
    const amountId = useId();
    const selectId = useId();
    const inputReference = useRef(null);
    if(amountDisable)
        {
            console.log(amountDisable);
            inputReference.current?.classList.add("bg-red-100");
        }
    return (
        <>
            <div className="mb-4">
                <label htmlFor={amountId} className="block text-sm font-medium text-gray-700">Amount</label>
                <input ref={inputReference} disabled={amountDisable} value={amount} type="number" id={amountId} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={placeHolder} onChange={(e) => (onAmountChange && onAmountChange(e.target.value))} />
            </div>
            <div className="mb-4">
                <label htmlFor={selectId} className="block text-sm font-medium text-gray-700">{label}</label>
                <select id={selectId} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={selectCurrency} onChange={(e) => (onCurrencyNameChange && onCurrencyNameChange(e.target.value))}>
                    {currencyOptions.map((currencyName, index) => (<option key={index} value={currencyName}>{currencyName}</option>))}
                </select>
            </div>
        </>
    )
}

export default InputBox