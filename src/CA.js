import React, { useState } from 'react';

const CA = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAccountCreation = () => {
    if (
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      // Perform account creation logic here, for example, send a request to the server
      console.log('Account created for:', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      });

      // Reset state after account creation
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('Please complete all required fields and ensure passwords match.');
    }
  };

  return (
    <div className="account-container">
      <h2>Create Account</h2>

      <label>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <label>Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label>Phone Number:</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />

      <button onClick={handleAccountCreation}>Create Account</button>
    </div>
  );
};

export default CA;