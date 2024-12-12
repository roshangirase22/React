import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route , createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom' // import raect router
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// router banvav lagto tyla createBrowserRouter method () ne banav:-  // array madhe object taku je pn aaplya pahije //
// 1 way to do:-
// const router = createBrowserRouter([  // outlet insert kartana main file madhe sanagav lagt home cha madhe about as ahe  home madhe contact as ahe as 
  // {
  //   path: '/', // top level element tycha madhe nexting hote
  //   element: <Layout/>,
  //   children:[
  //     {
  //       path:"", 
  //       element: <Home/>
  //     },
  //     {
  //       path:"about",
  //       element:<About/>

  //     },
  //     {
  //       path :"Contact",
  //       element:<Contact/>
  //     }
  //   ]
  // }
// ])

// 2 way to do routing ch path set karych:= means nesting karto // kas pn kra doghi mrthod pki ek
const router = createBrowserRouter(
  createRoutesFromElements ( // hya method madhe route lihu sahkto

    // pahile khali layout dil mhnun tr paudhe path deu shaklo karn / root dil tr pudhch render hot.
     <Route path='/' element={<Layout/>}> // pahile layout dil mhnun tr paudhe path deu shakto
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />

      {/* khalch route url madhe aapn changes kru tevha yenar= userid he paras(parameter) pass karto user.jsx madhe */}
      <Route path='user/:userid' element={<User/>} /> 
      {/* <Route path='github' element={<Github/>} />  */}
      <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github/>}
      />
      

    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // he routerprovide la router  lagto jo banvav lagel kas te vr kel bhag*/}
    < RouterProvider router={router} /> 
  </StrictMode>,
)
