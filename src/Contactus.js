import React, { useState } from
'react';

const Contactus = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      // Successful login
      console.log('Successfully logged in');
      // Redirect to protected page or perform other actions
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      
<label>Username:</label>

      
<input

        
type="text"

        
value={username}

        
onChange={(event) => setUsername(event.target.value)}
      />
      <label>Password:</label>
      <input

        
type="password"

        
value={password}

        
onChange={(event) => setPassword(event.target.value)}
      />
      <button
 
onClick={handleLogin}>Login</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Contactus;