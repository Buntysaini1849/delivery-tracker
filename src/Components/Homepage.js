import React from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard'
import Login from './Login';


export default function Homepage() {
  return (
    <div>

        
    <div className="right-section">
      
      <BrowserRouter>
        <Routes>
          
            
            <Route path='/' element={<Login/>}/>
            <Route path="dashboard" element={<Dashboard/>} />
            
        
        </Routes>
      </BrowserRouter>
  
    </div>
      
    </div>
  )
}
