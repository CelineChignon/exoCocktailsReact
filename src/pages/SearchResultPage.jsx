import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
const SearchResultPage = () => {

    const [searchCocktail, setSearchCocktail] = useState([])

    const appelApiSearch = async () => {
        const reponseApiSearch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        const reponseApiSearchJson = await reponseApiSearch.json()

        setSearchCocktail(reponseApiSearchJson.drinks)
    }
    useEffect(() => {
        appelApiSearch()
    }, ([])
    )
    // on récupère le paramètre search de l'url
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");
    return (
        <>
            <Header />
            <h2>Resultat de votre recherche:</h2>
            <div>
                {searchCocktail ? (
                    searchCocktail.map((cocktail) => (

                        <p>{cocktail.strDrink}</p>
                    ))
                ) : (
                    <p>Aucun cocktail ne porte ce nom</p>
                )}
            </div>
            <Footer />
        </>
    )
}
export default SearchResultPage