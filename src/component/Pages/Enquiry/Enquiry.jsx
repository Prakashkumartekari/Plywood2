import { Button, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import image1 from "../../../assets/abouthome1.jpg"
import "./enquiry.css"
const Enquiry = () => {
          const [popup, setPopup] = useState(false)
         const [formData, setFormData] = useState({
                   name:"",
                   email:"",
                   mobile:"",
                   location:"",
                   message:"",
         })

         const handleChange =(e)=>{
                    setFormData({...formData, [e.target.name]:e.target.value})
         }
         const handleSubmitt =()=>{
                   setPopup(true)
                   setFormData({
                    name:"",
                    email:"",
                    mobile:"",
                    location:"",
                    message:"",
                   })
         }
         useEffect(() => {
                  setTimeout(() => {
                            setPopup(false)
                  }, 5000);
         }, [popup])
          useEffect(() => {
                    window.scrollTo(0,0)
                    }, [])
          return (
                    <div>
                              {popup && 
                              <div className="popup__container">
                                        <div className="popup">
                                        <p>Your Enquiry Submitted Successfully !!</p>
                                        <p>We Contact You Soon</p>
                                        </div>
                              </div>
                              }
                              <Header Heading="Enquiry" />
                              <div className="enquiry__container">
                                        <div className="enquiry_leftside">
                                                  <h2>Request a Quote</h2>
                                                  <TextField value={formData.name} onChange={(e)=>handleChange(e)}  variant="outlined" label="Name" margin="normal" name="name"/>
                                                  <TextField value={formData.email} onChange={(e)=>handleChange(e)}  variant="outlined" label="Email" margin="normal" name="email"/>
                                                  <TextField value={formData.mobile} onChange={(e)=>handleChange(e)}  variant="outlined" label="Mobile No" margin="normal" name="mobile"/>
                                                  <TextField value={formData.location} onChange={(e)=>handleChange(e)}  variant="outlined" label="Location" margin="normal" name="location"/>
                                                  <TextField value={formData.message} onChange={(e)=>handleChange(e)}  variant="outlined" label="Message" margin="normal" name="message"/>
                                        <div className="enquiry_button">
                                                  <Button variant="contained" size="large" onClick={()=>handleSubmitt()}>Submit</Button>
                                        </div>
                                        </div>
                                        <div className="enquiry_rightside">
                                                  <img src={image1} alt="enauiry_img"  />
                                        </div>
                              </div>
                    </div>
          )
}

export default Enquiry
