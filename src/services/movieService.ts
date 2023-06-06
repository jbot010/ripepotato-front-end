// services
import * as tokenService from './tokenService'

// types
import { Movie } from '../types/models'
import { movieFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/movies`

async function getAllMovies(): Promise<Movie[]> {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json() as Movie[]
}

async function create(formData: movieFormData): Promise<Movie> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  return await res.json() as Movie
}

async function update(formData: movieFormData): Promise<Movie | void> {
  const res = await fetch(`${BASE_URL}/${formData.id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const resData = res.json() as unknown
  if (Array.isArray(resData)) {
    return await resData[1][0] as Movie
  }
}

async function deleteMovie(movieId: number): Promise<void> {
  await fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
}


export { getAllMovies, create, update, deleteMovie }