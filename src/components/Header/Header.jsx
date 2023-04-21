import './Header.css'

function Header() {
    return (
        <header>
            <img src="/logo-kasa-rouge.png" alt='logo'></img>
            <div className="header-choice">
                <a className='link-pages' href="/">Accueil</a>
                <a className='link-pages' href="/about">A Propos</a>
            </div>
        </header>
    )
}

export default Header