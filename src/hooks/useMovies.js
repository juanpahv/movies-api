import results from '../mocks/response.json'
import noResults from '../mocks/no-results.json'
import { useRef, useState, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export default function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    // evitar hacer la misma búsqueda
    if (search === previousSearch.current) return
    // actualizar la búsqueda anterior
    previousSearch.current = search

    const newMovies = await searchMovies({ search })

    setMovies(newMovies)
  }, [])

  const getSortedMovies = useCallback(() => {
    const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    return sortedMovies
  }, [sort, movies])

  return { movies: getSortedMovies(movies), getMovies }
}