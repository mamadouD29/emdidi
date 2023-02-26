import { useEffect, useState } from "react";
import emdidiJpg from "../../emdidi.jpg"

// const spnaList = 

function About(){
    const [an_paused, setAn_Paused] = useState({
        animationPlayState: "running"
    })    
    setInterval(()=>{
        if (an_paused.animationPlayState === "paused") setAn_Paused({animationPlayState: "running"})
        else setAn_Paused({
            animationPlayState: "paused"
        })
    }, 4000)

    useEffect(()=>{
        document.title = "Emdidi | About"
    },[])
    
    return(
        <div className="about-container">
        <div className="drop-effect">
        <div>
             <span className="item">|</span>
             <span className="item">|</span>
             <span className="item">|</span>
             <span className="item">|</span>
             <span className="item">|</span>
             <span className="item">|</span>
             <span className="item">|</span>
             <span className="item">|</span>
             <span className="item">|</span>
             <span className="item">|</span>
            
        </div>
        </div>
        <div className="wrapper">

            <section className="about-name">
                <figure>
            
                    <img src={emdidiJpg} alt="Mamadou Doumbia" width="" /> 
            
                </figure>

            </section>

            <section className="about-info">
                <hgroup>
                <h2>About</h2>
                 <h1>Mamadou Doumbia</h1>
                </hgroup>
                <p>My name is Mamadou Doumbia. I am a Computer Science graduate from Wichita State University in Kansas, United States. I am passionate about software and web development. My love for building and interactive user interfaces led me to work as a front-end developer on Web and Mobile Asset Management applications. Also, I worked on different projects for personal use. Some of those projects are listed below in the work sections </p>
                <p>Like, any graduate of Computer Science, I started my journey with high-level programming languages, standard markup, stylesheet languages, and graphic editors such as C++, HTML, CSS, JavaScript, SQL, Adobe Photoshop, and Gimp. After my knowledge got stimulated, I learned programming languages, run-time environments, and web development platforms ( application frameworks) like Python, C#, Node.js, and ASP.NET in my spare time.</p>
            </section>
            
        </div>
        </div>
    )
}

export default About;