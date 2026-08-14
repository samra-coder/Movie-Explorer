import { useState, useEffect, useRef } from 'react'
import MovieList from '../components/MovieList'

function Home() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] =useState(false)

  const fetchMovies= async(search)=>{
    setLoading(true)
    const response=await fetch(`http://www.omdbapi.com/?apikey=c64ed2aa&s=${search}`)
    const data=await response.json()
    setMovies(data.Search || [])

    setLoading(false)

  }

  useEffect(()=>{
     fetchMovies("Avengers")
  },[])

  const inputref=useRef()

  const handleInput=(e)=>{
    e.preventDefault();
    const query=inputref.current.value.trim();
      if(query) fetchMovies(query)
  }

  return (
    <div className='home'>
      <form onSubmit={handleInput}>
        <input type="text" ref={inputref} placeholder='search for a movie....'/>
        <button> 🔍 search </button>
      </form>


      {loading? <p>loading....</p> : <MovieList movies={movies}/>}
      
    </div>
  )
}

export default Home
