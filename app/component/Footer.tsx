import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
  <div className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h4>Join Our Newsletter</h4>
          <p>
          HIZRATECH menyediakan beragam kapabilitas Pengembangan Perangkat Lunak terhitung Microsoft, Mobile, Web, Java, dll.
          </p>
          <form action="" method="post">
            <input type="email" name="email" />
            <input type="submit" defaultValue="Subscribe" />
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
            Jl. Rambutan, No. 20D, Sidomulyo Timur, Kecamatan Marpoyan Damai, Pekanbaru <br />
            <br />
            Indonesia <br />
            <br />
            <strong>Phone:</strong> +1 5589 55488 55
            <br />
            <strong>Email:</strong> info@example.com
            <br />
          </p>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">Home</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">About us</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">Services</a>
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
          <h4>Our Services</h4>
          <ul>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Web Development</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Product Management</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Social Networks</h4>
          <p>
            Silahkan Kunjungi Sosial Media Kami
          </p>
          <div className="social-links mt-3">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin" />
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
        <span>HizraTech</span>
      </strong>
      . All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
      Designed by <a href="https://bootstrapmade.com/">HizraTech</a>
    </div>
  </div>
</footer>

  )
}

export default Footer