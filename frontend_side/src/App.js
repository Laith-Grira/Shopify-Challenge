import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  function showBanner() {
    const nomineesNumber = nominate.length;
    if (nomineesNumber === 0) {
      return (<div className="banner-success alert alert-primary">
                <p>Let's go! start choosing your nominees.</p>
              </div>
              );
    } else if (nomineesNumber < 5) {
      return (<div className="banner-success alert alert-info">
                <p>Success, you still have {5 - nomineesNumber} nominees available to choose.</p>
              </div>
              );
    } else if (nomineesNumber === 5) {
      return (<div className="banner-success alert alert-success">
                <p>Success, your List of nominations is full!</p>
              </div>
              );
    } else {
      return (<div className="banner-fail alert alert-danger">
                <p>Error, cannot have more then 5 nominations</p>
                <p>You have {nomineesNumber - 5} extra nominees</p>
              </div>
              );
    }
  }

  useEffect( () => {
    axios
    .get('http://www.omdbapi.com/?i=tt3896198&apikey=46cca29a')
    .then(res => {
      let data = [];
      data.push(res.data);
      setOMDBdata(data);
    })
    .catch(err => console.log(err));
  });

  const [OMDBdata, setOMDBdata] = useState([]);

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
    } else if ((val.Title.toLowerCase()).startsWith(searchMovie.toLowerCase())) {
      return val;
    }
    return null;
  }

  function handleDisable(val) {
    let valid = false;
    nominate.forEach((element) => {
      if (element.Title === val.Title) {
        valid = true;
      }
    });
    return valid;
  }

  return (
    <div className="App mt-3">
      <h1>The Shoppies</h1>
      <div className="search-bar mt-5 mb-3">
        <h3>Movie Title</h3>
        <input className="search-text" type="text" placeholder="Search..." onChange={(e) => setSearchMovie(e.target.value)}/>
      </div>
      <div className="serach-results mb-3 pt-3">
        <div className="results">
          <h3 className="mb-3">Results for "{searchMovie}":</h3>
          {
            OMDBdata
              .filter((val) => filterResults(val))
              .map((res) => (
              <ul key={res.imdbID}>
                <li>{res.Title} &#40;{res.Year}&#41; <button className="btn btn-primary" disabled={handleDisable(res)} onClick={() => addNomination(res)}>Nominate</button></li>
              </ul>
            ))
          }
        </div>
        <div className="nominations">
          <h3 className="mb-3">Nominations</h3>
          {
            nominate.map((res) => (
              <ul key={res.imdbID}>
                <li>{res.Title} &#40;{res.Year}&#41; <button className="btn btn-danger" onClick={() => removeNomination(res)}>Remove</button></li>
              </ul>
            ))
          }
        </div>
      </div>
      <div className="banner-msg">
        {showBanner()}
      </div>
    </div>
  );
}

export default App;
