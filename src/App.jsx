import { useState } from "react";
import { InputBox } from "./componants";
import usecurrencyinof from "./hooks/usecurrencyinfo";
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [ConvertedAmount, setConvertedAmount] = useState('');

  const currencyInfo = usecurrencyinof(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(ConvertedAmount);
  };

  // mathod for converting amount 
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-black/50">
          <form className=" "
            onSubmit={(e) => {
              e.preventDefault();
              convert({options,setAmount});
            }}
          >
            <div className="w-full mb-1 ">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(amount) => setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={ConvertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;