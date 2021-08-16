import React from 'react'
import image1 from "../../../assets/raw-material-1.png"
import image2 from "../../../assets/advanced-infra-1.png"
import image3 from "../../../assets/manpower-1.png"
import image4 from "../../../assets/cost-effective-1.png"
import "./best.css"
const Best = () => {
          return (
                    <div>
                              <div className="best__container">
                                        <h2>Why We Are Best</h2>

                                        <div className="best__card_container">
                                                  <div className="best__card">
                                                            <img src={image1} alt="Raw Materials" />
                                                            <p>Raw Materials</p>
                                                  </div>
                                                   <div className="best__card">
                                                            <img src={image2} alt="Advance Infra" />
                                                            <p>Advance Infra</p>
                                                  </div>
                                                  <div className="best__card">
                                                            <img src={image3} alt="Skilled Manpower" />
                                                            <p>Skilled Manpower</p>
                                                  </div> 
                                                  <div className="best__card">
                                                            <img src={image4} alt="Competitive Price" />
                                                            <p>Competitive Price</p>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}

export default Best
