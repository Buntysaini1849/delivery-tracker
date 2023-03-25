import React from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard'
import Login from './Login';
import Products from './Products';
import Invoice from './Invoice';


export default function Homepage() {
  return (
    <div>

        
    <div className="right-section">
      
      <BrowserRouter>
        <Routes>
          
            
            <Route path='/' element={<Login/>}/>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="products" element={<Products/>} />
            <Route path="invoice" element={<Invoice/>} />
            
        
        </Routes>
      </BrowserRouter>
  
    </div>
      
    </div>
  )
}
