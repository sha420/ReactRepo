// src/validation.js
export function validateEmail(email) {
    // A simple email format validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  export function validatePassword(password) {
    // Password must be at least 8 characters
    return password.length >= 8;
  }
  