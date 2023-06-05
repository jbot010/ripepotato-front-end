// services
import * as tokenService from './tokenService'

// types
import { Movie } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/movies`

async function getAllMovies(): Promise<Movie[]> {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json() as Movie[]
}


export { getAllMovies, }