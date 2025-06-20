import React, { useState } from 'react';

function AddServices() {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');

  const handleAddService = async () => {
    const newService = { serviceName, serviceDescription };

    if (!serviceName || !serviceDescription) {
      alert('Please fill out all fields before adding a service.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/admin/addservices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Service added successfully!');
        setServiceName('');
        setServiceDescription('');
      } else {
        alert(result.message || 'Failed to add the service.');
      }
    } catch (error) {
      console.error('Error adding service:', error);
      alert('An error occurred while adding the service.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Add a New Service</h2>

      <div className="card shadow-lg p-4">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="serviceName" className="form-label">
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              className="form-control"
              placeholder="Enter service name"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="serviceDescription" className="form-label">
              Service Description
            </label>
            <textarea
              id="serviceDescription"
              className="form-control"
              rows="4"
              placeholder="Enter service description"
              value={serviceDescription}
              onChange={(e) => setServiceDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            onClick={handleAddService}
            className="btn btn-success w-100 mt-3"
          >
            Add Service
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddServices;
