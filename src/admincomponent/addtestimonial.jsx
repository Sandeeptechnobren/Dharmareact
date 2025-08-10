import React, { useState } from 'react';

function Testimonial() {
  const [stdname, setstdname] = useState('');
  const [testimonial, setTestimonial] = useState('');

  const handleAddTestimonial = async () => {
    const newTestimonial = { stdname, testimonial };

    if (!stdname || !testimonial) {
      alert('Please fill out all fields before adding a testimonial.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTestimonial),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Testimonial added successfully!');
        setstdname('');
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
            <label htmlFor="stdname" className="form-label">
              Student Name
            </label>
            <input
              type="text"
              id="stdname"
              className="form-control"
              placeholder="Enter student name"
              value={stdname}
              onChange={(e) => setstdname(e.target.value)}
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
