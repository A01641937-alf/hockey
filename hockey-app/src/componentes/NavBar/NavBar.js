import React from "react";
import img from '../../img/NHL-logo.png'
import home from '../Home/Home'
import combate from '../Tarjeta/Prueba_api'
import cobvideo from '../Video/Video'

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>

function NavBar() {
    return (
      <>
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={img} alt="Bootstrap" width="30" height="24"/>
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item"> <a class="nav-link active" aria-current="page" href={home}>Home</a> </li>
                        <li class="nav-item"> <a class="nav-link" href={combate}>Fight</a> </li>
                        <li class="nav-item"> <a class="nav-link" href={cobvideo}>collection</a> </li>
                    </ul>
                </div>
            </div>
            </nav>
      </>
    );
  }
  
  export default Menu;