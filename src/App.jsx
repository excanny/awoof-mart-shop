import { lazy, useEffect, Suspense } from "react";
import { useNavigate, BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { useCookies } from "react-cookie";
import { isTokenExpired } from './utils/auth';

import Home from "./pages/Home";

function App() {
  
  return (

     <Router>
      
        <Routes>
        <Route path="/" element={<Home />} />
       
        </Routes>
     
    </Router>
  
  )
}

export default App
