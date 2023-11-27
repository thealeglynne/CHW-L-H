import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../style/searckbar2.css"


function SearchBar2() {
  return (
    <div className="search-bar2">
      <input
        type="text2"
        placeholder="I'm looking for..."
        className="search-input2"
      />
      <button className="search-button2">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default SearchBar2;
