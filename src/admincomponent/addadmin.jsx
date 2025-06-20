import React, { useState, useEffect } from 'react';

function AddAdmin() {
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });

  const [admins, setAdmins] = useState([]); // To store the list of admins

  // Function to fetch the list of admins
  const fetchAdmins = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/admin/getadmins');
      const result = await response.json();

      if (response.ok) {
        setAdmins(result); // Set the fetched admins in state
        console.log('Admin list fetched successfully!');
      } else {
        alert(result.message || 'Failed to fetch admins.');
      }
    } catch (error) {
      
      alert('An error occurred while fetching the admins.');
    }
  };

  // Fetch admins when the component mounts
  useEffect(() => {
    fetchAdmins();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  // Add a new admin to the database
  const handleAddAdmin = async () => {
    if (!newAdmin.name || !newAdmin.age || !newAdmin.email || !newAdmin.password) {
      alert('Please fill out all fields before adding a new admin.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAdmin),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Admin added successfully!');
        setNewAdmin({
          name: '',
          age: '',
          email: '',
          password: '',
        });

        // Refresh the admin list after adding a new admin
        fetchAdmins();
      } else {
        alert(result.message || 'Failed to add the admin.');
      }
    } catch (error) {
      console.error('Error adding admin:', error);
      alert('An error occurred while adding the admin.');
    }
  };

  // Delete an admin from the database
const handleDeleteAdmin = async (adminEmail) => {
  try {
    const response = await fetch(`http://localhost:4000/api/admin/${encodeURIComponent(adminEmail)}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const result = await response.json();
      alert(result.message || 'Admin deleted successfully!');
      // Remove the deleted admin from the state
      setAdmins(admins.filter((admin) => admin.email !== adminEmail));
    } else {
      alert(`Failed to delete admin: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error deleting admin:', error);
    alert('An error occurred while deleting the admin.');
  }
};


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Add a New Admin</h2>

      <div className="card shadow-lg p-4 mb-4">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Admin Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter Admin Name"
              value={newAdmin.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">Admin Age</label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              placeholder="Enter Admin Age"
              value={newAdmin.age}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Admin Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Admin Email"
              value={newAdmin.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={newAdmin.password}
              onChange={handleInputChange}
            />
          </div>

          <button
            onClick={handleAddAdmin}
            className="btn btn-success w-100 mt-3"
          >
            Add Admin
          </button>
        </div>
      </div>

      {/* Admins List Table */}
      <h3 className="text-center mb-4 text-primary">Admin List</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.email}>
                <td>{admin.name}</td>
                <td>{admin.age}</td>
                <td>{admin.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteAdmin(admin.email)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddAdmin;
