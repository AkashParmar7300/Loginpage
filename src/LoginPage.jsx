import React, { useState } from 'react';
import foodImage from './images/food.png'; // Ensure the path is correct
import burgerImage from './images/pat.png'; // Ensure the path is correct

const styles = {
  container: {
    width: '250px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #e5e5e5',
    borderRadius: '15px',
    textAlign: 'center',
    backgroundColor: '#fff8e1',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'url(/images/food.png)', // Background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heading: {
    marginBottom: '15px',
    fontSize: '28px',
    color: '#d84315',
    fontFamily: 'Arial, sans-serif',
    animation: 'fadeIn 2s ease-in-out',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '5px',
    borderRadius: '8px',
    border: '1px solid #d84315',
    fontSize: '16px',
    backgroundColor: '#fff',
    animation: 'inputFocus 1s ease-in-out',
  },
  button: {
    padding: '12px',
    backgroundColor: '#d84315',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    animation: 'buttonHover 0.5s ease-in-out',
  },
  toggle: {
    marginTop: '15px',
    fontSize: '14px',
  },
  toggleLink: {
    color: '#d84315',
    cursor: 'pointer',
    textDecoration: 'underline',
    animation: 'textBounce 1s infinite',
  },
  food: {
    position: 'absolute',
    bottom: '10px',
    left: '-100px',
    width: '150px',
    animation: 'moveFood 10s infinite',
  },
  burger: {
    position: 'absolute',
    top: '10px',
    right: '-100px',
    width: '150px',
    animation: 'moveBurger 12s infinite',
  },
  '@keyframes moveFood': {
    '0%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(200px)' },
    '100%': { transform: 'translateX(0)' },
  },
  '@keyframes moveBurger': {
    '0%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(-200px)' },
    '100%': { transform: 'translateX(0)' },
  },
  '@keyframes fadeIn': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  '@keyframes inputFocus': {
    '0%': { boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' },
    '100%': { boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' },
  },
  '@keyframes buttonHover': {
    '0%': { backgroundColor: '#d84315' },
    '50%': { backgroundColor: '#f57c00' },
    '100%': { backgroundColor: '#d84315' },
  },
  '@keyframes textBounce': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
};

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (isLogin) {
      console.log('Logging in with:', { phoneNumber, password });
    } else {
      console.log('Registering with:', { phoneNumber, password });
    }

    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={styles.input}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter your password"
            required
          />
        </div>
        {!isLogin && (
          <div style={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              placeholder="Confirm your password"
              required
            />
          </div>
        )}
        <button type="submit" style={styles.button}>{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <div style={styles.toggle}>
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <span onClick={() => setIsLogin(false)} style={styles.toggleLink}>
              Register here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setIsLogin(true)} style={styles.toggleLink}>
              Login here
            </span>
          </p>
        )}
      </div>
      <img src={foodImage} alt="Pizza" style={styles.food} />
      <img src={burgerImage} alt="Burger" style={styles.pat} />
    </div>
  );
}

export default LoginPage;
