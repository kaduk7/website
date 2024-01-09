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
                        <h2>Frequently Asked Questions</h2>
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
                                    Non consectetur a erat nam at lectus urna duis?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-1"
                                    className="collapse show"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                        volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                                        magna fringilla urna porttitor rhoncus dolor purus non.
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
                                    Feugiat scelerisque varius morbi enim nunc?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-2"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant
                                        morbi. Id interdum velit laoreet id donec ultrices. Fringilla
                                        phasellus faucibus scelerisque eleifend donec pretium. Est
                                        pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                                        cursus turpis massa tincidunt dui.
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
                                    Dolor sit amet consectetur adipiscing elit?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-3"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                                        sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                                        nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                                        pellentesque eu tincidunt. Lectus urna duis convallis convallis
                                        tellus. Urna molestie at elementum eu facilisis sed odio morbi
                                        quis
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
                                    Tempus quam pellentesque nec nam aliquam sem et tortor consequat?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-4"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo.
                                        Dignissim suspendisse in est ante in. Nunc vel risus commodo
                                        viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                                        bibendum est. Purus gravida quis blandit turpis cursus in.
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
                                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis
                                    nunc eget lorem dolor?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-5"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                                        vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                                        nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed.
                                        Ut venenatis tellus in metus vulputate eu scelerisque.
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