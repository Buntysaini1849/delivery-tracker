import React, { useState } from "react";
import { SketchPicker } from "react-color";
import {
  FaBars,
  FaHome,
  FaRegFolder,
  FaFileInvoice,
  FaCog,
} from "react-icons/fa";
import {
  MdOutlineArrowDropDown,
  MdOutlineBorderStyle,
  MdOutlineDashboard,
} from "react-icons/md";
import { BiDockTop } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  const [bars, setBars] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleTrigger = () => setBars(!bars) & setMenu(!menu);
  const [slideColor, setSlideColor] = useState("#00073d");
  const [logheadColor, setLogheadColor] = useState("#00264D");
  const [sideliColor, setSideliColor] = useState("#00264d");

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
    document.documentElement.style.setProperty("--li-color", newMenuItemsColor);
    setSlideColor(color.hex);
    setLogheadColor(color.hex);
    setSideliColor(newMenuItemsColor);
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
    <div>
      <div
        className="main-container"
        style={{
          width: bars ? "200px" : "70px",
          transition: "1s ease",
          marginTop: "-10px",
        }}
      >
        <div
          className="container bars-cont"
          style={{ justifyContent: !bars ? "center" : "end" }}
        >
          <FaBars className="bars" onClick={handleTrigger} />
        </div>

        <div>
          <section className="routes">
            <nav className="navigation-bar">
              <ul className="list-top">
              <Link to="/dashboard" className="list-link">
                <li className="list-items mt-3" style={{display:"flex",justifyContent:"center"}}>
                 
                    <span
                      className="icons"
                      style={{
                        marginLeft: !bars ? "30px" : "20px",
                        title: "Home",
                      }}
                    >
                      <MdOutlineDashboard />
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        marginLeft: "19px",
                        fontSize: "0.910rem",
                        lineHeight:"36px"
                      }}
                    >
                      Home
                    </span>
                  
                </li>
                </Link>
                <Link to="/products" className="list-link">
                <li className="list-items mt-3" style={{display:"flex",justifyContent:"center"}}>
                 
                    <span
                      className="icons"
                      style={{ marginLeft: !bars ? "30px" : "35px" }}
                    >
                      <FaRegFolder style={{fontSize:"23px"}}/>
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        marginLeft: "19px",
                        lineHeight:"36px",
                        fontSize: "0.910rem",
                      }}
                    >
                      Products
                    </span>
                 
                </li>
                </Link>
                <Link to="/orders" className="list-link">
                <li className="list-items mt-3" style={{display:"flex",justifyContent:"center"}}>
                 
                    <span
                      className="icons"
                      style={{ marginLeft: !bars ? "30px" : "19px" }}
                    >
                      <MdOutlineBorderStyle style={{fontSize:"24px"}}/>
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        marginLeft: "19px",
                        lineHeight:"36px",
                        fontSize: "0.910rem",

                      }}
                    >
                      Orders
                    </span>
                  
                </li>
                </Link>
                <Link to="" className="list-link" onClick={handleClick}>
                <li className="list-items mt-3"  style={{display:"flex",justifyContent:"center"}}>
                
                    <span className="icons">
                      <BiDockTop
                        className="svg-masters"
                        style={{ marginLeft: !bars ? "30px" : "55px",fontSize:"24px" }}
                      />
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        marginLeft: "19px",
                        lineHeight:"29px",
                        fontSize: "0.910rem",
                      }}
                    >
                      Masters
                      <span className="arrow-icon">
                        <MdOutlineArrowDropDown className="arrow-svg" />
                      </span>
                    </span>
                  
                </li>
                </Link>

                {isShown && (
                  <div
                    className="menu mt-3"
                    style={{
                      width: menu ? "100%" : "fit-content",
                      top: menu ? "340px" : "352px",
                      left: menu ? "174px" : "70px",
                    }}
                  >
                    <a
                      className="menu-item"
                      href="#"
                      style={{
                        fontSize: menu ? "1rem" : "0.800rem",
                        padding: menu ? "3px" : "5px",
                      }}
                    >
                      Product
                    </a>
                    <a
                      className="menu-item"
                      href="#"
                      style={{
                        fontSize: menu ? "1rem" : "0.800rem",
                        padding: menu ? "3px" : "5px",
                      }}
                    >
                      User
                    </a>
                    <a
                      className="menu-item"
                      href="#"
                      style={{
                        fontSize: menu ? "1rem" : "0.800rem",
                        padding: menu ? "3px" : "5px",
                      }}
                    >
                      Location
                    </a>
                  </div>
                )}

      <Link to="/invoice" className="list-link">
                <li className="list-items mt-3" style={{display:"flex",justifyContent:"center"}}>
                 
                    <span
                      className="icons"
                      style={{ marginLeft: !bars ? "30px" : "20px" }}
                    >
                      <FaFileInvoice style={{fontSize:"22px"}}/>
                    </span>
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        marginLeft: "19px",
                        lineHeight:"36px",
                        fontSize: "0.910rem",
                      }}
                    >
                      Invoice
                    </span>
                  
                </li>
                </Link>
                <li className="list-items mt-5" style={{display:"flex",justifyContent:"center"}} onClick={handleColorPicker}>
                      <FaCog
                        className="settings-icon"
                        style={{ marginLeft: !bars ? "30px" : "20px",fontSize:"23px" }}
                      />
                    <span
                      style={{
                        display: !bars ? "none" : "block",
                        marginLeft: "19px",
                        lineHeight:"33px",
                        fontSize: "0.910rem",
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
