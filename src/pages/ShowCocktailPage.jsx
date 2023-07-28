import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Footer from "../component/Footer"
import Header from "../component/Header"


const ShowCocktailPage = () => {

    const [cocktail, setCocktail] = useState(null)

    // j'utilise la fonction useParams pour récupérer l'id ou l'user a cliqué 
    const { id } = useParams();

    const appelApiShowCocktail = async () => {
        const reponseApiShowCocktail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const reponseApiShowCocktailJson = await reponseApiShowCocktail.json()

        setCocktail(reponseApiShowCocktailJson.drinks[0])
    }

    useEffect(() => {
        appelApiShowCocktail()
    },
        []);

    return (
        <>
            <Header />
            {cocktail && (
                <article>
                    <h2>Détail du cocktail : {cocktail.strDrink}</h2>
                    <div className="containerImgCocktail"><img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} /></div>
                    <h3>Liste des ingrédients: </h3>
                    <ul>
                        <li>{cocktail.strIngredient1}</li>
                        <li>{cocktail.strIngredient2}</li>
                        <li>{cocktail.strIngredient3}</li>
                        <li>{cocktail.strIngredient4}</li>
                    </ul>
                    <h3>Pour réaliser le {cocktail.strDrink}:</h3>
                    <p>{cocktail.strInstructions}</p>
                </article>
            )}
            <Footer />
        </>
    )
}

export default ShowCocktailPage