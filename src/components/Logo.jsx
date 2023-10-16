import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable"; // Import the Draggable component

import bg from "../assets/bg3.jpg";

const Logo = () => {
  const [logoSize, setLogoSize] = useState(80);
  const [stayLogo, setStayLogo] = useState(false);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset, 2);
      const newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const isMobile = window.innerWidth <= 768;

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? (isMobile ? "10px" : "15px") : "50px",
    left: stayLogo ? "" : isMobile ? "5px" : "40px",
    marginLeft: stayLogo ? (isMobile ? "1px" : "40px") : "0",
    zIndex: 999,
  };

  return (
    <div style={logoStyle} className={isMobile ? "mb-5" : "mb-10"}>
      {isMobile ? (
        <Draggable>
          <Link to="/">
            <img
              src={bg}
              alt="logo"
              className="logo rounded-full right-1 ring-offset-1 ring-white dark:ring-1 "
              width={logoSize}
            />
          </Link>
        </Draggable>
      ) : (
        <Link to="/">
          <img
            src={bg}
            alt="logo"
            className="logo rounded-full right-1 ring-offset-1 ring-white dark:ring-1
            "
            width={logoSize}
          />
        </Link>
      )}
    </div>
  );
};

export default Logo;
