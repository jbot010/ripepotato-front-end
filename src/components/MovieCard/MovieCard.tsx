// npm modules
import { useState } from "react";
// types
import { Movie, User } from "../../types/models"

// component
import MovieForm from "../MovieForm/MovieForm"

interface MovieCardProps {
  movie: Movie
  user: User | null;
  onSubmit: (formData: Movie) => Promise<void>
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { user, movie, onSubmit } = props

  const [isEditing, setIsEditng] = useState(false)
  const checkIfIsCurrentUser = () => {
    console.log(movie, user);
    
    return user?.profile.id === movie.createdById
    
  }


  return (
    <div>
      {checkIfIsCurrentUser() ? <button> {isEditing ? "cancel" : "EDIT"}</button> : ""}
      {isEditing ? <MovieForm onSubmit={onSubmit} /> 
        : 
      <div>
        <img src="./cinema.png" alt={`${movie.title}'s avatar`} />
        <h1>{movie.title}</h1>
        <h2>{movie.rtScore}</h2>
      </div>}
      <h2>RIPEPOTATO SCORE HERE</h2>
      {/* { user && 
        <button onClick={handleDeleteMovie}>
          DELETE ACCOUNT
        </button>
      } */}
    </div>
  )
}

export default MovieCard
