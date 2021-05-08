import { useState } from 'react';
import './App.css';

function App() {

  const [searchMovie, setSearchMovie] = useState("");

  const [nominate, setNominate] = useState([]);

  function addNomination(event) {
    let newNominate = [];
    Object.assign(newNominate, nominate);
    newNominate.push(event);
    setNominate(newNominate);
  }

  function removeNomination(event) {
    let newNominate = [];
    nominate.forEach((element) => {
      if (element !== event) {
        newNominate.push(element);
      }
    });
    setNominate(newNominate);
  }

  function filterResults(val) {
    if (searchMovie === "") {
      return null;
    } else if ((val.movie.toLowerCase()).startsWith(searchMovie.toLowerCase())) {
      return val;
    }
    return null;
  }

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
              .filter((val) => filterResults(val))
              .map((res) => (
              <ul>
                <li>{res.movie} <button onClick={() => addNomination(res)}>Nominate</button></li>
              </ul>
            ))
          }
        </div>
        <div className="nominations">
          <h3>Nominations</h3>
          {
            nominate.map((res) => (
              <ul>
                <li>{res.movie} <button onClick={() => removeNomination(res)}>Remove</button></li>
              </ul>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
