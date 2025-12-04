import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './ResetPassword.module.scss';

export const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/reset-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token, password }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage('Password successfully reset!');
        setTimeout(() => navigate('/login'), 2000); // Redirecting to the login page
      } else {
        setError(data.message || 'Failed to reset the password.');
      }
    } catch (error) {
      console.error('Reset password error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.auth_page}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className={styles.auth_form}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};
