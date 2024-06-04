import React, { useEffect } from 'react';
import '../css/new.css';
import logo from '../img/logo.webp';
import { Helmet } from 'react-helmet';

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="stylesheet" href="new.css" />
        <title>Chizzmoza</title>
      </Helmet>
      <header>
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#popular">Popular</a></li>
              <li><a href="#recently">Recently</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <div className="login-signup">
            <a href="#login">Login</a> or <a href="#signup">Signup</a>
          </div>
          <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
