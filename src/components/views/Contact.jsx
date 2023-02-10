import { BiMap, BiEnvelope, BiMobileAlt, } from "react-icons/bi";

import { BsYoutube, BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";


import { Link } from "react-router-dom";

const socMedia = [
    {id: 1, icon: <BsGithub size="3em"/>, hr: "https://github.com/mamadouD29"},
    {id: 2, icon: <BsLinkedin size="3em"/>, hr: "https://www.linkedin.com/in/mamadoudoumbia92/"},
    {id: 3, icon: <BsYoutube size="3em"/>, hr: ""},
    {id: 4, icon: <BsFacebook size="3em"/>, hr: "" }
]



function Contact(){
    
    return(

           <div className="c-wrapper">
         
            <section className="c-content">
                <hgroup>
                    <h1>Contact</h1>
                </hgroup>

                <section className="all-contact">
                    <div className="mb-3">
                        {/* <Link><BiMap size="4em" /> United State </Link> */}
                        <Link to={""}><BiMap size="4em" className="iCon"/> United State</Link>
                    </div>

                    <div className="mb-3">
                 
                         <a href="tel: 3162261411"> <BiMobileAlt size="4em" className="iCon"/>Phone</a>                        
                    </div>

                    <div className="mb-3">
                        <a href="email: emdidi92@gmail.com"><BiEnvelope size="4em" className="iCon"/> Email</a>
                    </div>

                    <div className="mb-3 social-media">
                   
                        <ul>
                            {
                                socMedia.map(
                                   sMedia =>
                                   <li key={sMedia.id}>
                                    <Link to={sMedia.hr} >
                                        {sMedia.icon}
                                    </Link>
                                   </li>

                                )
                            }
                        </ul>
                    </div>
                </section>
            </section>
           </div>
    )
}

export default Contact;