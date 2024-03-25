function listOfMovies({movies}) {
  return(
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.id}>
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
  return <p>No movies found</p>;
}

function Movies({movies}) {
  const hasMovies = movies.length > 0
  return (
    <>
    {hasMovies ? listOfMovies({movies}) : noMoviesFound()}
    </>
  )
}

export default Movies