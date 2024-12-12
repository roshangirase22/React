import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() { // github cha api call karto

    const data= useLoaderData() // loader saathi use kel

    // 1 way to fetch  // 2 way khali ahe loader ne
    // const [data , setData ] =useState([])

    // useEffect( ( ) => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then( responce => responce.json)
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
    return(

       <div className='text-center bg-black m-4 bg-grey-600 text-white p-4 text-3xl'>Github Followers:{data.followers} 
       <img src={data.avatar_url} alt="Git picture"  width={300}/> 
       </div>
    )
}
export default Github

// 2 way to fetch method saathi with used of loader
// loader design karto :- use optimization saathi hoto boook madhe bhag.
 export const githubInfoLoader = async() => {
   const responce = await fetch('https://api.github.com/users/hiteshchoudhary')
   return (responce.json())

 }
