// npm modules
import { useState } from "react"

// types
import { Movie, User } from "../../types/models"
import { movieFormData } from "../../types/forms"

// component
import MovieForm from "../MovieForm/MovieForm"
import VoteInput from "./VoteInput"

interface MovieCardProps {
  movie: Movie
  user: User | null
  onSubmit: (formData: movieFormData) => void
  onDelete: (movieId: number) => Promise<void>
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { user, movie, onSubmit, onDelete } = props
  const [isEditing, setIsEditng] = useState<boolean>(false)
  const [userScore, setUserScore] = useState<number>(0)
  const [avgScore, setAvgScore] = useState<number>(0)

  const checkIfIsCurrentUser = () => {
    return user?.profile.id === movie.createdById
  }

  const handleShowForm = () => {
    setIsEditng(!isEditing)
  }

  const handleSubmit = (formData: movieFormData) => {
    onSubmit({ id: movie.id, ...formData })
    handleShowForm()
  }

  const handleDeleteMovie = () => {
    if (movie.id) {
      onDelete(movie.id)
    }
  }
  console.log("MOVIE CARD", { movie })


  const getVotes = () => {
    let total = 0

    // map over movies.votesReceived
    // forEach vote check voteId === user.profile.id
    // if ids match, set user vote 
    // update userScore
    // forEach vote add value to total
    
    // math for total total / votesReceived.length 
    // setAvgScore

  }


  return (
    <div
      style={{ border: "1px solid white" }}
      key={`${movie.title}-${movie.rtScore}`}
    >
      {checkIfIsCurrentUser() ? (
        <button onClick={handleShowForm}>
          {isEditing ? "cancel" : "EDIT"}
        </button>
      ) : (
        ""
      )}
      {isEditing ? (
        <MovieForm movie={movie} onSubmit={handleSubmit} />
      ) : (
        <div>
          {/* <img src="./cinema.png" alt={`${movie.title}'s avatar`} /> */}
          <h1>{movie.title}</h1>
          <h2>{movie.rtScore}</h2>
        </div>
      )}
      <h2> {avgScore} RIPEPOTATO SCORE HERE</h2>
      <VoteInput defaultValue={userScore}/>
    
      {checkIfIsCurrentUser() ? (
        <button onClick={handleDeleteMovie}>DELETE MOVIE</button>
      ) : (
        ""
      )}
    </div>
  )
}

export default MovieCard
