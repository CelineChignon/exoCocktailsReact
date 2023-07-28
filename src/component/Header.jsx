import { Link } from "react-router-dom";
const Header = () => {

    return (
        <header className="containerHeader">
            <nav className="containerNavbar">
                <div className="containerLogo">
                    <img src="/img/logo.png" alt="logo" />
                </div>
                <h1>Atelier Cocktails</h1>
                <ul className="navBarre">

                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/cocktails">Cocktails</Link></li>
                    <li><Link to="/random">Cocktail du jour</Link></li>
                    <li >Utilisateur<p ></p></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header           