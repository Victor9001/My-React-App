import Search from "./Component/Search.jsx";
import MovieCard from "./Component/MovieCard.jsx";
import {useEffect, useState} from "react";
import {useDebounce} from "react-use";

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
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

      useDebounce(() => setDebouncedSearchTerm(searchItem), 500, [searchItem]);

    const fetchMovie = async (query = "")=> {
        setIsLoading(true);


        try{
        const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
                                        `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
        const response = await fetch(endpoint, API_OPTIONS)

        if(!response.ok){
            throw new Error("Failed to fetch movie");
        }
        const data = await response.json()

            if(data.response === "false"){
                setErrorMessage(data.error || `failed to fetch movie`);
                setMovieList([]);
                return;
            }

        setMovieList(data.results || []);

           // if(query && data.results.length > 0){
           //     await updateSearchCount(query, data.results[0]);
          //  }
        }catch (error) {
            console.error(`Fail fetching movie: ${error}`);
            setErrorMessage("failed to fetch movies, Please try again later.");
        }finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchMovie(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    return(
        <main>
            <div className="pattern" />
            <div className="wrapper">

                <header>
                    <h1 className="text-3xl text-grey">Find <span className="text-gradient">Movies</span> You'll Love Without Hassle.</h1>

                    <Search searchItem = {searchItem} setSearchItem ={setSearchItem} />

                </header>


                <section className="all-movies">
                    <h2 className="mt-[40px]">All Movies</h2>

                    {isLoading ? (
                        <p className="text-white">Loading.....</p>
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ): (
                        <ul>
                         {movieList.map((movie) => (
                            <MovieCard key={movie.id} movie={movie}/>
                            ))}
                     </ul>
                        )}

                </section>
            </div>
        </main>
    );
}

export default App