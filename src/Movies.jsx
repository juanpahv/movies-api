function listOfMovies({movies}) {
  return(
    <ul className="movies">
      {
        movies.map((movie) => (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  ) 
}

function noMoviesFound() {
  return <p><strong>No movies found</strong></p>;
}

function Movies({movies}) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies ? listOfMovies({movies}) : noMoviesFound()
  )
}

export default Movies