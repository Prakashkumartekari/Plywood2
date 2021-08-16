import React from 'react'
import { Link } from 'react-router-dom'
import "./quote.css"

const Quote = () => {
          return (
                    <div>
                              <div className="quotation__container">
                                        <p>Request a Quote</p>
                                        <Link to="/enquiry" className="quote__link" >Quotation</Link> 
                              </div>
                    </div>
          )
}

export default Quote
