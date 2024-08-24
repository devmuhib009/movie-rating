import Movie from "./Movie";
export default function MovieList({movies}){
    console.log(movies);
    return(
        <>
            <ul className="list">
                {movies?.map((movie) => (
                    <Movie movie={movie} key={movie.imdbID}/>
                ))}
            </ul>
        </>
    )
}