import React, { useState,createContext } from 'react'
import { HashRouter , Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard'
import Login from './Login';
import Products from './Products';
import Invoice from './Invoice';
import Orders from './Orders';


export default function Homepage() {
  
  const NotFound = () => {
    return <h1>404 Page Not Found</h1>;
  };
  
  return (
    <div>

        
    <div className="right-section">
      
      <HashRouter>
        <Routes>

            <Route exact path='/' element={<Login/>}/>
            <Route exact path="dashboard" element={<Dashboard/>} />
            <Route exact path="products" element={<Products/>}/>
            <Route exact path="orders" element={<Orders/>}/>
            <Route exact path="invoice" element={<Invoice/>} />
            <Route component={NotFound} />

        </Routes>
      </HashRouter>
  
    </div>
      
    </div>
  )
}
