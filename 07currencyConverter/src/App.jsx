import { useState } from 'react'
import { InputBox } from "./components"; 
import { InputBox } from "./components"; 
import useCurrencyInfo from './hooks/UseCurrencyInfo' // import custom hook
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd") // for saathi // from -to 2 value lagtil na
  const [to , setTo]= useState("inr")
  const [convertedAmount ,setConvertedAmount] = useState(0) // amount convert karnya saathi var lagel na

  const CurrencyInfo = useCurrencyInfo(from) // custom hook use kela // kasha saathi data pahije from saathi
  const options =Object.keys(CurrencyInfo)  // data madhun keys ghaych

  // swap design
  const swap =()=> {
    setFrom(to) // to chi value set kr from la
    setTo(from) // from chi value set kr to la
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // design convert amount
  const convert = ()=> { // he buttuon click kel te call hoel mhnun func madhe
    setConvertedAmount(amount * CurrencyInfo[to] ) // currencyinfo madhe keys ahet tyla multiply // ani jyacha shi convert karych tr [to] kdun ghenar]
  }



  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert() // func call -// design convert amount
                       
                    }}
                >
                    <div className="w-full mb-1">
                      // je componentfolder madhe inputbox banvl te tag mhanun use kel
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
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
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
