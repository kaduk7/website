import React from 'react'

export default function Header() {
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="/"><b>Hizratech</b></a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
              Utama
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Tentang Kami
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Pelayanan
              </a>
            </li>
            <li>
              <a className="nav-link   scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Tim
              </a>
            </li>
            {/* <li className="dropdown">
          <a href="#">
            <span>Drop Down</span> <i className="bi bi-chevron-down" />
          </a>
          <ul>
            <li>
              <a href="#">Drop Down 1</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Deep Drop Down</span>{" "}
                <i className="bi bi-chevron-right" />
              </a>
              <ul>
                <li>
                  <a href="#">Deep Drop Down 1</a>
                </li>
                <li>
                  <a href="#">Deep Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Deep Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Deep Drop Down 4</a>
                </li>
                <li>
                  <a href="#">Deep Drop Down 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Drop Down 2</a>
            </li>
            <li>
              <a href="#">Drop Down 3</a>
            </li>
            <li>
              <a href="#">Drop Down 4</a>
            </li>
          </ul>
        </li> */}
            <li>
              <a className="nav-link scrollto" href="#contact">
                Alamat
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#hero">
                Ayo Mulai
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>

  )
}
