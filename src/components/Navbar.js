import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {actionCreators} from '../states/index'

const Navbar = () => {
    const Theme = useSelector(state => state.Mode)
    const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>

            <button className="btn btn-outline-success" type="submit" onClick={()=>
            {
                Theme === 'white'?dispatch(actionCreators.DarkMode('dark')):dispatch(actionCreators.LightMode('light'));
            }}>
              {Theme}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar