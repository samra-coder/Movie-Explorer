import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MovieDetails() {

    const {id}=useParams()
    const [movie, setMovie]=useState(null)

    useEffect(()=>{
        async function fetchMovieDetails(){
          const response=await fetch(`http://www.omdbapi.com/?apikey=c64ed2aa&i=${id}`) 
          const data=await response.json()
          setMovie(data)  
        }
        fetchMovieDetails()
    },[id])
    if(!movie){
        return <p>Loading...</p>
    }

  return (
    <div className='movie-details'>
       <h2>{movie.Title}</h2>
       <img src={movie.Poster} alt="" />
       <p>Released: {movie.Released}</p>
       <p>Plot: {movie.Plot}</p>

    </div>
  )
}

export default MovieDetails
