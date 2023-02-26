import { useEffect } from "react"
import {Link} from "react-router-dom"

function NotFound(){
    useEffect(()=>{
        document.title = "Emdidi | NotFound"
    }, [])
    return(
        <div className="not-found">
            <hgroup>
                <h2>404</h2>
            </hgroup>
                <p>Not found ! redirect <Link to="/">here</Link> </p>
        </div>
    )
}

export default NotFound;