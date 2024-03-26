import results from '../mocks/response.json'
import noResults from '../mocks/no-results.json'
import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export default function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = async () => {
    // evitar hacer la misma búsqueda
    if (search === previousSearch.current) return
    // actualizar la búsqueda anterior
    previousSearch.current = search

    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }

  return { movies, getMovies }
}