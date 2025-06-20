import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    duration: '',
    image: null
  });

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
      const res = await axios.post('/api/courses', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Course added successfully!');
      setCourseData({ title: '', description: '', duration: '', image: null });
    } catch (err) {
      console.error(err);
      alert('Failed to add course');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={courseData.title}
          onChange={handleChange}
          placeholder="Course Title"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={courseData.description}
          onChange={handleChange}
          placeholder="Course Description"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="duration"
          value={courseData.duration}
          onChange={handleChange}
          placeholder="Course Duration (e.g., 4 weeks)"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
