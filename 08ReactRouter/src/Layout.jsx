import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom"; // he ky kart tr header footer sarv page la same thevth
// hech kaam aapn App.jsx madhe karu shaklo asto
function Layout(){
    return( // outlet insert kartana main file madhe sanagav lagt home cha madhe about as ahe  home madhe contact as ahe as 
    <>
        <Header/>
        <Outlet/> 
        <Footer/>
        
    </>
    )
}
export default Layout