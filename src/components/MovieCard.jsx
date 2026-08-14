import {Link} from 'react-router-dom'
function MovieCard({movie}){


    return(
        <div>
           <div className="movie-card">
            <img src={movie.Poster} alt="" />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
        </div>
        </div>
    )
}
export default MovieCard