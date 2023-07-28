import { useEffect, useState } from "react"
import Header from "../component/Header"
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const ListAllCocktailsPage
    = () => {
        const [cocktails, setCocktails] = useState([])


        const appelApiCoctails = async () => {

            const reponseApiAllCocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s= `)
            const reponseApiAllCoctailsJson = await reponseApiAllCocktails.json()
            setCocktails(reponseApiAllCoctailsJson.drinks)
        }

        useEffect(() => { appelApiCoctails() },
            ([])
        )


        return (
            <div >
                <Header />
                <h1>Nos cocktails: </h1>
                {cocktails.map((cocktails) => (
                    <div className="containerCocktails" key={cocktails.idDrink}>
                        <h3>{cocktails.strDrink}</h3>
                        <div className="containerImgCocktail"><img src={cocktails.strDrinkThumb} alt="Photo cocktail" /></div>
                        <Link to={"/cocktails/show/" + cocktails.idDrink}>Voir le cocktail</Link>
// j'utilise Link pour effectuer rediriger vers le cocktail choisi qui se trouve sur la page ShowCocktailPage

                    </div>
                ))}
                <Footer />
            </div>
        )
    }

export default ListAllCocktailsPage