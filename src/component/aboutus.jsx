
const AboutUs=()=>{
    return(<>
<div>
  <div className="container mb-3">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
        <h2 className="mt-5 display-5" id="contact">About Us</h2>
        <hr className="w-100 mx-auto mb-4" />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-center mb-5">
      {/* Welcome Section */}
      <div className="aboutuscontent  text-center bg-light col-12 col-md-5 px-6">
        <img src="src/images/welcome-removebg-preview.png" alt="Welcome Icon" height="60px" width="60px" className="mt-3 mb-3 pngimage" />
        <h4 className="mb-3"><b>Welcome to Dharma Soft-Tech</b></h4>
        <p className="px-lg-5 px-md-3">
          At Dharma Soft-Tech, we are dedicated to simplifying the world of coding and software development. Our mission is to create innovative solutions that not only make coding easier and more precise but also empower the next generation of developers through practical learning experiences.
        </p>
      </div>
      {/* Vision Section */}
      <div className="aboutuscontent  text-center bg-light col-12 col-md-5 px-6">
        <img src="src/images/our_vision-removebg-preview.png" alt="Our Vision Icon" height="60px" width="60px" className="mt-3 mb-3 pngimage" />
        <h4 className="mb-3"><b>Our Vision</b></h4>
        <p className="px-lg-5 px-md-3">
          At Dharma Soft-tech, our vision is to bridge the gap between complex technology and everyday users. Beyond building innovative software solutions, we aim to cultivate the next generation of tech talent by offering hands-on, practical coding education. Through real-world projects and immersive learning experiences, we empower students to become confident, capable developers who can solve real challenges in the industry.
        </p>
      </div>
    </div>
  </div>
  {/*Our Team Starts Here*/}
  <section className="our-team mb-5 mt-2">
    <div className="container">
      <h2>Our Team</h2>
      <p className="intro-text mx-5">Our team at Dharma Soft-tech is a diverse group of passionate tech enthusiasts, educators, and software engineers, all dedicated to delivering excellence. Here are a few of the key members driving our mission:</p>
      <div className="team-grid">
        {/* Team Member 1 */}
        <div className="team-card">
          <img src="/src/images/image.jpg" alt="Sandeep Kumar Patel" className="team-photo" />
          <div className="team-info">
            <h3>Sandeep Kumar Patel</h3>
            <p><strong>Founder &amp; Lead Developer</strong></p>
            <p>With years of experience in full-stack development, Sandeep specializes in building high-performance, scalable software solutions. His vision for Dharma Soft-tech stems from a passion for both innovation and education, ensuring that the technology we create is not only powerful but accessible.</p>
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="team-card">
          <img src="/src/images/sapnil.JPG" alt="Senior Developer" className="team-photo" />
          <div className="team-info">
            <h3>Swapnil</h3>
            <p><strong>Social Media and Promotion Manager</strong></p>
            <p>Swapnil brings extensive expertise in Marketing and Promotion to the team. They work closely with clients to deliver custom software solutions and mentor students through coding challenges.</p>
          </div>
        </div>
        {/* Team Member 3 */}
        <div className="team-card">
          <img src="/src/images/dharmalogo.png" alt="Educator & Course Developer" className="team-photo" />
          <div className="team-info">
            <h3>[Team Member Name]</h3>
            <p><strong>Designation</strong></p>
            <p>With a background in [subject], [team member] designs the practical coding courses offered by Dharma Soft-tech, ensuring each module is hands-on and aligned with industry needs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Our team Ends Here*/}
  {/*Why Chose us*/}
  <section className="why-choose-us mb-5 mt-3">
    <div className="container">
      <h2>Why Choose Us?</h2>
      <p className="intro-text text-dark">Here's what makes <b>Dharma Soft-tech</b> stand out:</p>
      <div className="features-grid">
        <div className="feature-card">
          <div className="icon">🚀</div>
          <h3>Precision in Software Development</h3>
          <p>We deliver software solutions that are not just functional but optimized for performance, scalability, and user experience. Every detail is crafted with care to ensure seamless results for businesses.</p>
        </div>
        <div className="feature-card">
          <div className="icon">💡</div>
          <h3>Simplicity in Solutions</h3>
          <p>We believe that technology should make life easier. Our software is designed with the end-user in mind, offering intuitive interfaces and simple processes that allow users to achieve their goals with minimal effort.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🛠️</div>
          <h3>Practical Learning Approach</h3>
          <p>Our courses are built around real-world applications, giving students the opportunity to work on live projects and understand how coding translates into practical solutions. We prepare you for the industry’s challenges.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🎓</div>
          <h3>Expert Guidance</h3>
          <p>Our experienced developers and educators ensure that both our clients and students receive top-notch guidance, whether delivering precise software solutions or offering coding mentorship.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🌱</div>
          <h3>Commitment to Growth</h3>
          <p>Whether you are a business looking to leverage technology or a student eager to learn, we are committed to helping you grow. We offer cutting-edge solutions and up-to-date educational content.</p>
        </div>
      </div>
    </div>
  </section>
</div>
</>)
}
export default AboutUs;
