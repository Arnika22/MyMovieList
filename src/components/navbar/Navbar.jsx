// src/components/Navbar/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const userData = localStorage?.getItem("uerData")
  const handleClear = () => {
    localStorage.removeItem('userData');
    window.location.reload();
    navigate("/");
  }


  return (
    <>
      <div className={styles.navbarParent}>
        <div className={styles.navbarLogo} >🎬🎥</div>
        <a className={styles.area} href={"/"}> <div className={styles.navbarTitle} >THE MOVIECATALOG</div></a>
        <div className={styles.bDiv}>
          <button className={styles.navbarButton} onClick={handleClear}>LogOut</button>
          <div className={styles.navbarLinks}>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};



export default Navbar;
