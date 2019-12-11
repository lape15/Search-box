import React from 'react';
import {NavLink} from 'react-router-dom';
class Header extends React.Component {
    render(){
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/"><p class="navbar-brand">Movies</p></NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                <NavLink to="/"><p class="nav-link">Services<span class="sr-only">(current)</span></p></NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/"><p class="nav-link" >Contact</p></NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/"><p class="nav-link" >About Us</p></NavLink>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="https://www.google.com" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="https://www.google.com">Action</a>
                    <a class="dropdown-item" href="https://www.google.com">Another action</a>
                    <a class="dropdown-item" href="https://www.google.com">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
            </>
        )
    }
}

export default Header;