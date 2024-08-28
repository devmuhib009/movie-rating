import WatchedSummary from './WatchedSummary'
import WatchedMoviesList from './WatchedMoviesList'
import { useState } from "react"
import MovieDetails from './MovieDetails';
export default function WatchedBox({tempWatchedData, average, selectedId}){
    const [isOpen2, setIsOpen2] = useState(true);
    const [watched, setWatched] = useState(tempWatchedData);

    return(
        <>
            <div className="box">
                <button
                    className="btn-toggle"
                    onClick={() => setIsOpen2((open) => !open)}
                >
                    {isOpen2 ? "–" : "+"}
                </button>
                {isOpen2 && (
                    <>
                    { selectedId ? <MovieDetails/> : 
                        <>
                        <WatchedSummary watched={watched} average={average}/>
                        <WatchedMoviesList watched={watched}/>
                        </>  
                    }                  
                    </>
                )}
            </div>
        </>
    )
}