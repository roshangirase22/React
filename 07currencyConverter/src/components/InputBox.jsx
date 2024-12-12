import React from "react";
import { useId } from "react"; // is a react hook for generating unique ID s that can be passed to accessibility attributes (accessibility attributes - means html madhe attribute ahe id ch tyat deta)
function InputBox({ // input box varcha design karto
    label,
    amount,
    onAmountChange, // jo pn hya amount la call karel tr state change hoel na nater aapn amount change , useamounchange as use state madhe taku
    onCurrencyChange, // used state madhe nater use hoel
    currencyOptions = [], // jevha currency change karto tevha api call hoto ani tho string madhe nko array madhech de m app crash nhi honar //tr loop lavun dropdown madhe value ghenar
    selectCurrency = "usd", // list tr ahe pn select aapn karnar by default usd
    amountDisable = false, // (optional) jr amount dili tr dili user ne
    currencyDisable = false, // optional
    className = "",
}) {
   const amountInputId = useId() // he hook unquie value dil

    return (
            // khalch classname user kadun ghenya saathi ek variable declared karto vr ani tho khali takto - m dusrya file madhun pn css yael.
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 

            {/* ani ha css classname simple */}
            <div className="w-1/2">

            {/* // used hook useid  - html label madhe for attribute pn ikde tyla react madhe tyla htmlFor bolta */} 
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                // useId keli - unique id dil
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount} // value user dil ti ghenar
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // expalin  onchange event user takel func - jr amount change jhali  mhnun onamountchange &&(and condition)ani jr konti amount nhi takli tr crash hoel mhnun, mahnnu onamountchang(true) asel tr 2 condition onamountchange func call hoel // jr ti value change jhali tr onAmountChange method call honar.
                />
            </div>

            {/* atta  drop down madhun currecy select karyla */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                {/* drop down design tr tag select used hoto html */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // select keli currency
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {/* loop lavu dropdown madhun value ghyla [] array madhe gheu tevha */}
                        {currencyOptions.map((currency) => ( // variable dil parametr madhe he fkt scope purt access asnar

                            // atta usd value dili tr hich value sarkhi repeat hoel react dom banvel tr tyla hech vatel ekch component repeat banvto . tr he nko hoyla mhnun key used karta // kdhi pn .jsx madeh loop lavto tr key lavychi nhi lavli tr peformance week hoto.  
                            <option key={currency} value={currency}> 
                            {/* {currency} // currency dakvel na */}
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;