import { Link, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

    //handleSubmitSearch Est une variable que j'utilise pour récuperer l'event du formulaire recherche, 
    //Navigate est une variable qui me sert a appeler la fonction useNavigate qui permet de naviger entre plusieurs pages, c'est à dire une fois l'utilisateur fait sa recherche ça nous renvoie vers la page searchResultPage
    const handleSubmitSearch = (event) => {
        event.preventDefault();
        const search = event.target.search.value
        navigate(`/search-results?search=${search}`);
    }


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
                    <form onSubmit={handleSubmitSearch} action="">
                        <button type="submit">Rechercher</button>
                        <input type="text" name="search" />
                    </form>
                </ul>
            </nav>

        </header>
    )
}

export default Header           