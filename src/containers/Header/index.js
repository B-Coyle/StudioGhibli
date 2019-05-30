import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
        <section>
        <header>
          <section className="header-title">
            <h1 className="h1">
              Studio Ghibli
            </h1>
          </section>
        <nav>
          <div id='menuToggle'> 
            <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>   
            <ul id='menu'>
            <h4 className='user-name'>StudioGhibli Routes</h4>
              <Link to='/MovieContainer'>
                <li>Home</li>
              </Link>
                <hr></hr>
              <Link to='MovieContainer/favorites'>
                <li>Favorites</li>
              </Link>
                <hr></hr>
              <Link to=''>
                <li>About</li>
              </Link>
                <hr></hr>
              <Link to='/Login'>
                <li>Sign Out</li>
              </Link>
                <hr></hr>
            </ul>
          </div>
        </nav>
        </header>
      </section>
    );
  }
}
