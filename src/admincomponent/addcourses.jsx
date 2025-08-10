import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    duration: '',
    image: null
  });

  const [courses, setCourses] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setCourseData({ ...courseData, [name]: files[0] });
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in courseData) {
      formData.append(key, courseData[key]);
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/courses', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Course added successfully!');
      setCourseData({ title: '', description: '', duration: '', image: null });
      fetchCourses(); // Refresh
    } catch (err) {
      console.error(err);
      alert('Failed to add course');
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/courses');
      setCourses(response.data.data || response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/courses/${id}`);
      alert('Course deleted successfully!');
      fetchCourses(); // Refresh after deletion
    } catch (err) {
      console.error(err);
      alert('Failed to delete course');
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Add New Course</h2>

      <div className="card shadow-lg p-4 mb-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Course Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={courseData.title}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Course Description</label>
              <textarea
                name="description"
                id="description"
                value={courseData.description}
                onChange={handleChange}
                required
                className="form-control"
                rows="4"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Course Duration</label>
              <input
                type="text"
                name="duration"
                id="duration"
                value={courseData.duration}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">Course Image</label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">
              Add Course
            </button>
          </form>
        </div>
      </div>

<div className="card shadow-lg p-4 mb-5">
  <div className="card-body">
    <h3 className="text-center mb-4 text-primary">Courses List</h3>
    <div className="table-responsive">
      <table className="table table-bordered table-hover align-middle">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.duration}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No courses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
  );
};

export default AddCourse;
