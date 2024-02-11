import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import "../../styles/SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const endpoint = "https://www.swapi.tech/api/people/";
  const fetchData = (value) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((people) => {
          return (
            value &&
            people &&
            people.name &&
            people.name.LowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <Search size={25} />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
