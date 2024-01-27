import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

const MoviesContext = createContext()

export function useMovies() {
    return useContext(MoviesContext)
}

export const MoviesProvider = ( {children} ) => {

    const [movies, setMovies] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState([]);
   
    // on ComponentDidMount
    useEffect(() => {
        const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
        const url = "https://api.themoviedb.org/3";
        const path = "/discover/movie?sort_by=popularity.desc";
        const apiUrl = url + path + apiKey;

        axios.get(apiUrl)
        .then(response => setMovies(response.data.results))
    }, []);

    return <MoviesContext.Provider value={{
        movies,
        setMovies,
        selectedMovieId,
        setSelectedMovieId
    }} >{children}</MoviesContext.Provider>
}