import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@mui/material";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../App.css"

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top Poppins-font">
        <div className="container-fluid">
        <div className="brand-detail">

          <a class="navbar-brand" href="/">
            <img
              src={require("../../Assests/GLA_University_logo.png")}
              alt="Logo"
              width="44"
              height="44"
              class="d-inline-block align-text-top"
            />
          </a>
          <a class="navbar-brand brand-name" href="/">Event</a>
            </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Event
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Ticket
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
             
            </ul>
           
            <Button variant="contained" endIcon={<LoginIcon />}>
            Log In
            </Button>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
