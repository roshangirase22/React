import React from "react";
// hech page aapn app.jsx madhe takto. <card/> tag ne
// props mhnaje ky same card use karych multiple time(ex. shooping card) pn madhli ddetails vegli aste na m tya saathi props use hot
function Card ({username , btnText="see me" }){  // jr card tag madhe btnText chi value nasti tr by default hi value ghet // props ek object aahe ghetl - eka cart madhun dusryat value takta yete // direct (props) cha jaagi ({username}) curly bracket madhe cart atg app.jsx madhe aahe tycha variable takl
  // console.log("props" , props); // hyat ji pn card.jsx tag madhe value deu ti yete.
  // console.log(props.username);
  
  
    return(
        <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white"> {username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
    {/* {btnText || "visit me"} as pn deu shakto je card tag madhe visarlo tr */}
      {btnText} 
    </button>
  </div>
  </div>
  )
}
export default Card;