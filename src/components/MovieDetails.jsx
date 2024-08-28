import { useEffect, useState } from "react"
import StarRating from './StarRating'
const KEY = "ea3fad71";
export default function MovieDetails({selectedId, onCloseMovie, onAddWatched, movieRating, onMovieRating}){
    const [movie, setMovie] = useState({});

    const {Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre} = movie;

    function handleAdd(){

        const newWatchedMovie = {
            imdbRatin : selectedId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: runtime.split(' ').at(0),
            movieRating 
        }

        onAddWatched(newWatchedMovie);
        onCloseMovie();
    }

    useEffect(function(){
        async function getMoviewDetails(){
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            setMovie(data)
        }
        getMoviewDetails();
    },[selectedId])

    return(
        <div className="details">
            <header>
                <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
                <img src={poster} alt={`Poster of ${movie} movie`} />
                <div className="details-overview">
                    <h2>{title}</h2>
                    <p>{released} &bull; {runtime}</p>
                    <p>{genre}</p>
                    <p>
                        <span>⭐️</span>
                        {imdbRating} IMDB Rating.
                    </p>
                </div>
            </header>
            <section>
                <div className="rating">
                    <StarRating size={24} maxRating={10} onMovieRating={onMovieRating}/>
                    {movieRating > 0  && (<button className="btn-add" onClick={handleAdd}>+ Add to list</button>)}
                </div>
                <p><em>{plot}</em></p>
                <p>Starring {actors}</p>
                <p>Directed by {director}</p>
            </section>
        </div>
    )
}