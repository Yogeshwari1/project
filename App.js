
import React, { useState } from 'react';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './App.css';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming your server has /register or /login endpoints
      const response = await axios.post('http://your-node-api/register', formData);
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signin-form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="text"  
          id="dob"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignInForm;
