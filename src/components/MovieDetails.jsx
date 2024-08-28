import { useEffect } from "react"
const KEY = "ea3fad71";
export default function MovieDetails({selectedId, onCloseMovie}){

    useEffect(function(){
        async function getMoviewDetails(){
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            console.log(data);
        }
        getMoviewDetails();
    },[])

    return(
        <div className="details">
            <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
            {selectedId}
        </div>
    )
}