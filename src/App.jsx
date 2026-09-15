import Search from "./Component/Search.jsx";
import {useEffect, useState} from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const App = () => {
    const [searchItem, setSearchItem] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovie = async ()=> {
        setIsLoading(true);

        const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
        const response = await fetch(endpoint, API_OPTIONS)

        if(!response.ok){
            throw new Error("Failed to fetch movie");
        }
        const data = await response.json()

        setMovieList(data.results || []);
    }


    useEffect(() => {
        fetchMovie(searchItem);
    }, [searchItem]);

    return(
        <main>
            <div className="pattern" />
            <div className="wrapper">

                <h1 className="text-3xl text-grey">Find <span className="text-gradient">Movies</span> You'll Love Without Hassle.</h1>

                <Search searchItem = {searchItem} setSearchItem ={setSearchItem} />
                <h2>{searchItem}</h2>
            </div>
        </main>
    );
}

export default App