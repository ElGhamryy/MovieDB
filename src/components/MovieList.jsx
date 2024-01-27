import React, { memo } from 'react';
import {v4 as uuid} from 'uuid';
import CircularIndeterminate from './LoadingIcon';
import MultiActionAreaCard from './MovieCard';
import { useMovies } from "../contexts/MoviesContext"


//TODO Implement Search Bar

const MovieList = () => {

    const { movies, setSelectedMovieId } = useMovies()
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    const handleViewDetails = (movieId) => {
        setSelectedMovieId(movieId);
      };

    console.log(movies)

    return (
        <div>
            <div className='movie-card-container'>
                {movies? (movies.map((movie) => <MultiActionAreaCard 
                key={uuid()} 
                movie={movie} 
                imgPath={imgPath} 
                onViewDetails={handleViewDetails} />)):<CircularIndeterminate/>}
            </div>
        </div>
    )
}

export default memo(MovieList);