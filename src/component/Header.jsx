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

                    <li ><Link className="liNavBar" to="/">Accueil</Link></li>
                    <li ><Link className="liNavBar" to="/cocktails">Cocktails</Link></li>
                    <li ><Link className="liNavBar" to="/random">Cocktail du jour</Link></li>
                    {/* <form action="">
                        <label htmlFor="">Recherche</label>
                        <input type="search" />
                    </form> */}
                </ul>
            </nav>

        </header>
    )
}

export default Header           