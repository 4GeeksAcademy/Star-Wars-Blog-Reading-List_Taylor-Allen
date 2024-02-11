import React, { useState, useEffect } from "react";
import { Search } from "react-bootstrap-icons";
import "../../styles/SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const endpoint = "https://www.swapi.tech/api/people/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        if (data && data.results) {
          const filteredResults = data.results.filter((people) =>
            people.name.toLowerCase().includes(input.toLowerCase())
          );
          setResults(filteredResults);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (input.trim() !== "") {
      fetchData();
    } else {
      setResults([]);
    }
  }, [input, setResults]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="input-wrapper">
      <Search size={25} />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
