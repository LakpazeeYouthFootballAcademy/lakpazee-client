import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios({
      method: 'post',
      url: 'https://lakpazee.herokuapp.com/api/contact',
      data: {
        name, 
        email,
        subject,
        message
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Subject:
        <input type="text" value={subject} onChange={handleSubjectChange} />
      </label>
      <label>
        Message:
        <textarea type="text" value={message} onChange={handleMessageChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;