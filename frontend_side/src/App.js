import { useState } from 'react';
import './App.css';

function App() {

  const [searchMovie, setSearchMovie] = useState("");

  const data = [
    {
      movie: 'Star wars',
      date: 1978,
    },
    {
      movie: 'Fast and Furious',
      date: 2001,
    },
    {
      movie: 'End Game',
      date: 2019,
    },
    {
      movie: 'Click',
      date: 2006,
    },
  ];

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <div className="search-bar">
        <label htmlFor="search">Movie Title</label>
        <br />
        <input type="text" placeholder="Type Movie Name Here" onChange={(e) => setSearchMovie(e.target.value)}/>
      </div>
      <div className="serach-results">
        <div className="results">
          <h3>Results for "{searchMovie}"</h3>
          {
            data
              .filter((val) => {
                if (searchMovie === "") {
                  return null;
                } else if ((val.movie.toLowerCase()).startsWith(searchMovie.toLowerCase())) {
                  return val;
                }
              })
              .map((res) => (
              <ul>
            <li>{res.movie} <button>Nominate</button></li>
          </ul>
            ))
          }
        </div>
        <div className="nominations">
          <h3>Nominations</h3>
          {
            data.map((res) => (
              <ul>
            <li>{res.movie} <button>Remove</button></li>
          </ul>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
