import { Link } from "react-router-dom";
import gamePng from "../../p-Icon/game1.png";
import calcPng from "../../p-Icon/calc1.png"
import rmaPng from "../../p-Icon/rma1.png"
import interPng from "../../p-Icon/inter1.png"
import ibrahimPng from "../../p-Icon/Ibrahiim.png"

function Portfolio(){
    return(
        <div>
            <div className="p-wrapper">
                <div className="p-content">
                    
                    <section className="p-menu">
                        <article className="p-list">
                            <hgroup>
                                <h1>Games</h1>
                            </hgroup>
                            <section className="p-item">
                                <figure>
                                    <img src={gamePng} alt="game_image" />
                                </figure>
                                <p>Hello, welcome to my game space. There are games that I have designed in my free time and play when needed. You can give a shot at any of the games you find in this section. <Link to={"https://www.emdidi.net/Games/game.html"}>Click here</Link></p>
                            </section>
                        </article>
                    </section>
                    
                    <section className="p-menu">
                        <article className="p-list">
                            <hgroup>
                                <h1>Calc</h1>
                            </hgroup>
                            <section className="p-item">
                                <figure>
                                    <img src={calcPng} alt="calc_image" />
                                </figure>
                                <p>Hey, nice to see you here. I designed and built a calculator because I felt it would be a great idea to use my own during my different work. I also thought it would buy me time whenever I needed to calculate some task. However, the calculator is available to everybody. <Link to={""}>Click here</Link></p>
                            </section>
                        </article>
                    </section>
                    
                    <section className="p-menu">
                        <article className="p-list">
                            <hgroup>
                                <h1>RMA</h1>
                            </hgroup>
                            <section className="p-item">
                                <figure>
                                    <img src={rmaPng} alt="rma_image" />
                                </figure>
                                <p>As a deep fan of the REAL MADRID FC soccer team, I needed to build a fan page to keep track of them and post news such as players, transfers, trophies, and parkour in different competitions. <Link to={""}>Click here</Link></p>
                            </section>
                        </article>
                    </section>
                    
                    <section className="p-menu">
                        <article className="p-list">
                            <hgroup>
                                <h1>INTERNAZIONALE</h1>
                            </hgroup>
                            <section className="p-item">
                                <figure>
                                    <img src={interPng} alt="inter_image" />
                                </figure>
                                <p>As a deep fan of the INTERNAZONALE soccer team, I needed to build a fan page to keep track of them and post news such as players, transfers, trophies, and parkour in different competitions. <Link to={""}>Click here</Link></p>
                            </section>
                        </article>
                    </section>
                    
                    <section className="p-menu">
                        <article className="p-list">
                            <hgroup>
                                <h1>DAWAH</h1>
                            </hgroup>
                            <section className="p-item">
                                <figure>
                                    <img src={ibrahimPng} alt="dawa_image" />
                                </figure>
                                <p>The Islamic Dawah Foundation [IDF] in Wichita USA, is a non-profit organization that promotes the Islamic dawa’ah by removing the misconception and negative sentiment about Islam to the none Muslim.
You can read more by <Link to={"https://emdidi92.github.io/dawah.github.io/"}>Click here</Link></p>
                            </section>
                        </article>
                    </section>

                </div>
               
            </div>
        </div>
    )
}

export default Portfolio;