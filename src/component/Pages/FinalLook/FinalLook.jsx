import React from 'react'
import "./finallook.css"
const FinalLook = ({ finaldata}) => {
          return (
                    <div>
                            <div className="finallook__container">
                                      <h2>Final Look</h2>
                                      <div className="finallookcard_container">
                                                { finaldata.map((item,i)=>(
                                                <div className="finallookcard" key={i}>
                                                  <img src={item.img} alt="final1"/>
                                                </div>
                                                ))}
                                      </div>
                            </div>
                    </div>
          )
}

export default FinalLook
