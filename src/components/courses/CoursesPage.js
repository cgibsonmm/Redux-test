import React, { useState } from "react";

// prop types
import PropTypes from "prop-types";

// redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

function CoursesPage({ createCourse, courses }) {
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
    createCourse(course);
    setCourse({ title: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={handleChange} value={course.title} />
        <input type="submit" value="Save" />
      </form>

      {courses.map(c => (
        <div key={c.title}>{c.title}</div>
      ))}
    </div>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ courses }) => {
  return { courses };
};

const mapDispatchToProps = {
  createCourse: courseActions.createCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
