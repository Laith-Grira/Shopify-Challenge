import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/BannerPage/Banner';

function App() {

  // Data recieved from the OMDB website
  const [OMDBdata, setOMDBdata] = useState([]);

  // Search input that the user inserts in the search bar
  const [searchMovie, setSearchMovie] = useState("");

  // Nominations List of the user's selection
  const [nominate, setNominate] = useState([]);

  // Get the data from OMDB website throw an API key
  useEffect( () => {
    axios
    .get('https://www.omdbapi.com/?i=tt3896198&apikey=46cca29a')
    .then(res => {
      let data = [];
      data.push(res.data);
      setOMDBdata(data);
    })
    .catch(err => console.log(err));
  });

  // Save the user's Nominations List on refrech 
  // and after quitting the website
  useEffect(() => {
    const saved = window.localStorage.getItem("savedNomineeList");
    setNominate(JSON.parse(saved));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("savedNomineeList", JSON.stringify(nominate));
  });

  return (
    <div className="App mt-3">
      <h1>The Shoppies</h1>
      <div className="search-bar mt-5 mb-3">

        {/* Search bar input for searching the movies */}
        <h3>Movie Title</h3>
        <input  
          className="search-text" 
          type="text" 
          placeholder="Search..." 
          onChange={(e) => setSearchMovie(e.target.value)}/>
      </div>

      <div className="serach-results mb-3 pt-3">

        {/* Display the search results of the user */}
        <div className="results">
          <h3 className="mb-3">Results for "{searchMovie}":</h3>
          {
            OMDBdata
              .filter((val) => filterResults(val))
              .map((res) => (
              <ul key={res.imdbID}>
                <li>{res.Title} &#40;{res.Year}&#41; 
                    <button 
                      className="btn btn-primary" 
                      disabled={handleDisable(res)} 
                      onClick={() => addNomination(res)}
                      >Nominate
                    </button>
                </li>
              </ul>
            ))
          }
        </div>

        {/* Display the nominations list of the user */}
        <div className="nominations">
          <h3 className="mb-3">Nominations</h3>
          {
            nominate.map((res) => (
              <ul key={res.imdbID}>
                <li>{res.Title} &#40;{res.Year}&#41;
                    <button 
                      className="btn btn-danger" 
                      onClick={() => removeNomination(res)}
                      >Remove
                    </button>
                </li>
              </ul>
            ))
          }
        </div>
      </div>

      {/* Banner component for showing messages to the users */}
      <Banner count={nominate.length} />

    </div>
  );

  
  /* 
    Helper method
    Adds a nominated movie after the user's click
    @param event : the movie that the user chooses
    @return void
  */
  function addNomination(event) {
    let newNominate = [];
    Object.assign(newNominate, nominate);
    newNominate.push(event);
    setNominate(newNominate);
  }

  /* 
    Helper method
    Removie a nominated movie from the Nominations List
    after the user's click
    @param event : the movie that the user removes
    @return void
  */
  function removeNomination(event) {
    let newNominate = [];
    nominate.forEach((element) => {
      if (element !== event) {
        newNominate.push(element);
      }
    });
    setNominate(newNominate);
  }

  /* 
    Helper method
    Filter the results to match starting caraters
    of the search bar
    @param movie : the movie selected in the array
    @return value that matches the search
  */
  function filterResults(movie) {
    if (searchMovie === "") {
      return null;
    } else if ((movie.Title.toLowerCase()).startsWith(searchMovie.toLowerCase())) {
      return movie;
    }
    return null;
  }

  /* 
    Helper method
    Disable the Nominate button after clicking
    or enable it back after removing from the list
    @param movie : the movie that the user selected
    @return true if the movie already presented in 
    the nominations list
  */
  function handleDisable(movie) {
    let valid = false;
    nominate.forEach((element) => {
      if (element.Title === movie.Title) {
        valid = true;
      }
    });
    return valid;
  }
}

export default App;
