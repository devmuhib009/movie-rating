import { useState } from "react";
import StarRating from "./StarRating";

const containerStyle = {
    display: "flex",
    flexDirection: "column"
}

export default function Home(){
    const [movieRating, setMovieRating] = useState(0);
    return(
        <>
            <div style={containerStyle}>
                <h1>React Movie Rating Package</h1>
                <p>A practice Project by Muhibul Haque</p>
                <StarRating maxRating={10} color="blue" onMovieRating={setMovieRating}/>
                <p>User provided {movieRating} rating to this movie.</p>
            </div>
        </>
    )
}