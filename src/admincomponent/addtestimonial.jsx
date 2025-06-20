import React, { useState } from 'react';

function Testimonial() {
  const [stdName, setStdName] = useState('');
  const [testimonial, setTestimonial] = useState('');

  const handleAddTestimonial = async () => {
    const newTestimonial = { stdName, testimonialContent: testimonial };

    if (!stdName || !testimonial) {
      alert('Please fill out all fields before adding a testimonial.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/admin/testimonial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTestimonial),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Testimonial added successfully!');
        setStdName('');
        setTestimonial('');
      } else {
        alert(result.message || 'Failed to add the testimonial.');
      }
    } catch (error) {
      console.error('Error adding testimonial:', error);
      alert('An error occurred while adding the testimonial.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Add a Testimonial</h2>

      <div className="card shadow-lg p-4">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="stdName" className="form-label">
              Student Name
            </label>
            <input
              type="text"
              id="stdName"
              className="form-control"
              placeholder="Enter student name"
              value={stdName}
              onChange={(e) => setStdName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="testimonial" className="form-label">
              Testimonial
            </label>
            <textarea
              id="testimonial"
              className="form-control"
              rows="4"
              placeholder="Write the testimonial"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
            ></textarea>
          </div>

          <button
            onClick={handleAddTestimonial}
            className="btn btn-success w-100 mt-3"
          >
            Add Testimonial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
