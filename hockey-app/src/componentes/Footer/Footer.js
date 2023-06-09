import React from "react";
import img from '../../img/NHL-Logo.png'
import home from '../Home/Home'
import combate from '../Tarjeta/Prueba_api'

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>


function Footer() {
    return (
        <>
            <footer class="text-center text-lg-start bg-ligth text-dark">

                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div class="me-5 d-none d-lg-block">
                    <span>Connected with us: </span>
                    </div>

                    <div>
                        <a href="#" class="me-4 text-reset"> <i class="fab fa-facebook-f"></i> </a>
                        <a href="#" class="me-4 text-reset"> <i class="fab fa-twitter"></i> </a>
                        <a href="#" class="me-4 text-reset"> <i class="fab fa-instagram"></i> </a>
                        <a href="https://github.com/A01641937-alf/hockey" class="me-4 text-reset">
                            <i class="fab fa-github"></i> </a>
                    </div>
                
                </section>


                <section class="">
                    <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                    
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4"> <i class="fas fa-gem me-3"></i>Hockey fight </h6>
                            <p>
                            Unleash Your Passion for Hockey: Embark on a Journey through 
                            the Pinnacle of On-Ice Fisticuffs, Where Courage Collides and Legends Are Forged
                            </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">content </h6>
                            <p> <a href={home} class="text-reset">Home</a> </p>
                            <p> <a href={combate} class="text-reset">Peleas</a> </p>
                        </div>

                    </div>
                    </div>

                </section>

                <div class="text-center p-4">
                    <img src={img} alt="Bootstrap" width="30" height="24"/>
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://github.com/A01641937-alf/hockey">GitHub-hockey</a>
                </div>

            </footer>
        </> 
    );
  }
  
  export default Footer;
