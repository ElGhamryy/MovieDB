import React from 'react';
import { useMovies } from '../contexts/MoviesContext';

const MovieDetails = () => {

    const { movies, selectedMovieId } = useMovies();
    const selectedMovie = movies.find(movie => movie.id === selectedMovieId)

    if (!selectedMovie) {
        // Handle the case when the selected movie is not found
        return <div className='App-header'>Movie not found</div>;
    }

    const { title,  release_date, overview, vote_average } = selectedMovie;

    return (
        <div className='App-header'>
            <h1>Title: {title}</h1>
            <p><b>Overview</b>: {overview}</p>
            <p><b>Release Date</b>: {release_date}</p>
            <p><b>Rating</b>: {vote_average}</p>
        </div>
    );
}

export default MovieDetails;