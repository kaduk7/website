import React from 'react'

const Home = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h1 style={{fontSize:55,fontFamily:'initial'}}>Hizratech Konsultan Servis</h1>
            <h2 style={{fontSize:18,fontFamily:'-moz-initial'}} >
              Hizratech Adalah Konsultan Servis Yang Bergerak Di Bidang IT Dengan 
              Pengalaman Lebih Dari 10 Tahun.
            </h2>
            {/* <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">
                Ayo Mulai
              </a>
              <a
                href="https://youtu.be/o6Biuy8Lr1c"
                className="glightbox btn-watch-video"
              >
                <i className="bi bi-play-circle" />
                <span>Watch Video</span>
              </a>
            </div> */}
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 5"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <img
              src="assets/img/5.png"
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home