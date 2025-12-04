import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../../redux/slices/slices'; // Import the Redux logout action
import styles from './Header.module.scss';
import logo from '../../images/logo_stokrk.png';

export const Header = () => {
  const isAuthenticated = useSelector((state) => state.terminal.auth.isAuthenticated); // Using Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleLogoutClick = () => {
    dispatch(logout()); // Reset authorization in Redux
    // Remove the last path from localStorage
  localStorage.removeItem('lastVisitedPath');
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className={styles.root}>
      <Link className={styles.logo} to="/">
        <img className={styles.logo_header} src={logo} alt="Menu Logo" />
      </Link>
      <div className={styles.authButton}>
        {isAuthenticated ? (
          <button onClick={handleLogoutClick} className={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <button onClick={handleLoginClick} className={styles.loginButton}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};
