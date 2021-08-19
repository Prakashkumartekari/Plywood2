import React from 'react'
import "./features.css"
const Features = ({data}) => {
          return (
                    <div>
                              <div className="features_container">
                                        <h2>Features</h2>
                                        <div className="cardWrap">
                                        {data.map(item=>(
                                        <div className="feature_card" key={item.name}>
                                                  <img src={item.img} alt={item.name} />
                                                  <p>{item.name}</p>
                                        </div>
                                        ))}
                                        </div>
                              </div>
                    </div>
          )
}

export default Features
