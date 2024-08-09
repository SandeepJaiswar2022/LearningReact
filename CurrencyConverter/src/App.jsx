import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyHook from './MyHooks/useCurrencyHook'
import InputBox from './Component/InputBox'

function App() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [placeHolder, setPlaceHolder] = useState("amount");


  // const onAmountChange=()=>{
  //   setAmount(amount)
  // }

  const currencyDataFromApi = useCurrencyHook(fromCurrency);

  const currencyOptions = Object.keys(currencyDataFromApi);

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyDataFromApi[toCurrency]);
  }

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
  // console.log(currencyDataFromApi);
  // console.log(currencyDataFromApi["inr"]*1);

  return (
    <>
      <div className="bg-cover bg-indigo-200 bg-center h-screen bgImg flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block">
            <img src="bgImgCurrency.jpg" alt="Currency Converter" className="w-full h-full object-cover" />
          </div>
          <div className='p-4 bg-gray-200'>
            <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">My Currency Converter</h1>
            <form onSubmit={(e) => {
              e.preventDefault();
              convertCurrency();
            }}>
              <InputBox
                amount={amount}
                label="From"
                placeHolder={placeHolder}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyNameChange={(currency) => setFromCurrency(currency)}
                selectCurrency={fromCurrency}
                currencyOptions={currencyOptions}
              />
              <div className="flex justify-center mb-4">
                <button onClick={swap} type="button" className="bg-gray-400 hover:bg-gray-600 text-gray-950 font-semibold py-2 px-4 rounded-full">
                  ⇅
                </button>
              </div>
              <InputBox
                amount={convertedAmount}
                label="To"
                placeHolder={placeHolder}
                // onAmountChange={(amount) => setAmount(amount)
                onCurrencyNameChange={(currency) => setToCurrency(currency)}
                selectCurrency={toCurrency}
                currencyOptions={currencyOptions}
                amountDisable={true}
              />
              <div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Convert from {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
