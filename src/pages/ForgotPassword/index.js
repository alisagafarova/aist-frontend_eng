import React, { useState } from 'react';
import styles from './ForgotPassword.module.scss';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/forgot-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage('A password reset link has been sent to your email.');
      } else {
        setMessage(data.message || 'Failed to send the password reset link.');
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.auth_page}>
      <h2>Forgot password</h2>
      <form onSubmit={handleSubmit} className={styles.auth_form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send link</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};
