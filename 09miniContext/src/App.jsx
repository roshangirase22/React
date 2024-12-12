
import './App.css'
import Login from './compopnents/LogIn'
import Profile  from './compopnents/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return ( // hyat je pn compopnent deu tycha access bhetnar ikde </> as
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
