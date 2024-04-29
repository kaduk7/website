import React from 'react'

const Servis = () => {
    return (
        <div>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>PELAYANAN</h2>
                        <p style={{ fontFamily: "initial", fontSize: 20 }}>
                            Kami Melayani Berbagai Permasalahan dalam Dunia IT
                        </p>
                    </div>
                    <div className="row">
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-check-circle" />
                                </div>
                                <h4>
                                    <a href="">Kinerja</a>
                                </h4>
                                <p style={{ fontFamily: "revert", fontSize: 15 }}>
                                    Kami mempunyai kinerja yang sangat Profesional dan
                                    sangat Ahli di bidangnya masing-masing
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-desktop" />
                                </div>
                                <h4>
                                    <a href="">Servis</a>
                                </h4>
                                <p style={{ fontFamily: "revert", fontSize: 15 }}>
                                    Kami disini juga melayani servis komputer
                                    dan laptop dengan kinerja yang sangat baik
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                            data-aos="zoom-in"
                            data-aos-delay={300}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-cart" />
                                </div>
                                <h4>
                                    <a href="">Komponen Komputer</a>
                                </h4>
                                <p style={{ fontFamily: "revert", fontSize: 15 }}>
                                    Disini kami menjual berbagai kebutuhan komponen
                                    komputer seperti Casing PC, Laptop, Keyboard dan lainnya.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                            data-aos="zoom-in"
                            data-aos-delay={400}
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-devices" />
                                </div>
                                <h4>
                                    <a href="">Jasa Pembuatan Program</a>
                                </h4>
                                <p style={{ fontFamily: "revert", fontSize: 15 }}>
                                    Kami disini bukan hanya bisa servis laptop dan menjual komponen
                                    Komputer, Kami disini juga bisa membuat Program Aplikasi untuk mahasiswa
                                    terkhususnya mahasiswa IT
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h3>Belajar dari Keberhasilan dan Kegagalan.</h3>
                            <p>
                                {" "}
                                "Lihat Setiap Pengalaman, Baik Sukses Maupun Gagal, Gunakan Itu Sebagai Pelajaran Untuk Berkembang.
                                Jangan Biarkan Kegagalan Meruntuhkan Semangatmu,
                                Gunakan Sebagai Pelajaran Untuk Lebih Baik Di Masa Depan."
                            </p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            {/* <a className="cta-btn align-middle" href="#">
                                Call To Action
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servis