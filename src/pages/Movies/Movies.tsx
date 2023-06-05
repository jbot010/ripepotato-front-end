import { useEffect } from "react"

// css
import styles from "./Movies.module.css"

// components
import MovieCard from "../../components/MovieCard/MovieCard"
import MovieForm from "../../components/MovieForm/MovieForm"

// types
import { Movie } from "../../types/models"
import { useState } from "react"
import { movieFormData } from "../../types/forms"

// service
import * as movieService from "../../services/movieService"

interface MoviesProps {
  movies: Movie[]
}

const Movies = (props: MoviesProps): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([])

  const [showNewMovieForm, setShowNewMovieForm] = useState(false)

  const { user } = props

  useEffect((): void => {
    const fetchMovies = async (): Promise<void> => {
      try {
        const movieData: Movie[] = await movieService.getAllMovies()
        setMovies(movieData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchMovies() : setMovies([])
  }, [user])

  const handleAddMovie = async (formData: Movie) => {
    try {
      const newMovie = await movieService.create(formData)
      setMovies([newMovie, ...movies])
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateMovie = async (formData: Movie) => {
    try {
      const updateMovie = await movieService.update(formData)
      setMovies([updateMovie, ...movies])
    } catch (error) {
      console.log(error)      
    }
  }

  if (!movies.length) return <p>No movies yet</p>

  return (
    <main className="list">
      <h1>Hello. This is a list of all the movies.</h1>
      <button> {showNewMovieForm ? "cancel" : "Add New Movie"}</button>{showNewMovieForm ? <MovieForm onSubmit={handleAddMovie} /> : ""}
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} onEdit={handleUpdateMovie} />
        ))}
    </main>
  )
}

export default Movies
