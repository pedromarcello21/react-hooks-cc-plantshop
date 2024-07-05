import React, { useState } from "react";

function Search({handleChange, filtered}) {

  // const [filterPlants, setFilterPlants] = useState(plants)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        >
      </input>
    </div>
  );
}

export default Search;

