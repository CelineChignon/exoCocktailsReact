import { useEffect, useState } from "react"
import Header from "../component/Header"
import Footer from "../component/Footer";

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
                        <p>Liste des ingredients: </p>
                        <ul>
                            <li>{cocktails.strIngredient1}</li>
                            <li>{cocktails.strIngredient2}</li>
                            <li>{cocktails.strIngredient3}</li>
                            <li>{cocktails.strIngredient4}</li>
                        </ul>

                    </div>
                ))}
                <Footer />
            </div>
        )
    }

export default ListAllCocktailsPage