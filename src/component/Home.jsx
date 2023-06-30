import React from 'react'
import logo from '../assets/images/hero-bg.png';
import client from '../assets/images/client.jpg';
import d1 from '../assets/images/d1.jpg';
import d2 from '../assets/images/d2.jpg';
import d3 from '../assets/images/d3.jpg';
// import favicon from '../assets/images/favicon.png';
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/s3.png';
import s4 from '../assets/images/s4.png';
// import t1 from '../assets/images/t1.jpg';
// import t2 from '../assets/images/t2.jpg';
// import t3 from '../assets/images/t3.jpg';
// import t4 from '../assets/images/t4.jpg';
import about from '../assets/images/about-img.jpg';


const Home = () => {
       return (
              <>
                     <div className="hero_area">
                            <div className="hero_bg_box">
                                   <img src={logo} alt="" />
                            </div>
                            {/* header section strats */}

                            {/* end header section */}
                            {/* slider section */}
                            <section className="slider_section ">
                                   <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                                          <div className="carousel-inner">
                                                 <div className="carousel-item active">
                                                        <div className="container ">
                                                               <div className="row">
                                                                      <div className="col-md-7">
                                                                             <div className="detail-box">
                                                                                    <h1>We Provide Best Healthcare</h1>
                                                                                    <p>
                                                                                           Explicabo esse amet tempora quibusdam laudantium, laborum
                                                                                           eaque magnam fugiat hic? Esse dicta aliquid error
                                                                                           repudiandae earum suscipit fugiat molestias, veniam, vel
                                                                                           architecto veritatis delectus repellat modi impedit sequi😎😎😎😎😎😎.
                                                                                    </p>
                                                                                    <div className="btn-box">
                                                                                           <a href="" className="btn1">
                                                                                                  Read More
                                                                                           </a>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="carousel-item ">
                                                        <div className="container ">
                                                               <div className="row">
                                                                      <div className="col-md-7">
                                                                             <div className="detail-box">
                                                                                    <h1>We Provide Best Healthcare</h1>
                                                                                    <p>
                                                                                           Explicabo esse amet tempora quibusdam laudantium, laborum
                                                                                           eaque magnam fugiat hic? Esse dicta aliquid error
                                                                                           repudiandae earum suscipit fugiat molestias, veniam, vel
                                                                                           architecto veritatis delectus repellat modi impedit sequi.
                                                                                    </p>
                                                                                    <div className="btn-box">
                                                                                           <a href="" className="btn1">
                                                                                                  Read More
                                                                                           </a>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="carousel-item">
                                                        <div className="container ">
                                                               <div className="row">
                                                                      <div className="col-md-7">
                                                                             <div className="detail-box">
                                                                                    <h1>We Provide Best Healthcare</h1>
                                                                                    <p>
                                                                                           Explicabo esse amet tempora quibusdam laudantium, laborum
                                                                                           eaque magnam fugiat hic? Esse dicta aliquid error
                                                                                           repudiandae earum suscipit fugiat molestias, veniam, vel
                                                                                           architecto veritatis delectus repellat modi impedit sequi.
                                                                                    </p>
                                                                                    <div className="btn-box">
                                                                                           <a href="" className="btn1">
                                                                                                  Read More
                                                                                           </a>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <ol className="carousel-indicators">
                                                 <li
                                                        data-target="#customCarousel1"
                                                        data-slide-to={0}
                                                        className="active"
                                                 />
                                                 <li data-target="#customCarousel1" data-slide-to={1} />
                                                 <li data-target="#customCarousel1" data-slide-to={2} />
                                          </ol>
                                   </div>
                            </section>
                            {/* end slider section */}
                     </div>
                     {/* department section */}
                     <section className="department_section layout_padding">
                            <div className="department_container">
                                   <div className="container ">
                                          <div className="heading_container heading_center">
                                                 <h2>Our Departments</h2>
                                                 <p>
                                                        Asperiores sunt consectetur impedit nulla molestiae delectus
                                                        repellat laborum dolores doloremque accusantium
                                                 </p>
                                          </div>
                                          <div className="row">
                                                 <div className="col-md-3">
                                                        <div className="box ">
                                                               <div className="img-box">
                                                                      <img src={s1} alt="" />
                                                               </div>
                                                               <div className="detail-box">
                                                                      <h5>Cardiology</h5>
                                                                      <p>
                                                                             fact that a reader will be distracted by the readable page
                                                                             when looking at its layout.
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                        <div className="box ">
                                                               <div className="img-box">
                                                                      <img src={s2} alt="" />
                                                               </div>
                                                               <div className="detail-box">
                                                                      <h5>Diagnosis</h5>
                                                                      <p>
                                                                             fact that a reader will be distracted by the readable page
                                                                             when looking at its layout.
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                        <div className="box ">
                                                               <div className="img-box">
                                                                      <img src={s3} alt="" />
                                                               </div>
                                                               <div className="detail-box">
                                                                      <h5>Surgery</h5>
                                                                      <p>
                                                                             fact that a reader will be distracted by the readable page
                                                                             when looking at its layout.
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                        <div className="box ">
                                                               <div className="img-box">
                                                                      <img src={s4} alt="" />
                                                               </div>
                                                               <div className="detail-box">
                                                                      <h5>First Aid</h5>
                                                                      <p>
                                                                             fact that a reader will be distracted by the readable page
                                                                             when looking at its layout.
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="btn-box">
                                                 <a href="">View All</a>
                                          </div>
                                   </div>
                            </div>
                     </section>
                     {/* end department section */}
                     {/* about section */}
                     <section className="about_section layout_margin-bottom">
                            <div className="container  ">
                                   <div className="row">
                                          <div className="col-md-6 ">
                                                 <div className="img-box">
                                                        <img src={about} alt="" />
                                                 </div>
                                          </div>
                                          <div className="col-md-6">
                                                 <div className="detail-box">
                                                        <div className="heading_container">
                                                               <h2>
                                                                      About <span>Us</span>
                                                               </h2>
                                                        </div>
                                                        <p>
                                                               There are many variations of passages of Lorem Ipsum available,
                                                               but the majority have suffered alteration in some form, by
                                                               injected humour, or randomised words which don't look even
                                                               slightly believable. If you are going to use a passage of Lorem
                                                               Ipsum, you need to be sure there isn't anything embarrassing
                                                               hidden in the middle of text. All
                                                        </p>
                                                        <a href="">Read More</a>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>
                     {/* end about section */}
                     {/* doctor section */}
                     <section className="doctor_section layout_padding">
                            <div className="container">
                                   <div className="heading_container heading_center">
                                          <h2>Our Doctors</h2>
                                          <p className="col-md-10 mx-auto px-0">
                                                 Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad
                                                 adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad
                                                 voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae
                                                 id quisquam.
                                          </p>
                                   </div>
                                   <div className="row">
                                          <div className="col-sm-6 col-lg-4 mx-auto">
                                                 <div className="box">
                                                        <div className="img-box">
                                                               <img src={d1} alt="" />
                                                        </div>
                                                        <div className="detail-box">
                                                               <div className="social_box">
                                                                      <a href="">
                                                                             <i className="fa fa-facebook" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-twitter" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-youtube" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-linkedin" aria-hidden="true" />
                                                                      </a>
                                                               </div>
                                                               <h5>Elina Josh</h5>
                                                               <h6 className="">Doctor</h6>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="col-sm-6 col-lg-4 mx-auto">
                                                 <div className="box">
                                                        <div className="img-box">
                                                               <img src={d2} alt="" />
                                                        </div>
                                                        <div className="detail-box">
                                                               <div className="social_box">
                                                                      <a href="">
                                                                             <i className="fa fa-facebook" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-twitter" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-youtube" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-linkedin" aria-hidden="true" />
                                                                      </a>
                                                               </div>
                                                               <h5>Adam View</h5>
                                                               <h6 className="">Doctor</h6>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="col-sm-6 col-lg-4 mx-auto">
                                                 <div className="box">
                                                        <div className="img-box">
                                                               <img src={d3} alt="" />
                                                        </div>
                                                        <div className="detail-box">
                                                               <div className="social_box">
                                                                      <a href="">
                                                                             <i className="fa fa-facebook" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-twitter" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-youtube" aria-hidden="true" />
                                                                      </a>
                                                                      <a href="">
                                                                             <i className="fa fa-linkedin" aria-hidden="true" />
                                                                      </a>
                                                               </div>
                                                               <h5>Mia Mike</h5>
                                                               <h6 className="">Doctor</h6>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="btn-box">
                                          <a href="">View All</a>
                                   </div>
                            </div>
                     </section>
                     {/* end doctor section */}
                     {/* contact section */}
                     <section className="contact_section layout_padding">
                            <div className="container">
                                   <div className="heading_container">
                                          <h2>Get In Touch</h2>
                                   </div>
                                   <div className="row">
                                          <div className="col-md-6">
                                                 <div className="form_container contact-form">
                                                        <form action="">
                                                               <div className="form-row">
                                                                      <div className="col-lg-6">
                                                                             <div>
                                                                                    <input type="text" placeholder="Your Name" />
                                                                             </div>
                                                                      </div>
                                                                      <div className="col-lg-6">
                                                                             <div>
                                                                                    <input type="text" placeholder="Phone Number" />
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div>
                                                                      <input type="email" placeholder="Email" />
                                                               </div>
                                                               <div>
                                                                      <input
                                                                             type="text"
                                                                             className="message-box"
                                                                             placeholder="Message"
                                                                      />
                                                               </div>
                                                               <div className="btn_box">
                                                                      <button>SEND</button>
                                                               </div>
                                                        </form>
                                                 </div>
                                          </div>
                                          <div className="col-md-6">
                                                 <div className="map_container">
                                                        <div className="map">
                                                               <div id="googleMap" />
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>
                     {/* end contact section */}
                     {/* client section */}
                     <section className="client_section layout_padding-bottom">
                            <div className="container">
                                   <div className="heading_container heading_center ">
                                          <h2>Testimonial</h2>
                                   </div>
                                   <div
                                          id="carouselExample2Controls"
                                          className="carousel slide"
                                          data-ride="carousel"
                                   >
                                          <div className="carousel-inner">
                                                 <div className="carousel-item active">
                                                        <div className="row">
                                                               <div className="col-md-11 col-lg-10 mx-auto">
                                                                      <div className="box">
                                                                             <div className="img-box">
                                                                                    <img src={client} alt="" />
                                                                             </div>
                                                                             <div className="detail-box">
                                                                                    <div className="name">
                                                                                           <h6>Alan Emerson</h6>
                                                                                    </div>
                                                                                    <p>
                                                                                           Enim consequatur odio assumenda voluptas voluptatibus esse
                                                                                           nobis officia. Magnam, aspernatur nostrum explicabo,
                                                                                           distinctio laudantium delectus deserunt quia quidem magni
                                                                                           corporis earum inventore totam consectetur corrupti!
                                                                                           Corrupti, nihil sunt? Natus.
                                                                                    </p>
                                                                                    <i className="fa fa-quote-left" aria-hidden="true" />
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="carousel-item">
                                                        <div className="row">
                                                               <div className="col-md-11 col-lg-10 mx-auto">
                                                                      <div className="box">
                                                                             <div className="img-box">
                                                                                    <img src={client} alt="" />
                                                                             </div>
                                                                             <div className="detail-box">
                                                                                    <div className="name">
                                                                                           <h6>Alan Emerson</h6>
                                                                                    </div>
                                                                                    <p>
                                                                                           Enim consequatur odio assumenda voluptas voluptatibus esse
                                                                                           nobis officia. Magnam, aspernatur nostrum explicabo,
                                                                                           distinctio laudantium delectus deserunt quia quidem magni
                                                                                           corporis earum inventore totam consectetur corrupti!
                                                                                           Corrupti, nihil sunt? Natus.
                                                                                    </p>
                                                                                    <i className="fa fa-quote-left" aria-hidden="true" />
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="carousel-item">
                                                        <div className="row">
                                                               <div className="col-md-11 col-lg-10 mx-auto">
                                                                      <div className="box">
                                                                             <div className="img-box">
                                                                                    <img src={client} alt="" />
                                                                             </div>
                                                                             <div className="detail-box">
                                                                                    <div className="name">
                                                                                           <h6>Alan Emerson</h6>
                                                                                    </div>
                                                                                    <p>
                                                                                           Enim consequatur odio assumenda voluptas voluptatibus esse
                                                                                           nobis officia. Magnam, aspernatur nostrum explicabo,
                                                                                           distinctio laudantium delectus deserunt quia quidem magni
                                                                                           corporis earum inventore totam consectetur corrupti!
                                                                                           Corrupti, nihil sunt? Natus.
                                                                                    </p>
                                                                                    <i className="fa fa-quote-left" aria-hidden="true" />
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="carousel_btn-container">
                                                 <a
                                                        className="carousel-control-prev"
                                                        href="#carouselExample2Controls"
                                                        role="button"
                                                        data-slide="prev"
                                                 >
                                                        <i className="fa fa-long-arrow-left" aria-hidden="true" />
                                                        <span className="sr-only">Previous</span>
                                                 </a>
                                                 <a
                                                        className="carousel-control-next"
                                                        href="#carouselExample2Controls"
                                                        role="button"
                                                        data-slide="next"
                                                 >
                                                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                                        <span className="sr-only">Next</span>
                                                 </a>
                                          </div>
                                   </div>
                            </div>
                     </section>                     
              </>

       )
}

export default Home