// src/components/SignUp.js
import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../validation';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignUp = () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }

    // Add registration logic here
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {emailError && <p className="error">{emailError}</p>}
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {passwordError && <p className="error">{passwordError}</p>}
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
