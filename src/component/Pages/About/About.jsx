import React from "react";
import { NavLink} from "react-router-dom";
import "./about.css"
const About = () => {
  return (
    <div>
      <div className="dropdown">
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
            <ul>
              <li>
                <NavLink to="/">AD</NavLink>
              </li>
              <li>
                <NavLink to="/">AD</NavLink>
              </li>
              <li>
                <NavLink to="/">AD</NavLink>
              </li>
              <li>
                <NavLink to="/">AD</NavLink>
              </li>
              <li>
                <NavLink to="/">AD</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
            <ul>
              <li>
                <NavLink to="/">cd</NavLink>
              </li>
              <li>
                <NavLink to="/">cd</NavLink>
              </li>
              <li>
                <NavLink to="/">cd</NavLink>
              </li>
              <li>
                <NavLink to="/">cd</NavLink>
              </li>
              <li>
                <NavLink to="/">cd</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
