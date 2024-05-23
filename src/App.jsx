import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { useState, useEffect } from 'react';
import MoviesPage from './pages/moviesPage/MoviesPage';
import moviesData from './assets/movies.json';
import  Login  from './components/Login/Login';
import  Signup  from './components/Signup/Signup';

const App = () => {
    const userData = localStorage.getItem('userdata');
  
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={userData ? <MoviesPage movieData={moviesData} /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
  };

  export default App;
