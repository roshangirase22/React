import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  let myObj = { // he object {} barcket madhe takun cart madhe taku shakto // fkt object nhi tr array pn taku shakto {} array ch naav takych // pn cards.jsx madhe func props pahije
    username:"roshan",
    age:56
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card  username="chaiaurcode" someObject={myObj}/ >  //he bhag ikde object pn deu shakto  // khali card  =card function ekch pn used karta na don card used pn madhle details vegle pahije mhanun props used // ani button saathi btn-taxt used kel. = jr te button ikde dyach visarlo tr c ardfunction parameter madhe (btnText="visit me") as dil tr te excute hoel ani ikde dil tr te nhi honar execute*/}
      <Card  username="chaiaurcode" btnText="click me "  />  
      <Card username="Roshan" btnText="visit me"/>

    </>
  )
}

export default App
