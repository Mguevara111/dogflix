import { useState } from 'react'
import './App.css'
import { Main } from './assets/components/main';
import { movies } from './assets/base/movies';

function App() {
  const [moviesbase,setMoviesbase]=useState(movies);

  return (
    <>
      {/* <h1>dogflix</h1>
      {moviesbase.map(movie=>
        <>
        <figure>
          <h2>{movie.title}</h2>
          <img src={movie.image} alt={movie.title} />
          <figcaption>{movie.synopsis}</figcaption>
        </figure>
        <div>
          <iframe width="560" height="315" src={movie.framever} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
        </div>
        </>
      )} */}
      <Main></Main>
    </>
  )
}

export default App
