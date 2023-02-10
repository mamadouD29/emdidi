import {Link} from "react-router-dom"
import {BiMenuAltRight, BiX} from "react-icons/bi"
import { useState } from "react";

const lists = [
    {id: 1, to: "/", title: "Home"},
    {id: 2, to:"/about", title: "About"},
    {id: 3, to: "/portfolio", title: "Portfolio"},
    {id: 4, to: "/contact", title: "Contact"}
]


function NavBar (){
    const [menuOpen, setMenuOpen]= useState(false)
    // const [size]
    const classes = {
        show: "active",
        hide: ""
    }

    const handleDropdown =() =>{
        setMenuOpen(!menuOpen)
    }


    return (
        <>

            <nav>
                <Link  to="/" className="site-title">Emdidi</Link>
                <ul className={ menuOpen ? classes.show : classes.hide}>
                    {
                        lists.map(list => 
                        <li key={list.id}>
                            <Link to={list.to} onClick={handleDropdown }>{list.title}</Link>
                        </li>
                        )
                    }
                </ul>   
                
                <div className="dropBtn">
                {menuOpen ?<BiX color="white" className="dropBtn-icon" onClick={handleDropdown}  /> :  <BiMenuAltRight color="white" className="dropBtn-icon" onClick={handleDropdown}/>}
                </div>
               
               
            </nav>
        </>
    )
}


export default NavBar;