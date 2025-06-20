
const Contactus=()=>{
    return(<>
<div>
  <div className="contactus form-controls">
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mt-5 display-5 text-center" id="contact">Contact</h2>
            <p className="text-secondary text-center">The best way to contact us is to use our contact form below. Please fill out all of the required fields and we will get back to you as soon as possible.</p>
            <hr className="w-50 mx-auto mb-xl-9 " />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <div className="bg-white shadow-sm overflow-hidden" style={{border: '1px solid blue', borderRadius: 10, boxSizing: 'border-box'}}>
              <form action="#!">
                <div className="row gy-4 gy-xl-5 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="fullname" name="fullname" required onsubmit="validatename();" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <input type="tel" className="form-control" id="phone" name="phone" />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                    <textarea className="form-control" id="message" name="message" rows={3} required defaultValue={""} />
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="sociallinks bg-light">
    <a href><i className="fa-brands fa-square-facebook fs-1 m-4" /></a>
    <a href><i className="fa-brands fa-square-instagram fs-1 m-4" /></a>
    <a href><i className="fa-brands fa-square-youtube fs-1 m-4 " /></a>
  </div>
  <hr />
  {/*Accordian Starts Here*/}
  <div className="container my-5">
    <h4 className="text-center mb-4">Dharma Soft-Tech - Frequently Asked Questions</h4>
    <div className="accordion" id="faqAccordion">
      {/* Question 1 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What services does Dharma Soft-Tech provide?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Dharma Soft-Tech focuses on building precise and easy-to-use software solutions. Additionally, we offer coding education with a practical approach, teaching students various coding concepts and preparing them for real-world development challenges.
          </div>
        </div>
      </div>
      {/* Question 2 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            What technologies do you specialize in?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            At Dharma Soft-Tech, we specialize in full-stack web development, with a focus on Java, JavaScript, HTML, CSS, and frameworks like Spring Boot, React, and Angular. Our expertise extends to building responsive and scalable applications.
          </div>
        </div>
      </div>
      {/* Question 3 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            How can Dharma Soft-Tech help students learn coding?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            We offer hands-on training and real-world coding projects, ensuring that students gain practical experience. Our mentors guide them through various technologies, helping them develop a strong foundation in full-stack development and other coding skills.
          </div>
        </div>
      </div>
      {/* Question 4 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Do you provide internship opportunities for students?
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Yes, Dharma Soft-Tech offers internship programs where students can work on live projects, gaining industry-relevant skills and improving their problem-solving abilities. These internships prepare students for professional development roles.
          </div>
        </div>
      </div>
      {/* Question 5 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            What makes your coding approach unique?
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Our approach focuses on simplifying complex coding concepts, allowing students to grasp them easily through real-world examples and projects. We emphasize practical knowledge and provide personalized mentorship to help each student excel.
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Accordian Ends Here*/}
  <hr />
  <div className="row p-3">
    <div className="divider-dark  align-items-center my-4 mb-5">
      <center> <h3> <b> Join Us on YouTube</b></h3></center>
    </div>
    <div className="col-6">
      <div className="ytvideos bg-light p-1">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/raTxsLpmx1M?si=XwYwPylI1dNF69vd" title="YouTube video player" allowFullScreen />
            </div>
            <div className="carousel-item">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/xeMaXN7pedk?si=RXzbchLwFHIFN5zk" title="YouTube video player" allowFullScreen />
            </div>
            <div className="carousel-item">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/j1KEBGPgLxE?si=RAb16fPVKJqNnwpN" title="YouTube video player" allowFullScreen />
            </div>
            <div className="carousel-item">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/Gk1q6MYikno?si=ebwZMunD3wLN4RPW" title="YouTube video player" allowFullScreen />
            </div>
            <div className="carousel-item">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/BihskBNA3Q4?si=lj_kdzgQz8utGRYB" title="YouTube video player" allowFullScreen />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="ytvideos bg-light p-1">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/raTxsLpmx1M?si=XwYwPylI1dNF69vd" title="YouTube video player" allowFullScreen />
            </div>
            <div className="carousel-item">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/xeMaXN7pedk?si=RXzbchLwFHIFN5zk" title="YouTube video player" allowFullScreen />
            </div>
            <div className="carousel-item">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/j1KEBGPgLxE?si=RAb16fPVKJqNnwpN" title="YouTube video player" allowFullScreen />
            </div>
            <div className="carousel-item">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/Gk1q6MYikno?si=ebwZMunD3wLN4RPW" title="YouTube video player" allowFullScreen />
            </div>
            <div className="carousel-item">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/BihskBNA3Q4?si=lj_kdzgQz8utGRYB" title="YouTube video player" allowFullScreen />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</>
)
}

export default Contactus;