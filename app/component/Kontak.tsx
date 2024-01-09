import React from 'react'

const Kontak = () => {
  return (
    <div>
        <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Alamat</h2>
                        <p>
                            Hizratech Berada di Kota Pekanbaru yang Berada di Wilayah Pulau Sumatera.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>Jl. Rambutan, Sidomulyo Tim., Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28289</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>www.hizratech.co.id</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>082283048013</p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.682399821131!2d101.42424137435262!3d0.4729386637681186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9c1a514ca09%3A0x34397a4cb24839e8!2sPT%20Hizra%20Teknologi%20Konsultan%20Services!5e0!3m2!1sid!2sid!4v1704766144304!5m2!1sid!2sid"
                                    frameBorder={0}
                                    style={{ border: 0, width: "100%", height: 290 }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form
                                action="forms/contact.php"
                                method="post"
                                role="form"
                                className="php-email-form"
                            >
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Nama Anda</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Email Anda</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subjek</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Pesan</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={10}
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">
                                        Pesan Anda Sudah Terkirim. TerimaKasih!
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Kirim Pesan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Kontak