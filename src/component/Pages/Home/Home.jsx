import React, { useEffect } from 'react'
import "./home.css"
import back from "../../../assets/back.jpg"
import about1 from "../../../assets/abouthome1.jpg"
import about2 from "../../../assets/about2.jpg"
import about3 from "../../../assets/about3.jpg"
import { Link } from 'react-router-dom'
import Best from '../Best/Best'
import Quote from '../Quote/Quote'
const Home = () => {
  useEffect(() => {
    window.scroll(0,0)
   }, [])
          return (
                    <div>
                              {/* carousel_section */}
                            <div className="imgBox">
                                      <img src={back} alt="back" srcset="" />
                            </div>

                            {/* about section */}

                            <div className="abouthome__container">
                                      <div className="abouthome__left">
                                        <div className="abouthome__left_text">
                                        <h3>Welcome to ABCD Ply</h3>
                                        <p>ABCD Plywood Pvt Ltd which is one of the renowned company engaged in the Plywood business. We deal in optimum grade of plywood range which makes us the prime Manufacturer and Exporter from India.We have a wide spectrum of ABCD company Flush Door, ABCD  Ply & ABCD Board. We are one of India’s renowned Manufacturers and Exporter dealing in the optimum grade of Plywood. We are a socially responsible company offering eco friendly Plywood.</p>
                                        <Link to="/company-profile" className="abouthome__link">Read More</Link>
                                        <div className="abouthome__left_bottompic">
                                                 <img src={about2} alt="about1" srcset="" />
                                                 <img src={about3} alt="about3" srcset="" />
                                        </div>
                                        </div>

                                      </div>
                                      <div className="abouthome__right">
                                        <img src={about1} alt="about1" srcset="" />
                                      </div>
                            </div>
                            {/* Parallex Section */}
                            <div className="parallex__container">
                                      <div className="parallex__text">
                                                <h3>We Care For Our Environment</h3>
                                                <p>We are a socially responsible company offering environmental friendly Plywood.</p>
                                      </div>
                            </div>
                            {/* why we are best */}
                            <Best/>

                            {/* Quotation */}

                            <Quote/>
                    </div>
          )
}

export default Home
