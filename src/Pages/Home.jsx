import React from 'react'
import { Routes,Route , BrowserRouter as Router} from "react-router-dom";
import Product from './Product';
import Login from './Login';
import Register from './Register';
import Card from './Card';

const Home = () => {
  
  return (
    <div>
      <Router>
        <Routes>
           
          <Route path="/" element={<Product/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/card" element={<Card/>}/>
          

         
         
        </Routes>
      </Router> 
    </div>
  )
}

export default Home