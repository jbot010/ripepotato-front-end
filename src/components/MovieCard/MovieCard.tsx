// npm modules
import { useState } from "react"

// types
import { Movie, User } from "../../types/models"

// component
import MovieForm from "../MovieForm/MovieForm"

interface MovieCardProps {
  movie: Movie
  user: User | null;
  onSubmit: (formData: Movie) => Promise<void>
  onDelete: (movieId: number) => Promise<void>
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { user, movie, onSubmit, onDelete } = props
  const [isEditing, setIsEditng] = useState<boolean>(false)

  const checkIfIsCurrentUser = () => {
    return user?.profile.id === movie.createdById
  }

  const handleShowForm = () => {
    setIsEditng(!isEditing)
  }

  const handleSubmit = (formData: Movie) => {
    onSubmit({ id: movie.id, ...formData })
    handleShowForm()
  }

  const handleDeleteMovie = () => {
    if (movie.id) {
      onDelete(movie.id)
    }
  }

  return (
    <div style={{border: "1px solid white"}} key={`${movie.title}-${movie.rtScore}`}>
      {checkIfIsCurrentUser() ? <button onClick={handleShowForm}>{isEditing ? "cancel" : "EDIT"}</button> : ""}
      {isEditing ? <MovieForm movie={movie} onSubmit={handleSubmit} /> 
        : 
      <div>
        {/* <img src="./cinema.png" alt={`${movie.title}'s avatar`} /> */}
        <h1>{movie.title}</h1>
        <h2>{movie.rtScore}</h2>
      </div>}
      <h2>RIPEPOTATO SCORE HERE</h2>
      { checkIfIsCurrentUser() ? 
        <button onClick={handleDeleteMovie}>
          DELETE MOVIE
        </button>
        : ""
      }
    </div>
  )
}

export default MovieCard
