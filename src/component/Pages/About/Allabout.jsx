import React, { useEffect } from 'react'
import Header from '../../Header/Header'
import Best from '../Best/Best'
import Quote from '../Quote/Quote'
import "./allabout.css"
const Allabout = ({Heading,bottomRoute,Name,post,title,text,img}) => {
          useEffect(() => {
                   window.scrollTo(0,0)
                   }, [Name])
          return (
                    <div>
                              <Header Heading={Heading} bottomRoute={bottomRoute}/>
                              <div className="allabout_container">
                                        <div className="leftSide">
                                        <h2>{title}</h2>
                                        {text}
                                        </div>
                                        <div className="rightSide">
                                                  <img src={img} alt="" />
                                                  <p><span>{Name},</span>{post}</p>

                                        </div>
                              </div>
                              <Best/>
                              <Quote/>
                    </div>
          )
}

export default Allabout
