import React from 'react'

const Team = () => {
  return (
    <div>
         <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Team</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src="assets/img/team/team-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <div className="social">
                                        <a href="">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-instagram-fill" />
                                        </a>
                                        {/* <a href="">
                                            {" "}
                                            <i className="ri-linkedin-box-fill" />{" "}
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 mt-4 mt-lg-0"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src="assets/img/team/team-2.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    <p>
                                        Aut maiores voluptates amet et quis praesentium qui senda para
                                    </p>
                                    <div className="social">
                                        <a href="">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-instagram-fill" />
                                        </a>
                                        {/* <a href="">
                                            {" "}
                                            <i className="ri-linkedin-box-fill" />{" "}
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src="assets/img/team/team-3.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div className="social">
                                        <a href="">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-instagram-fill" />
                                        </a>
                                        {/* <a href="">
                                            {" "}
                                            <i className="ri-linkedin-box-fill" />{" "}
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay={400}>
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src="assets/img/team/team-4.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>
                                        Dolorum tempora officiis odit laborum officiis et et accusamus
                                    </p>
                                    <div className="social">
                                        <a href="">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a href="">
                                            <i className="ri-instagram-fill" />
                                        </a>
                                        {/* <a href="">
                                            {" "}
                                            <i className="ri-linkedin-box-fill" />{" "}
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Pricing</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                            <div className="box">
                                <h3>Free Plan</h3>
                                <h4>
                                    <sup>$</sup>0<span>per month</span>
                                </h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-check" /> Quam adipiscing vitae proin
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Nec feugiat nisl pretium
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Nulla at volutpat diam uteera
                                    </li>
                                    <li className="na">
                                        <i className="bx bx-x" />{" "}
                                        <span>Pharetra massa massa ultricies</span>
                                    </li>
                                    <li className="na">
                                        <i className="bx bx-x" />{" "}
                                        <span>Massa ultricies mi quis hendrerit</span>
                                    </li>
                                </ul>
                                <a href="#" className="buy-btn">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mt-4 mt-lg-0"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="box featured">
                                <h3>Business Plan</h3>
                                <h4>
                                    <sup>$</sup>29<span>per month</span>
                                </h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-check" /> Quam adipiscing vitae proin
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Nec feugiat nisl pretium
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Nulla at volutpat diam uteera
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Pharetra massa massa ultricies
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Massa ultricies mi quis hendrerit
                                    </li>
                                </ul>
                                <a href="#" className="buy-btn">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mt-4 mt-lg-0"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="box">
                                <h3>Developer Plan</h3>
                                <h4>
                                    <sup>$</sup>49<span>per month</span>
                                </h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-check" /> Quam adipiscing vitae proin
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Nec feugiat nisl pretium
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Nulla at volutpat diam uteera
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Pharetra massa massa ultricies
                                    </li>
                                    <li>
                                        <i className="bx bx-check" /> Massa ultricies mi quis hendrerit
                                    </li>
                                </ul>
                                <a href="#" className="buy-btn">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id="faq" className="faq section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>FAQ</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                    <div className="faq-list">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay={100}>
                                <i className="bx bx-help-circle icon-help" />{" "}
                                <a
                                    data-bs-toggle="collapse"
                                    className="collapse"
                                    data-bs-target="#faq-list-1"
                                >
                                    Bagaimana cara pengguna menghubungi bagian penjualan?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-1"
                                    className="collapse show"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Pengguna Bisa Menghubungi Admin Kami Dengan Me Whatshap Dengan
                                        Nomor Yang Sudah Ada Di Bagian Bawah Pada Website Ini.
                                    </p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay={200}>
                                <i className="bx bx-help-circle icon-help" />{" "}
                                <a
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-list-2"
                                    className="collapsed"
                                >
                                    Bagaimana cara pengguna menyampaikan masalah terkait pesanan mereka?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-2"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Pengguna Bisa Langsung Berkonsultasi Kepada Admin Dan Admin Akan 
                                        Memberikan Solusi Dari Masalah Apa Yang Anda Punya Jadi Berkonsultasilah
                                        Dengan Admin Kami.
                                    </p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay={300}>
                                <i className="bx bx-help-circle icon-help" />{" "}
                                <a
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-list-3"
                                    className="collapsed"
                                >
                                    Di mana pengguna dapat membeli produk Anda?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-3"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Pengguna Bisa Membeli Produk Dari Kami Dengan Cara Pesan
                                        Melalui Whatshap Atau Bisa Langsung Datang Saja Ke Toko Kami 
                                        Yaitu Di  Jl.Rambutan No 20D Sidomulyo Timur, Marpoyan Damai
                                        Pekanbaru,Riau
                                    </p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay={400}>
                                <i className="bx bx-help-circle icon-help" />{" "}
                                <a
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-list-4"
                                    className="collapsed"
                                >
                                    Apa produk atau layanan yang ditawarkan oleh perusahaan?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-4"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Kami Menyediakan Berbagai Macam Komponen Komputer
                                        Dan Kami juga Mempunyai Aplikasi Untuk Sekolah Yang Akan 
                                        Melakukan Ujian Dan Kami Juga Menerima Jasa Servis Laptop 
                                        Dan Komputer,Dan Kami Juga Menerima Jasa Bikin Program
                                        Untuk Mahasiswa IT
                                    </p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay={500}>
                                <i className="bx bx-help-circle icon-help" />{" "}
                                <a
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-list-5"
                                    className="collapsed"
                                >
                                    Bagaimana saya dapat memberikan
                                    umpan balik atau saran kepada perusahaan?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-5"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Nah Supaya Konsumen Mendapatkan Umpan Balik Dari Kami
                                        Kami Mengerjakan Apa Yang Akan Konsumen Mintak Dengan Sangat
                                        Profesional Dan Sangat Teliti Jadi Konsumen Merasa Mendapatkan 
                                        Umpan Balik Dari Kami Dengan Kinerja Yang Kami Berikan
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Team