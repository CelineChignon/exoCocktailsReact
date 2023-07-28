import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

const RandomCocktailPage = () => {
    const [randomCocktail, setRandomCocktail] = useState(null);

    const fetchRandomCocktail = async () => {
        const randomCocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const randomCocktailJs = await randomCocktailResponse.json();

        setRandomCocktail(randomCocktailJs.drinks[0]);
    };

    useEffect(() => {
        fetchRandomCocktail();
    }, []);

    return (
        <div>
            <Header />
            <h1> Cocktail du jour :</h1>

            {randomCocktail === null && <p>Loading...</p>}

            {randomCocktail !== null && (
                <div>
                    <p>{randomCocktail.strDrink}</p>
                    <div className="containerImgCocktail"><img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} /></div>
                </div>
            )}
            <button onClick={fetchRandomCocktail}>Changer le cocktail</button>
            <Footer />
        </div>
    );
};

export default RandomCocktailPage;