import Movies from "./Movies"
import useSearch from "./hooks/useSearch"
import useMovies from "./hooks/useMovies"
import './App.css'
import { useCallback, useState } from "react"
import debounce from "just-debounce-it"

function App() {
  const { search, error,  setSearch} = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const debouncedGetMovies = useCallback(
    debounce(search => getMovies({ search }), 500),
    [getMovies]
  )

  return (
    <>
    <h1>Search movies</h1>
    <form onSubmit={handleSubmit}>
        <input name="search" type="text" placeholder="Harry Potter, Avengers, Spiderman" onChange={handleChange} value={search}/>
        <button type="submit">Search</button>
        <input type="checkbox" name="sort" onChange={handleSort} checked={sort} />
    </form>
    {
      error && <strong style={{color: 'red'}}>{error}</strong>
    }
    <main>
        <Movies movies={movies} />
    </main>
    </>
  )
}

export default App
