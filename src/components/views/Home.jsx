import { useEffect } from "react";

function Home () {
    useEffect(()=>{
            document.title = "Emdidi | Home"
        }, [])
    return (
        <div className="home">  
            <section className="my-name">
                <hgroup>
                    <h2>Mamadou <span>Doumbia</span></h2>
                </hgroup>
                <p>Full-Stack Software Engineer</p>
            </section>
        </div>
    )
}


export default Home;