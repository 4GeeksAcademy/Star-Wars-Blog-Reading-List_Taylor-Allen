import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3" fixed="top">
      <Link to={"/"}>
        <img
          src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png"
          height={45}
          width={100}
          className="mx-3"
        />
      </Link>
      <div className="ml-auto button-group d-flex justify-content-between">
        <div>
          <div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                autoComplete="on"
              />
              <button class="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
          <Link to="/demo">
            {/* <button className="btn btn-dark me-3 ">Favorites</button> */}
            <NavDropdown
              title={
                <span style={{ textDecoration: "none", color: "inherit" }}>
                  Favorites
                </span>
              }
              id="basic-nav-dropdown"
              className="text-light me-3"
              role="button"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Link>
        </div>
      </div>
    </nav>
  );
};
