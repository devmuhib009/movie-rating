import WatchedMovie from './WatchedMovie'
export default function WatchedMoviesList({watched, onDeleteWatched}){
    return(
        <>
            <ul className="list">
                {watched?.map((movie) => (
                    <WatchedMovie movie={movie} key={movie.imdbRatingg}
                    onDeleteWatched={onDeleteWatched}/>
                ))}
            </ul>
        </>
    )
}