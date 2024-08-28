import { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import Main from './components/Main';
import Search from "./components/Search";
import NumResult from "./components/NumResult";
import Box from "./components/Box";
import MovieList from './components/MovieList';
import WatchedMoviesList  from './components/WatchedMoviesList';
import WatchedSummary from './components/WatchedSummary';
import Loader from "./components/Loader";
import MovieDetails from "./components/MovieDetails";


const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "ea3fad71";

export default function App() {
  const [query, setQuery] = useState("Test");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [movieRating, setMovieRating] = useState(0);

function handleSelectMovie(id){
  setSelectedId(((selectedId) => (id === selectedId ? null : id)))
}

function handleCloseMovie(){
  setSelectedId(null)
}

function handleAddWatched(movie){
  setWatched(watched => [...watched, movie])
}

useEffect( function() {
  async function fetchMovies(){
    
    setIsLoading(true);
    const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
    
    if(!res.ok) throw new Error("Something went wrong!")
    
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search); // Correctly setting the movies state with the Search array
    } else {
      console.error('No movies found:', data.Error);
    }
    setIsLoading(false);
    }

    if(query.length < 3 ){
      setMovies([]);
      return;
    }
    fetchMovies();
  },[query])


  return (
    <>
      <NavBar>        
        <Search query={query} setQuery={setQuery}/>
        <NumResult movies={movies}/>
      </NavBar>
      <Main>
        <Box>
          {isLoading ? <Loader /> : <MovieList movies={movies} onSelectMovie={handleSelectMovie}/> }
        </Box>
        <Box>
          { selectedId 
            ? <MovieDetails 
                selectedId={selectedId} 
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                onMovieRating={setMovieRating}
                movieRating={movieRating}
              /> 
            : 
              <>
              <WatchedSummary watched={watched} average={average}/>
              <WatchedMoviesList watched={watched}/>
              </>  
            } 
        </Box>
      </Main>
    </>
  );
}
