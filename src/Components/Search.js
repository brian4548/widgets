import React, { useState, useEffect } from "react";
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState("");

  

  useEffect(() => {
    
  }, [term])

  const handleChange = (event) => {
    setTerm(event.target.value);
  };


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={handleChange}
            className="input"
            type="text"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
