import {MdDarkMode } from "react-icons/md";


function DarkMode (){
    return(
        <div>
            <section className="dark-mode">
                <button className="btn btn-outline-dark"> <MdDarkMode/></button>
            </section>
        </div>
    )
}



export default DarkMode;