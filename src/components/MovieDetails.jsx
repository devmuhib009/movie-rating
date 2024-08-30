import { useEffect, useState } from "react"
import StarRating from './StarRating'
const KEY = "ea3fad71";
export default function MovieDetails({selectedId, onCloseMovie, onAddWatched, movieRating, onMovieRating, watched}){
    const [movie, setMovie] = useState({});

    const isWatched = watched.map((movie) => movie.imdbRating).includes(selectedId);

    console.log(isWatched);

    const {Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre} = movie;

    function handleAdd(){

        const newWatchedMovie = {
            imdbRating : selectedId,
            title,
            year,
            poster,
            imdbRatingg: Number(imdbRating),
            runtime: runtime.split(' ').at(0),
            movieRating 
        }

        onAddWatched(newWatchedMovie);
        onCloseMovie();
    }

    useEffect(function(){
        async function getMoviewDetails(){
            const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            setMovie(data)
        }
        getMoviewDetails();
    },[selectedId])

    useEffect(function () {
        document.title = `Movie | ${title}`;

        return function(){
            document.title = 'usePopcorn';
        }
    },[title])

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
                    {
                    !isWatched ? 
                    <>
                        <StarRating size={24} maxRating={10} onMovieRating={onMovieRating}/>
                        {movieRating > 0  && (<button className="btn-add" onClick={handleAdd}>+ Add to list</button>)}
                    </>
                    :
                    <p>You Rated this movie ⭐️⭐️⭐️</p>
                    }
                </div>
                <p><em>{plot}</em></p>
                <p>Starring {actors}</p>
                <p>Directed by {director}</p>
            </section>
        </div>
    )
}