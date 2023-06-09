// services
import * as tokenService from "./tokenService"

// types
import { Movie } from "../types/models"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/votes`

async function castVote(value: number, movieId: number): Promise<Movie> {
  const body = { value, movieId }
  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  return (await res.json()) as Movie
}

export { castVote }
