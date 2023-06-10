// RegisterPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Store/Store';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const user = { email, password };
    dispatch(registerUser(user));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register Page</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
