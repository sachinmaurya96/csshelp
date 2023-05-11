import React from "react";
import { FaCss3 } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Wrapper>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <FaCss3 />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/button">
                    Button
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shadow">
                    Shadow
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/card">
                    Card
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
.navbar-brand{
  color: #fff;
  font-size: 25px
}
nav{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
`

export default Navbar;
