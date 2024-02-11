import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search, XLg } from "react-bootstrap-icons";
import { SearchBar } from "./SearchBar.jsx";
import "../../styles/headers.css";
import { SearchResultsList } from "./SearchResultsList.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [results, setResults] = useState([]);

  return (
    <nav className="navbar fixed-top navbar-light">
      <div className="container">
        <div>
          <Link to={"/"} className="navbar-brand">
            <img
              src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png"
              alt="Bootstrap"
              width="150"
              height="64"
            />
          </Link>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="d-flex justify-content-center pe-2">
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                autoComplete="on"
              />
            </form>
            <button className="btn btn-outline-light" type="submit">
              <Search size={25} />
            </button> */}
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
          </div>

          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favorites.length}
            </button>
            <ul className="dropdown-menu">
              {store.favorites.map((fav, index) => (
                <div key={index} className="favs d-flex justify-content-around">
                  <div>
                    {" "}
                    <li className="dropdown-item">{fav.name}</li>
                  </div>
                  <div>
                    <button
                      onClick={() => actions.handleDelete({ _id: fav._id })}
                      className="btn rounded d-flex justify-content-center"
                    >
                      <XLg size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
