import React  from "react";
import { useParams } from "react-router-dom";


// he pn ek page aahe pn tych naav website vr nhiye  // hr page ya saathi ki jr url sobat shevti khi add kel tr tr disel wrbsite vr.

function User() {
    const {userid} = useParams() // he hook parameter pass kart // useid main.jasx madhun aali

    return( // userid parag import kel main.jsx madhe
        <div className="bg-gray-600 text-white text-3xl p-4"> User: {userid}</div>
    )
}
export default User 