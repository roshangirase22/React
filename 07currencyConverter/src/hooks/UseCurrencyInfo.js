import { useEffect, useState } from "react";

// custom hook banvto jo data return karel

const [data , setData]= useState({}) // {} empty object karn data nhi aala tr error nko
function useCurrencyInfo (currency ) { 
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> {
            res.json() // json madhe convert //pn hold kashat karnar -usestate (regular variable nhhi gheu shakat krn tho update nhi hot mhnun usestate cha variable)
        })
        .then((res) => {
            setData(res[currency]) // data madhli currency value change hote na mhnun [] currency parameter.
        })
        console.log(data);  
        

    },[currency]) // jas pn dependencious la trigger jhal func call honar // mhanun jas currency change api func call
    console.log(data);
    return data // fkt data return currency value kas set karnar  setData la kas honar tr ha purn hookch aapn export kru ani jikde pahije tikde taku jr konala lagla tr aapn jas useState hook lihto tas tho data setdata gheu shakel
    
}
export default useCurrencyInfo ; // he func hook sarkh use hot hyla tevha call honar