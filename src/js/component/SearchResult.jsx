import React from "react";
import "../../styles/SearchResult.css";
import { Link } from "react-router-dom";

export const SearchResult = ({ result }) => {
  return (
    <div onClick={(e) => <Link to={`/characters/${character.uid}`} />}>
      {result}
    </div>
  );
};
export default SearchResult;
