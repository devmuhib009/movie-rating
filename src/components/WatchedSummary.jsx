export default function WatchedSummary({watched = [], average}){
console.log("Watched Movies:", watched);
    const avgImdbRating = average(watched.map((movie) => movie.imdbRatingg));
    const avgUserRating = average(watched.map((movie) => movie.movieRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return(
        <>
            <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
                </div>
            </div>
        </>
    )
}
