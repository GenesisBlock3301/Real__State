import React from 'react'
import NavBar from "../components/Navbar";
import NotFound from "../components/NotFound";

const Layout=(props)=>{
    return(
        <div>
            <NavBar/>
            {props.children}
        </div>
    )
}
export default Layout