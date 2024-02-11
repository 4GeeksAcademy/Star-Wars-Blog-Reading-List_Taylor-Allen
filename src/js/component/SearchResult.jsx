import React from "react";
import "../../styles/SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => <Link to={`/characters/${character.uid}`} />}
    >
      {result}
    </div>
  );
};
export default SearchResult;
