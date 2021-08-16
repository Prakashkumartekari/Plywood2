import React, { useEffect } from "react";
import Header from "../../Header/Header";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import "./contact.css";
import Quote from "../Quote/Quote";
const Contact = () => {
  useEffect(() => {
    window.scroll(0,0)
   }, [])
  return (
    <div>
      <Header Heading="Contact" />
      <div className="contact__container">
        <div className="contact_leftside">
          <h2>Reach us here:</h2>
          <p className="contact_text">
            Feel free to give us a call on the number given below for any
            enquiry or concern. You can also write to us on the email adress
            mentioned below. Your questions,feedbacks are important to us. One
            of our representative will get back to you as earliest as possible.
            You are most welcome to visit our office which is located at E2, E3
            in the industrial area Hajipur, Vaishali to witness the Plywood
            making process starting from scratch.
          </p>
          <p>
            <span>
              <MailOutlineIcon fontSize="small"/>
            </span>
            info@plywood.in
          </p>
          <p><span>
              <MailOutlineIcon fontSize="small"/>
            </span>plywood@gmail.com</p>
          <p> <span>
              <PhoneIphoneOutlinedIcon fontSize="small"/>
            </span>+91 111111111</p>
          <p> <span>
              <PhoneIphoneOutlinedIcon fontSize="small"/>
            </span>+91 111111111</p>
          <p><span>
              <LocationOnOutlinedIcon fontSize="small"/>
            </span>Full Address</p>
        </div>
        <div className="contact_rightside">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55210.72721837309!2d77.23519249946112!3d30.13224213739186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef99b8b19ea25%3A0xfc76e2b1f391902!2sYamuna%20Nagar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1629013103777!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullscreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
      <Quote/>
    </div>
  );
};

export default Contact;
