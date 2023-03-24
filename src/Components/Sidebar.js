import React, {useState}from 'react';
import {FaBars,FaHome,FaStore,FaRegFolder, FaAddressBook,FaFileInvoice} from 'react-icons/fa';
import {Link,Outlet} from 'react-router-dom';


export default function Sidebar() {

  const [bars,setBars]=useState(false);

  const handleTrigger = () => setBars(!bars);

  return (
    <div>
        <div className='main-container' style={{width: bars ? "200px" :"70px",transition:"1s ease",marginTop:"-10px"}}>
          <div className='container bars-cont' style={{justifyContent: !bars ? "center" : "end"}}>
            <FaBars className='bars' onClick={handleTrigger}/>
          </div>
            <div>
               <section className="routes">
                    <nav>
                        <ul className='list-top'>
                           <li className='list-items mt-5'><Link to="/dashboard" className='list-link' ><span  className='icons' style={{marginLeft: !bars ? "1px":"-11px"}}><FaHome/></span><span style={{display: !bars ? "none":"block",marginTop:"-25px",marginLeft:"33px",fontSize:"0.910rem"}}>Home</span></Link></li> 
                           <li className='list-items mt-5'><Link to="/vendors" className='list-link' ><span  className='icons' style={{marginLeft: !bars ? "1px":"6px"}}><FaStore/></span><span style={{display: !bars ? "none":"block",marginTop:"-25px",marginLeft:"52px",fontSize:"0.910rem"}}>Vendors</span></Link></li> 
                           <li className='list-items mt-5'><Link to="/products" className='list-link' ><span  className='icons' style={{marginLeft: !bars ? "1px":"13px"}}><FaRegFolder/></span><span style={{display: !bars ? "none":"block",marginTop:"-25px",marginLeft:"58px",fontSize:"0.910rem"}}>Products</span></Link></li>
                           <li className='list-items mt-5'><Link to="/firms" className='list-link' ><span  className='icons' style={{marginLeft: !bars ? "1px":"-11px"}}><FaAddressBook/></span><span style={{display: !bars ? "none":"block",marginTop:"-25px",marginLeft:"33px",fontSize:"0.910rem"}}>Firms</span></Link></li>
                           <li className='list-items mt-5'><Link to="/invoice" className='list-link' ><span  className='icons' style={{marginLeft: !bars ? "1px":"-11px"}}><FaFileInvoice/></span><span style={{display: !bars ? "none":"block",marginTop:"-25px",marginLeft:"33px",fontSize:"0.910rem"}}>Invoice</span></Link></li>
                        </ul>
                    </nav>
                </section>

                
            </div>
           
        </div>
        <Outlet/>
    </div>
  )
}
