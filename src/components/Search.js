import React, { useState, useEffect } from "react";
import './Search.css';

function App() {
  const url = "https://minitwitterbackend.herokuapp.com/";

  const [filterByMatch, setFilterByMatch] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);

  const searchHandler = (e) => {
    let myResults = [];
    e.preventDefault();
    const items = filterByMatch
      .filter((item) => item.text.includes(userInput))
      .map((i) => {
        myResults.push(i);
        console.log(myResults);
        // return <div>Test weil ich nicht weiß was wir kriegen</div>;
      });

    console.log("all items found", results);
    setResults(myResults);
  };

  useEffect(() => {
    fetch(`${url}messages/`)
      .then((res) => res.json())
      .then((data) => setFilterByMatch(data));
  }, []);

  console.log("Results", results);
  // console.log("items", items);

  return (
    <>
      <form onSubmit={searchHandler}>
        <input
          onChange={(e) => setUserInput(e.target.value)}
          className="searchbar"
          type="search"
          placeholer="Search..."
        />
      </form>
        {results.map((result, index) => {
          return <li key={index}>{result.text.substr(0, 40) + '...'}</li>
        })}
    </>
  );
}

export default App;