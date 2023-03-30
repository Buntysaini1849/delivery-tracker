import React, {useState}from 'react';
import {FaBars,FaHome,FaRegFolder,FaFileInvoice} from 'react-icons/fa';
import { MdOutlineArrowDropDown,MdOutlineBorderStyle,MdOutlineDashboard} from "react-icons/md";
import { BiDockTop} from "react-icons/bi";
import {Link,Outlet} from 'react-router-dom';


export default function Sidebar() {

  const [bars,setBars]=useState(false);
  const [menu, setMenu]=useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleTrigger = () => setBars(!bars) & setMenu(!menu);
  

  const handleClick = event => {

    setIsShown(current => !current);

  };

  return (
    <div>
        <div className='main-container' style={{width: bars ? "200px" :"70px",transition:"1s ease",marginTop:"-10px"}}>
           
            <div className='container bars-cont' style={{justifyContent: !bars ? "center" : "end"}}>
            <FaBars className='bars' onClick={handleTrigger}/>
         
          </div>
          
            <div>
               <section className="routes">
                    <nav className='navigation-bar'>
                        <ul className='list-top'>
                           <li className='list-items mt-5'><Link to="/dashboard" className='list-link'><span  className='icons' style={{marginLeft: !bars ? "1px":"-11px",title:"Home"}}><MdOutlineDashboard/></span><span style={{display: !bars ? "none":"block",marginTop:"-25px",marginLeft:"19px",fontSize:"0.910rem"}}>Home</span></Link></li> 
                           <li className='list-items mt-5'><Link to="/products" className='list-link'><span  className='icons' style={{marginLeft: !bars ? "1px":"13px"}}><FaRegFolder/></span><span style={{display: !bars ? "none":"block",marginTop:"-25px",marginLeft:"46px",fontSize:"0.910rem"}}>Products</span></Link></li>
                           <li className='list-items mt-5'><Link to="/orders" className='list-link'><span  className='icons' style={{marginLeft: !bars ? "1px":"13px"}}><MdOutlineBorderStyle /></span><span style={{display: !bars ? "none":"block",marginTop:"-25px",marginLeft:"46px",fontSize:"0.910rem"}}>Orders</span></Link></li>
                           <li className='list-items mt-5' onClick={handleClick}><Link to="" className='list-link'><span  className='icons'><BiDockTop className='svg-masters' style={{marginLeft: !bars ? "3px":"32px"}}/></span><span style={{display: !bars ? "none":"block",marginTop:"-38px",marginLeft:"61px",fontSize:"0.910rem"}}>Masters<span className='arrow-icon'><MdOutlineArrowDropDown className='arrow-svg'/></span></span></Link>
                           </li>
                           
                           {isShown && (
                           <div className="menu mt-3" style={{width:menu ? "100%" :"fit-content",top: menu? "340px" :"352px",left: menu? "174px" :"70px"}}>
          		              <a className="menu-item" href="#" style={{fontSize:menu ? "1rem" :"0.800rem",padding:menu ? "3px" :"5px"}}>Product</a>
          		              <a className="menu-item" href="#"style={{fontSize:menu ? "1rem" :"0.800rem",padding:menu ? "3px" :"5px"}}>User</a>
                            <a className="menu-item" href="#"style={{fontSize:menu ? "1rem" :"0.800rem",padding:menu ? "3px" :"5px"}}>Location</a>
                           </div>)}
                           
                           <li className='list-items mt-5'><Link to="/invoice" className='list-link'><span  className='icons' style={{marginLeft: !bars ? "1px":"-11px"}}><FaFileInvoice/></span><span style={{display: !bars ? "none":"block",marginTop:"-26px",marginLeft:"20px",fontSize:"0.910rem"}}>Invoice</span></Link></li>
                           
                        </ul>
                    </nav>
                </section>

                
            </div>
           
        </div>
        <Outlet/>
    </div>
  )
}
