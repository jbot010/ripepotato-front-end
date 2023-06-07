// services
import * as tokenService from "./tokenService"

// types
import { Movie } from "../types/models"
import { voteFormData } from "../types/forms"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/votes`

async function castVote(movieId: voteFormData): Promise<Movie> {
  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieId),
  })
  return (await res.json()) as Movie
}


export { castVote }