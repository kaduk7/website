import React from 'react'

const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                Mewujudkan sistem digital anda bersama kami PT hydratex konsultan
                                Service menyediakan beragam ke fabilitas pengembangan perangkat lunak.
                            </p>
                            <ul>
                                <li>
                                    <i className="ri-check-double-line" /> Microsoft
                                </li>
                                <li>
                                    <i className="ri-check-double-line" /> Mobile
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />Web
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />Java
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Bekerjasama dengan berbagai instansi dan khalayak umum
                                dan menjadi salah satu partner dalam menelpon kebutuhan sistem digital yang diperlukan seperti sistem manajemen kasir sistem keuangan aplikasi Adsense digital.
                            </p>
                            <a href="#" className="btn-learn-more">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div className="content">
                                <h3>
                                    Eum ipsam laborum deleniti{" "}
                                    <strong>velit pariatur architecto aut nihil</strong>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                                    aute irure dolor in reprehenderit
                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            className="collapse"
                                            data-bs-target="#accordion-list-1"
                                        >
                                            <span>01</span> Apa Sih Hizratech Itu? <i className="bx bx-chevron-down icon-show" />
                                            <i className="bx bx-chevron-up icon-close" />
                                        </a>
                                        <div
                                            id="accordion-list-1"
                                            className="collapse show"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                Hizratech Adalah Konsultan IT Yang Bergerak Dalam Bidang Aplikasi 
                                                Dan Servis Dengan Pengalaman Lebih Dari 10 Tahun.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-list-2"
                                            className="collapsed"
                                        >
                                            <span>02</span> Apakah Hizratech Sudah Pernah Membuat Aplikasi?{" "}
                                            <i className="bx bx-chevron-down icon-show" />
                                            <i className="bx bx-chevron-up icon-close" />
                                        </a>
                                        <div
                                            id="accordion-list-2"
                                            className="collapse"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                Sudah,Jadi Hizratech Sudah Pernah Membuat Aplikasi yang Bernama I-Cerdas,
                                                Jadi I-Cerdas Ini Adalah Sebuah Aplikasi Untuk Ujian Para Siswa Mulai Dari
                                                SD Sampai SMA Yang Teruji Di Berbagai Sekolah Yang Ada di Pekanbaru.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-list-3"
                                            className="collapsed"
                                        >
                                            <span>03</span> Bagaimana Kinerja Dari Hizratech?{" "}
                                            <i className="bx bx-chevron-down icon-show" />
                                            <i className="bx bx-chevron-up icon-close" />
                                        </a>
                                        <div
                                            id="accordion-list-3"
                                            className="collapse"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                Jadi Kinerja Kami Sudah Tidak Diragukan Lagi Dengan
                                                Pengalaman Lebih Dari 10 Tahun Kami Sudah Jelas Mempunyai 
                                                Kinerja Yang Sangat Baik Dan Kami juga Mempunyai Tim Yang Ahli Dalam 
                                                Keahliannya Masing-Masing
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                            style={{ backgroundImage: 'url("assets/img/why-us.png")' }}
                            data-aos="zoom-in"
                            data-aos-delay={150}
                        >
                            &nbsp;
                        </div>
                    </div>
                </div>
            </section>
            {/* End Why Us Section */}
            {/* ======= Skills Section ======= */}
            <section id="skills" className="skills">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div
                            className="col-lg-6 d-flex align-items-center"
                            data-aos="fade-right"
                            data-aos-delay={100}
                        >
                            <img src="assets/img/skills.png" className="img-fluid" alt="" />
                        </div>
                        <div
                            className="col-lg-6 pt-4 pt-lg-0 content"
                            data-aos="fade-left"
                            data-aos-delay={100}
                        >
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                            <p className="fst-italic">
                                Kami Disini Bukan Hanya Di Bidang IT Kami Menyediakan Layanan
                                Service Laptop Dan Kami Juga Mengadakan Podcast Dan Mengundang Orang Hebat.
                            </p>
                            <div className="skills-content">
                                <div className="progress">
                                    <span className="skill">
                                        SERVICE <i className="val">90%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={90}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        APLIKASI <i className="val">95%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={95}
                                            aria-valuemin={0}
                                            aria-valuemax={95}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        WEBSITE <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        Podcast <i className="val">85%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={85}
                                            aria-valuemin={0}
                                            aria-valuemax={85}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About