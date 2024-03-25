import { useEffect, useRef, useState } from "react"
import Movies from "./Movies"
import { useMovies } from "./hooks/useMovies"
import './App.css'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      console.log(search);
      return
    }

    if (search === '') {
      setError('Search term is required')
      return
    }

    if (search.length < 3) {
      setError('Search term is too short')
      return
    }

    setError(null)
  }, [search])

  return { search, error, handleChange }

}

function App() {
  const { movies } = useMovies()
  const { search, error, handleChange } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()    
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Search a movie</label>
        <input name="search" type="text" placeholder="Harry Potter, Avengers, Spiderman" onChange={handleChange} value={search}/>
        <button type="submit" >Search</button>
        {
        error && <strong style={{color: 'red'}}>{error}</strong>
        }
      </form>
      <section id="movies">
        <Movies movies={movies} />
      </section>
    </main>
  )
}

export default App
