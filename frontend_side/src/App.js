import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <div className="search-bar">
        <label htmlFor="search">Movie Title</label>
        <br />
        <input type="text" placeholder="Type Movie Name Here"/>
      </div>
      <div className="serach-results">
        <div className="results">
          <h3>Results for</h3>
          <ul>
            <li>result 1 <button>Nominate</button></li>
            <li>result 2</li>
            <li>result 3</li>
          </ul>
        </div>
        <div className="nominations">
          <h3>Nominations</h3>
          <ul>
            <li>nomination 1 <button>Remove</button></li>
            <li>nomination 2</li>
            <li>nomination 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
