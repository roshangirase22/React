// login page ahe tr data pathavycha ahe context madhe
import { useState , useContext } from "react"; // usecontext ha ek hook aahe. // ha hook help karto UseContext je file madhe fun ahe tyacha Madhli value fecth karyla 
import UserContext  from "../context/UserContext";

function Login() {

    const [username , setUsername] = useState('') // username saathi var stored la
    const [password , setPassword] = useState('')


    //ikde data ha UserContext la pathvto as shikanr , ,, jas khali handlesubmit madhe setUser ne value pathvto
    // useContext la () bracket madhe sangav lagt kuthun ghetl krn motha project madhe  multipel context asta ja api , database etc.
    const {setUser} = useContext(UserContext) // usecontext ha ek hook aahe. // ha hook help karto UseContext je file madhe fun ahe tyacha Madhli value fecth karyla  //setUSer he kuthun aal tr UserContextprovider.jsx madhun USerContext func ne pas kel

    const handleSumbit =(e) => { // form handel karto method ha
        e.preventDefault() 

        // setuser he context madhe value pass kel
        setUser({username , password}) // ikde data pathvych shiklo setUser ne atta tikd fectch kas karta bhagu nater - tikde fetch karyla user var use karu 
     
    } 

    
    
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            // value mhnaje ky pass karych value
            value={username}
            // je filed madhe change jhal tr chnage jhal pahije , tr value ghenar aani setUsernmae method la pathvel
            onChange={(e) => setUsername ( e.target.value) }
            placeholder="username" />

            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={handleSumbit}> Submit</button>
        </div>
    )
}

export default Login