import React, { useEffect } from 'react'
import Header from '../../Header/Header'
import Features from '../Features/Features'
import FinalLook from '../FinalLook/FinalLook'
import "./allproduct.css"
const AllProduct = ({data,bottomRoute, Heading, finaldata,productdata}) => {
          useEffect(() => {
                    window.scroll(0,0)
                   }, [Heading])
          return (
                    <div>
                              <Header bottomRoute={bottomRoute}  Heading={ Heading}/>
                              <div className="allproduct__container">
                              <div className="allproduct_leftside">
                                        <h3>{Heading}</h3>
                                        <p>{productdata.text}</p>
                                        <h4>Tpyes</h4>
                                        <p>{productdata.typestext}</p>
                              </div>
                              <div className="allproduct_rightside">
                                        <img src={productdata.img} alt="com1"  />
                              </div>
                              </div>
                              <Features data={data}/>
                              <FinalLook finaldata={finaldata}/>
                    </div>
          )
}

export default AllProduct
