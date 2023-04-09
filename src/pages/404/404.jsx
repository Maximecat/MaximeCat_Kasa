import './404.css'

function Error404() {
    return (
        <div className="Error-page">
            <h1 className="Error-number">404</h1>
            <p className="Error-text">Oups! La page que vous demandez n'existe pas.</p>
            <a className="Error-tohome" href="/">Retourner sur la page d’accueil</a>
        </div>
    )
}

export default Error404 