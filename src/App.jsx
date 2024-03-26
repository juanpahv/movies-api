import Movies from "./Movies"
import useSearch from "./hooks/useSearch"
import useMovies from "./hooks/useMovies"
import './App.css'

function App() {
  const { search, error,  setSearch} = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <>
    <h1>Search movies</h1>
    <form onSubmit={handleSubmit}>
        <input name="search" type="text" placeholder="Harry Potter, Avengers, Spiderman" onChange={handleChange} value={search}/>
        <button type="submit">Search</button>
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
