import React, { useState } from "react";
import { SketchPicker } from "react-color";
import {
  FaBars,
  FaShoppingBasket,
  FaFileInvoice,
  FaCog,
} from "react-icons/fa";
import {
  MdOutlineArrowDropDown,
  MdOutlineBorderStyle,
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdImageAspectRatio,
} from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { BiDockTop,BiHome} from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  const [bars, setBars] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleTrigger = () => setBars(!bars) & setMenu(!menu);
  const [slideColor, setSlideColor] = useState("#00073d");
  const [logheadColor, setLogheadColor] = useState("#00264D");
  //const [sideliColor, setSideliColor] = useState("#00264d");

  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    document.documentElement.style.setProperty("--slider-color", color.hex);
    document.documentElement.style.setProperty("--loghead-color", color.hex);
    const hslColor = color.hsl;
    hslColor.s -= 0.3;
    hslColor.l -= 0.1;
    const newMenuItemsColor = `hsl(${hslColor.h}, ${hslColor.s * 100}%, ${
      hslColor.l * 100
    }%)`;
   // document.documentElement.style.setProperty("--li-color", newMenuItemsColor);
    setSlideColor(color.hex);
    setLogheadColor(color.hex);
  //  setSideliColor(newMenuItemsColor);
  };

  const handleClick = () => {
    setIsShown((current) => !current);
    setShowColorPicker(false);
  };


  const handleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
    setIsShown(false);
  }
  return (
    <div style={{backgroundColor:"var(--slider-color)"}}>
      <div
        className="main-container"
        style={{
          width: bars ? "250px" : "70px",
          transition: "0.5s ease",
          marginTop: "-10px",
        }}
      >
        <div
          className="container bars-cont mt-4"
          style={{ justifyContent: !bars ? "center" : "space-between",display:"flex"}}
        >
           <h3 className="sidebar-head" style={{display:!bars?"none":"block",transition: !bars? "none":"opacity 0.3s 0.2s !important"}}>Delivery Tracker</h3>
          <FaBars className="bars" onClick={handleTrigger} />
         
        </div>

        <div>
          <section className="routes">
            <nav className="navigation-bar">
              <ul className="list-top" style={{overflowY:"auto",height:"600px"}}> 
              <li>
                <h3 className="list-headings" style={{display:!bars?"none":"block",}}>Components</h3>
              </li>
              <Link to="/dashboard" className="list-link active">
                <li className="list-items mt-1" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                 
                    <span
                      className="icons"
                      style={{
                        marginLeft: !bars ? "0px" : "0px",
                        title: "Home",
                      }}
                    >
                      <BiHome />
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        fontSize: "0.910rem",
                        lineHeight:"36px",
                        marginTop:"3px",
                        width:"100px",
                      }}
                    >
                      Home
                    </span>
                  
                </li>
                </Link>
                <Link to="/products" className="list-link">
                <li className="list-items mt-2" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
             
                 <span
                      className="icons"
                      style={{ marginLeft: !bars ? "0px" : "0px" }}
                    >
                      <MdOutlineInventory2 style={{fontSize:"20px"}}/>
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        lineHeight:"36px",
                        fontSize: "0.910rem",
                        marginTop:"3px",
                        width:"100px",
                      }}
                    >
                      Products
                    </span>

                </li>
                </Link>



                <Link to="/banner" className="list-link">
                <li className="list-items mt-2" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
             
                 <span
                      className="icons"
                      style={{ marginLeft: !bars ? "0px" : "0px" }}
                    >
                      <MdImageAspectRatio style={{fontSize:"22px"}}/>
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        lineHeight:"36px",
                        fontSize: "0.910rem",
                        marginTop:"3px",
                        width:"100px",
                      }}
                    >
                      Banners
                    </span>

                </li>
                </Link>
     
            
      <Link to="/invoice" className="list-link">
                <li className="list-items mt-2" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                 
                    <span
                      className="icons"
                      style={{ marginLeft: !bars ? "0px" : "0px" }}
                    >
                      <FaFileInvoice style={{fontSize:"20px"}}/>
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        lineHeight:"36px",
                        fontSize: "0.910rem",
                        width:"100px",
                        marginTop:"3px",
                      }}
                    >
                      Invoice
                    </span>
                  
                </li>
                </Link>
                <li>
                <h3 className="list-headings" style={{display:!bars?"none":"block",}}>Masters</h3>
              </li>
                <Link to="" className="list-link" onClick={handleClick}>
                <li className="list-items mt-0"  style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                
                    <span className="icons">
                      <BsFillLayersFill
                        className="svg-masters"
                        style={{ marginLeft: !bars ? "0px" : "20px",fontSize:"20px" }}
                      />
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        lineHeight:"29px",
                        fontSize: "0.910rem",
                        width:"120px",
                        marginTop:"3px",
                      }}
                    >
                      Masters
                      <span className="arrow-icon">
                        <MdOutlineArrowDropDown className="arrow-svg" />
                      </span>
                    </span>
                  
                </li>

                {isShown && (
                  <li
                    className="menu mt-3"
                    style={{
                      position:!bars ? "absolute":"inherit",
                      top:!bars ? "364px" :"none",
                      left:!bars ? "71px": "none",
                    }}
                  >
                    <Link to="/orderhistory" className="list-link" style={{width:"100%",marginLeft:"0px"}}>
                    <span
                      className="menu-item"
                      href="#"
                      style={{
                        fontSize: menu ? "0.91rem" : "0.700rem",
                        padding: menu ? "3px" : "5px",
                        whiteSpace:"nowrap",
                        display:"block",
                      }}

                    >
                      Order history
                    </span>
                    </Link>

                    
                  </li>
                )}
                </Link>

                <li>
                <h3 className="list-headings" style={{display:!bars?"none":"block",}}>Settings</h3>
              </li>
                <li className="list-items mt-2" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}} onClick={handleColorPicker}>
                      <FaCog
                        className="settings-icon"
                        style={{ marginLeft: !bars ? "0px" : "0px",fontSize:"20px" }}
                      />
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        lineHeight:"33px",
                        fontSize: "0.910rem",
                        width:"100px",
                        marginTop:"3px",
                      }}
                    >
                      Settings
                    </span>
                </li>
                {showColorPicker && (
                  <div className="color-picker" style={{marginLeft: !bars ? "5px" : "-202px"}}>
                    <SketchPicker
                      color={slideColor}
                      onChange={handleColorChange}
                    />
                  </div>
                )}
              </ul>
            </nav>
          </section>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
