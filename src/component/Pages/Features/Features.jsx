import React from 'react'
import "./features.css"
const Features = ({data}) => {
          return (
                    <div>
                              <div className="features_container">
                                        <h2>Features</h2>
                                        <div className="cardWrap">
                                        {data.map(item=>(
                                        <div className="feature_card">
                                                  <img src={item.img} alt="" />
                                                  <p>{item.name}</p>
                                        </div>
                                        ))}
                                        </div>
                              </div>
                    </div>
          )
}

export default Features
