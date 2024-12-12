import { useState , useCallback , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  // step 1 jayna pn variable pahije te declared kra pahile jas ex. length ch track thevyla , chech box ch true ki false,
  const [length, setLength] = useState(8) // lenght track karyla usestate
  const [numberAllowed , setNumberAllowed] = useState(false) // nnumber check box saathi 
  const [charAllowed , setCharAllowed] = useState(false) //  special char check box saathi 
  const [password , setPassword] = useState("") // default value nhi dili krn jas page load hoel lagech value yete na , m pahile password genetrator banvu m pass kru ikde .


  // Hook useRef() - jr konala refence dycha asel tr he used hot - jas input text cha - copy buttuon la daycha
  const passwordRef = useRef(null) // default value nhi tr null denar.

  // password genetrator made// - useCallback hook =majya kde func ahe tyla jevdh hot tevdh  memory madhe thev anu tyla jevha run kru tr run kr jevdh part jhala tevha ani nhi jhala tyla de sodun. // pahile import kr
  //dependies kon ahe -number , charachter== [length, numberAllowed, charAllowed, password]
  const passwordGenerator =  useCallback( () => { // hya func vr khup component depend aahet . // not usefully for function run only use for memorized  func saathi use // optimizeation saathi  // cache madhe changes thevt // imp note :- usecallback che dependecious ani useEffect ch dependencious  vegle vegle asta tyna compare nko karu . 
      let pass = ""  // hyne setpassword() value pass karnar
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numberAllowed) str +="1234567890"
      if (charAllowed)  str += "!@#$%^&*()>"

      for (let i = 0; i < length; i++) { // kiti vela loop chalel jevdhi char length user set karel tevdhi // ha loop passwoed generate karto
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char) // pass madhe value takli // += append the value 
      }
      setPassword(pass) // setpassword func ne value pass ani tho atta password madhe value update karel
  } ,[length, numberAllowed, charAllowed, setPassword ]) // dependensious // ikde te takto je dpendecious ahet ani he possibile  run honar tr te kas optimize madhe method run hoel  // setpassword() ka ghetla ? -  nhi ghetl tri chalel.



// method copyPasswordToClipboard ha referce  copy button cha aahe
    const copyPasswordToClipboard = useCallback (() => {
      passwordRef.current?.select() // window ne pn kaam hot pn optimize means text vr blue yael samjel copy jhal tya sathi
      passwordRef.current?.setSelectionRange(0 ,7) // pahile 7 word copy honar fkt as ahe he
      window.navigator.clipboard.writeText(password) // writetext clipboard ch in build func ahe  // ikde window ghetl karn window vr run hote pn node.js use karun tevha server gheu karn tevha code server vr run hoto company madhe

    },[password]) // dependies fkt password karn te fkt tycha shi connection kart na copy-to -text as



  // jas pn aapn page render hoel tr tyach tyach func call houn taxt aal pahije mhnun -- mhnun useEffect  hook used kel
  useEffect(()=> { // use effect means jr hya dependies shi khi pn ched-chad keli ki method call hoel // ani jevha page render hoel kiva refresh hoel tevha method acll hoel . 
      passwordGenerator() // call password generator.
  }, [length, charAllowed ,numberAllowed , passwordGenerator])


  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
      />
      {/* hr dogh ek div madhe ahet pn related nhiyet =  useRef hool = jr konala konacha refrence dycha jas input text cha copy vuuton la  */}
      <button
      onClick={copyPasswordToClipboard} // ha method refrence saathi
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
      
  </div>



  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
       className='cursor-pointer'
       onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>

    </div>


    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
            setNumberAllowed((prev) => !prev); // ji previous value ti bhete jr ti false asel tr true hoel ani true asel tr false // he true false saathi tya saathi previous value ji ahe ti nko gheu //-setnumAllowed(true)  as direct call kel tr te ekdach click kel ani render kel tri true rahil // 
        }}
    />
    <label htmlFor="numberInput">Numbers</label>


    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
                setCharAllowed((prev) => !prev )
            }}
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
    
  )
}

export default App
