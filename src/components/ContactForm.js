import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file for styling

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

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
    // Here, you can make an API request or perform any desired action
    // For this example, we simply log the form data
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
      {error && <p>{error}</p>}
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
