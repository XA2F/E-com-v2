import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file for styling

const ContactForm = () => {
  // State variables to store form inputs and error message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  // Event handlers for input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (name.trim() === '') {
      setError('Please enter your name');
      return;
    }

    if (email.trim() === '') {
      setError('Please enter your email');
      return;
    }

    if (comment.trim() === '') {
      setError('Please enter your comment');
      return;
    }

    // If all fields are valid, handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Comment:', comment);

    // Clear form fields and error state
    setName('');
    setEmail('');
    setComment('');
    setError('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {error && <p>{error}</p>} {/* Display error message if it exists */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
