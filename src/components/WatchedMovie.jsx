export default function WatchedMovie({movie, onDeleteWatched}){
    return(
        <>
            <li>
                <img src={movie.poster} alt={`${movie.title} poster`} />
                <h3>{movie.title}</h3>
                <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRatingg}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.movieRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>

                <button className="btn-delete" onClick={() => onDeleteWatched(movie.imdbRatingg)}>X</button>
                </div>
            </li>
        </>
    )
}