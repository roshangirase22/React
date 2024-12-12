// step 1) 1 way to write context 
import React from "react";

const UserContext =React.createContext() // createContext () import karto react madhun // and stored in var

export default UserContext; 
// context basically global variable 
// context ahe ky provider jo variable provide karto , m UserContext pn provider ahe  , ani tycha madhe wrap karych ex.- jas component route madhe karycho
{/* <UserContext>
    <login/>
    <card/>
<UserContext/> */}

