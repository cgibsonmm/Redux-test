import React, { useState, useEffect } from "react";

export default function CoursesPage() {
  const [course, setCourse] = useState({
    title: ""
  });

  const handleChange = e => {
    const value = e.target.value;
    setCourse(prevState => ({
      ...prevState,
      title: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(course.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
    </form>
  );
}
