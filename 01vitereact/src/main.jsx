import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp (){ 
  return (
    <div>
      <h1>
        custom App !
      </h1>
    </div>
  ) // hyach func la behind the seen tree object madhe banvt je customreact madhe kel  
}


// const reactElement = { // he nhi chalnar karn react madhe cha ek format ahe behind the seen proper ek stucture aahe konti property pahile te as te khali bhagu // jas aapn customreact madhe aapla sothach render banvla hota atta ikdch ch render stucture vegl
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: 'blank'
//   },
//   Children:'click me to visit google'
// } 

// html tag la behind seen object(tree form ) madhe babel (jo js compiler ahe tho karto)
const reactElement = React.createElement( // he react ch proper tree stuture pahile konti propety ghyachi mag koti as
  'a',
  {href: 'https://google.com', target: 'blank'},
  'click me to visit google'
)

const anotherElement = ( // samj reactElement nhi chal ahe tyla commment krun as object madhe html tag takun execute keu bhagu  
  <a href="https://google.com" target='blank'> Visit Google</a>
)

{/* */}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<MyApp />  ha func ahe hyla Myapp() as jri lihl ast tri execute jhala asta // ani samjl object execute karycha tr fakt tyach naav lihaych jas ex. reactElement khali bhagu */}   
    
    {/* anotherElement*/}
    {/*reactElement */}

    <App />

  </StrictMode>,
)
