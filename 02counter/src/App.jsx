import { useState } from 'react' // hikde hooks method gheto  { } bracket madhun.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// usestate use for the whenever we update state its only reload that component not hole website(purn Dom tree nhi traves kart).
function App() {
  // learning hooks - video 5
// react ui controlled karte atta jas counter +1 = hoto pn ui madhe nhi dist
// jr counter bharpur thikani button vr  aahe tr tyla javascript madhe sarkh getElement all that stup lihav lagl ast pn ikde ekdach change kel te sarvi kde hot.

  let [counter , setCounter ] =useState(15) // counter(variabke ahe ) by default value 15 ahe , setCounter(function ahe) pudhe referece mhanun use karu tr counter value update karel.
  // let counter = 15  // variable jt html madhe takych tr assing  {counter} as use karnar

  let addValue =() =>{ // add value karto
    // console.log("value added " , counter);
    //  counter = counter+1 // var value increase
    setCounter(counter + 1) // jr vrch comment pn counter deu shaklo asto // setcounter function use kel
  }
  
  let removeValue = ()=>{
    setCounter(counter - 1 ) // setcounter func use kel
  }



  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value:{counter}</h2>



      <button onClick={addValue}>Add value {counter}</button>  
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
