// npm modules
import { useState, useEffect } from "react"

// style
import styles from "./MovieCard.module.css"

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
  onSubmitVote: (movieId: number | null, value: number) => Promise<void>
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { user, movie, onSubmit, onDelete, onSubmitVote } = props
  const [isEditing, setIsEditng] = useState<boolean>(false)
  const [userScore, setUserScore] = useState<number>(0)
  const [avgScore, setAvgScore] = useState<number>(0)

  useEffect((): void => {
    getVotes()
  }, [movie])

  const checkIfIsCurrentUser = () => {
    if (user) return user.profile.id === movie.createdById
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

  const getVotes = () => {
    if (movie.votesReceived && movie.votesReceived.length > 0) {
      let total = 0

      movie.votesReceived.forEach((voteObj) => {
        if (voteObj.voterId === (user && user.profile.id)) {
          setUserScore(voteObj.value)
        }
        total = voteObj.value + total
      })

      const avg = Math.floor(total / movie.votesReceived.length)
      setAvgScore(avg)
    } else {
      return
    }
  }

  return (
    <div
      className={styles.container}
      key={`${movie.title}-${movie.rtScore}-${userScore}-${avgScore}`}
    >
      <div className={styles.buttonContainer}>
        {checkIfIsCurrentUser() ? (
          <button onClick={handleShowForm}>
            {isEditing ? "cancel" : "✎ EDIT"}
          </button>
        ) : (
          ""
        )}
        {checkIfIsCurrentUser() ? (
          <button onClick={handleDeleteMovie}>🗑️ DELETE MOVIE</button>
        ) : (
          ""
        )}
      </div>
      {isEditing ? (
        <MovieForm movie={movie} onSubmit={handleSubmit} />
      ) : (
        <div className={styles.rtContainer}>
          <img
            className={styles.imgSpot}
            src="./cinema.png"
            alt={`${movie.title}'s avatar`}
          />
          <h1 className={styles.title}>🎞️ {movie.title}</h1>
          <h2 className={styles.rtScore}>
            🍅 Rotten Tomato Score: {movie.rtScore}
          </h2>
          <h2 className={styles.rpScore}>🥔 Ripe Potato Score: {avgScore}</h2>
        </div>
      )}
      <VoteInput
        defaultValue={userScore}
        movieId={movie.id || null}
        onSubmit={onSubmitVote}
      />
    </div>
  )
}

export default MovieCard
