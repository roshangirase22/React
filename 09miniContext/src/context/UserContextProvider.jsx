import React, { useState } from "react";
import UserContext  from "./UserContext";

const UserContextProvider = ({children})=> { // ek route ch concept hota head footer same madhli element change tasc h childern pn element ghenar jas div , input tr tyna jas childern naav dil khi pn deu shakto pn document wise dil

    const [user , setUser] = useState(null)
    return ( // return madhe wrap karnar

        // khali- value pn ek prop ahe tyat aapn data khi pass karycho tho karych tr aapn object madhe je daych te dil  // bssically satored value pathvyach
        <UserContext.Provider value={{user , setUser}}> 
            {children} 
        </UserContext.Provider>

    )

}
export default UserContextProvider 