import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MoviesPage from './pages/moviesPage/MoviesPage';
import moviesData from './assets/movies.json';
import  Login  from './components/Login/Login';
import  Signup  from './components/Signup/Signup';
import { ToastContainer } from 'react-toastify';

const App = () => {
    const userData = localStorage.getItem('userData');
//  console.log(userData);
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={ userData ? <MoviesPage movieData={moviesData} /> :<Login/> }/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer position="top-right" autoClone={1000} pauseOnHover={false} />
      </div>
     
    </BrowserRouter>
    );
  };

  export default App;
