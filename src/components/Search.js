//import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";

function Search() {
  const url = "https://minitwitterbackend.herokuapp.com/";

  // const [filterByDate, setFilterByDate] = useState(false);
  // const [filterByUser, setFilterByUser] = useState(false);
  const [filterByMatch, setFilterByMatch] = useState(false);

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);


    useEffect(() => {
      fetch(`messages/${e.target.value}`)
        .then((res) => res.json())
        .then((data) => setFilterByMatch(data));
    }, []);

  };

  return (
    <>
      <form onSubmit={searchHandler}>
        <input className={searchbar} type="search" placeholer="Search..." />
      </form>
    </>
  );
}

//export default Search;
