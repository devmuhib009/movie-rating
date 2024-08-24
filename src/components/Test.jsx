import { useState } from "react";
import StarRating from "./StarRating";

export default function Test(){
    const [movieRating, setMovieRating] = useState(0);
    return(
        <>
            <StarRating maxRating={10} color="blue" onMovieRating={setMovieRating}/>
            <p>User provided {movieRating} rating to this movie.</p>
        </>
    )
}