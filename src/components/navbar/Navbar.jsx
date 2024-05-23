// src/components/Navbar/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleClear=()=>{
    localStorage.removeItem('userdata');
    navigate("/");
    window.location.reload();
  }
  
  

  return (
    <>
    <div className={styles.navbarParent}>
      <div className={styles.navbarLogo} aria-label="logo">🎥🎬</div>
      <div className={styles.navbarTitle}>THE MOVIECATALOG</div>   
      <div className={styles.bDiv}>
      <button className={styles.navbarButton} onClick={handleClear}>LogOut</button>
      <div className={styles.navbarLinks}>
        <Link to="/login">Login / Sign In</Link>  
      </div>
      
      </div> 
    </div>
    
    </>
  );
};



export default Navbar;
