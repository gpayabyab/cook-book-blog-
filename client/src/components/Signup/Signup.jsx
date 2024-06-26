import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutation';


import Auth from '../../utils/auth';
import'./Signup.css'
const SignUp = () => {
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [addUser, { loading }] = useMutation(ADD_USER);
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await addUser({ variables: { ...formData } });

      Auth.login(data.addUser.token)
    } catch (e) {
      console.error('Error signing up:', e);
      setError(e.message);  // Display the error message from the server
    }
  };
  return (
    <main className="flex-row justify-center mb-4">
    <div className="col-12 col-lg-10">
      <div className="card">
        <h4 className="card-header bg-dark text-light p-6">Sign Up</h4>
        <div className="card-body">
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            {/* <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} /> */}
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            <button type="submit" disabled={loading}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </main>
);
};
export default SignUp;
