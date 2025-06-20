import React, { useState } from 'react';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [modalImage, setModalImage] = useState(""); // Store the image to show in the modal

  // Function to open the modal with a specific image
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Hide the modal
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
            <h5 className="mt-4 display-5" id="contact">Image Gallery</h5>
            <hr className="w-100 mx-auto mb-4" />
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <section className="gallery">
        <div className="gallery-item" onClick={() => openModal("/src/images/dharmaimg1.jpg")}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/src/images/dharmaimg1.jpg" alt="Project 1" />
              </div>
              <div className="flip-card-back">
                <p>Project 1 Description</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-item" onClick={() => openModal("/src/images/dharmamog2.jpg")}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/src/images/dharmamog2.jpg" alt="Project 2" />
              </div>
              <div className="flip-card-back">
                Project 2 Description
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="imageModalLabel" aria-hidden="false">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="imageModalLabel">Project Images</h5>
                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="carousel-inner" id="carouselImages">
                  <div className="modalimage">
                    {/* Dynamically change the image in the modal */}
                    <div className="img" style={{ backgroundImage: `url(${modalImage})` }} />
                    <div className="img" style={{ backgroundImage: `url(/src/images/dharmalogo.png)` }} />
                    <div className="img" style={{ backgroundImage: `url(${modalImage})` }} />
                    <div className="img" style={{ backgroundImage: `url(/src/images/dharmalogo.png)` }} />
                    <div className="img" style={{ backgroundImage: `url(${modalImage})` }} />
                    <div className="img" style={{ backgroundImage: `url(/src/images/dharmalogo.png)` }} />
                    <div className="img" style={{ backgroundImage: `url(${modalImage})` }} />
                    <div className="img" style={{ backgroundImage: `url(/src/images/dharmalogo.png)` }} />
                    <div className="img" style={{ backgroundImage: `url(${modalImage})` }} />


                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Music Gallery Section */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
            <h5 className="mt-4 display-5" id="contact">Music Gallery</h5>
            <hr className="w-100 mx-auto mb-4" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center row">
        <div className="music-card mx-2 col-md-5">
          <div className="title">Dharma Soft-Tech Title Song</div><br />
          <img src="/src/images/dharmalogo.png" alt="Cover Image" className="cover-image" />
          <div className="card-content">
            <audio src="(Verse 1) (1).mp3" controls id="audio1" />
          </div>
        </div>
        <div className="music-card mx-2 col-md-5">
          <div className="title">Dharma Soft-Tech Title Song</div><br />
          <img src="/src/images/dharmalogo.png" alt="Cover Image" className="cover-image" id="image2" />
          <div className="card-content">
            <audio src="(Verse 1).mp3" controls className />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
