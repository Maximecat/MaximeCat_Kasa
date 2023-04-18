import './404.css'
import { Link } from "react-router-dom";

function Error404() {
    return (
        <div className="Error-page">
            <h1 className="Error-number">404</h1>
            <p className="Error-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="Error-tohome" to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error404 