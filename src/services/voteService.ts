// services
import * as tokenService from "./tokenService"

// types
import { Vote } from "../types/models"
import { voteFormData } from "../types/forms"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/votes`

async function castVote(value: voteFormData, movieId: number): Promise<Vote> {
  const body = { value, movieId }
  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  return (await res.json()) as Vote
}

export { castVote }
