// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import NewMovie from './pages/NewMovies/NewMovies'
import Movies from './pages/Movies/Movies'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as movieService from './services/movieService'

// styles
import './App.css'

// types
import { User, Profile, Movie } from './types/models'
import { movieFormData } from './types/forms'

function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(authService.getUser())
  const navigate = useNavigate()

  const [profiles, setProfiles] = useState<Profile[]>([])
  
  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchProfiles() : setProfiles([])
  }, [user])

  const [movies, setMovies] = useState<Movie[]>([])

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
      // navigate('/new')
    } catch (error) {
      console.log(error)      
    }
  }


  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles 
                profiles={profiles}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/new'
          element={
            <ProtectedRoute user={user}>
              <NewMovie
                handleAddMovie={handleAddMovie}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute user={user}>
              <Movies
                movies={movies}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
