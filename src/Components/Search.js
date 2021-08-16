import React, { useState, useEffect } from "react";
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState("");

  

  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srseach: term
        }
      })
      
    }

    search()
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
