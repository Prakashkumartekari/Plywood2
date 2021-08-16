import React from "react";
import "./footer.css";
import logo from "../../../assets/logo2.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer__container">
        <div className="first__sec">
          <img src={logo} alt="logo" srcset="" />
        </div>
        <div className="second__sec">
          <p>Navigation</p>
          <Link to="/gallery" className="footerLink">
          <ArrowForwardIosIcon fontSize="small"  className="footer__icon"/>
           <span> Gallery</span> 
          </Link>
          <Link to="/career" className="footerLink">
          <ArrowForwardIosIcon fontSize="small"  className="footer__icon"/>
         <span>Career</span>  
          </Link>
          <Link to="/contact" className="footerLink">
          <ArrowForwardIosIcon fontSize="small" className="footer__icon"/>
          <span>Contact us</span> 
          </Link>
        </div>
        <div className="third__sec">
          <p>Plywood</p>
          <Link to="/gallery" className="footerLink">
          <ArrowForwardIosIcon fontSize="small"  className="footer__icon"/>
           <span>Commercial Ply</span> 
          </Link>
          <Link to="/career" className="footerLink">
          <ArrowForwardIosIcon fontSize="small"  className="footer__icon"/>
         <span>MR Grade Plywood</span>  
          </Link>
          <Link to="/contact" className="footerLink">
          <ArrowForwardIosIcon fontSize="small" className="footer__icon"/>
          <span>Waterproof Ply</span> 
          </Link> 
          <Link to="/contact" className="footerLink">
          <ArrowForwardIosIcon fontSize="small" className="footer__icon"/>
          <span>Shuttering Ply</span> 
          </Link> 
        </div>
        <div className="fourth__sec">
          <p>Doors</p>
          <Link to="/contact" className="footerLink">
          <ArrowForwardIosIcon fontSize="small" className="footer__icon"/>
          <span>Flush Door</span> 
          </Link> 
          <Link to="/gallery" className="footerLink">
          <ArrowForwardIosIcon fontSize="small"  className="footer__icon"/>
           <span>Laminated Door</span> 
          </Link>
          <Link to="/career" className="footerLink">
          <ArrowForwardIosIcon fontSize="small"  className="footer__icon"/>
         <span>UV printed Door</span>  
          </Link>
          <Link to="/contact" className="footerLink">
          <ArrowForwardIosIcon fontSize="small" className="footer__icon"/>
          <span>Teak Door</span> 
          </Link> 
        </div>
     
      </div>
     <div className="footer__copyright">
               <p>All  Copyrights &copy;Are Reserved to Webinfologics.</p>
     </div>
    </div>
  );
};

export default Footer;
