import React, { useState } from 'react';
import './CourseModal.css';

const CourseModal = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);  // Close the modal when the close button is clicked
  };

  return (
    <div className={`course-modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>X</span>
        <h2>Course Details</h2>
        <p>Here are the details about the course...</p>
      </div>
    </div>
  );
};

export default CourseModal;
