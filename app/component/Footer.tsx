import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
  <div className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h4>Bergabunglah Dengan Kami</h4>
          <p>
          HIZRATECH menyediakan beragam kapabilitas Pengembangan Perangkat Lunak terhitung Microsoft, Mobile, Web, Java, dll.
          </p>
          <form action="" method="post">
            <input type="email" name="email" />
            <input type="submit" defaultValue="Langganan" />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 footer-contact">
          <h3>HIZRATECH</h3>
          <p>
            Jl. Rambutan, No. 20D, Sidomulyo Timur, Marpoyan Damai, Pekanbaru, Riau 28289 <br />
            <br />
            Indonesia <br />
            <br />
            <strong>Phone:</strong> 082283048013
            <br />
            <strong>Website:</strong> www.hizratech.com
            <br />
          </p>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Link Tautan</h4>
          <ul>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#hero">Utama</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#about">Tentang Kami</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#services">Pelayanan</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Terms of service</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Layanan Kami</h4>
          <ul>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Pembuatan Program Mahasiswa IT</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Aplikasi Ujian Sekolah</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">Servis Laptop Dan Komputer</a>
            </li>
            {/* <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Graphic Design</a>
            </li> */}
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Sosial Media Kami</h4>
          <p>
            Silahkan Kunjungi Sosial Media Kami
          </p>
          <div className="social-links mt-3">
            {/* <a href="#" className="twitter">
              <i className="bx bxl-twitter" />
            </a> */}
            <a href="https://www.instagram.com/hizratech_konsultan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="https://www.youtube.com/@hizraofficial" className="youtube">
              <i className="bx bxl-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container footer-bottom clearfix">
    <div className="copyright">
      © Copyright{" "}
      <strong>
        <span>Hizratech</span>
      </strong>
      . All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
      Designed by <a href="https://bootstrapmade.com/">Hizratech</a>
    </div>
  </div>
</footer>

  )
}

export default Footer