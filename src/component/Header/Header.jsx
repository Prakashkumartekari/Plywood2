import React from 'react'
import "./header.css"
const Header = ({Heading,bottomRoute}) => {
          return (
                    <div className="header">
                              <h1>{Heading}</h1>
                              <p>Home - <span>{bottomRoute} - {Heading}</span></p>
                    </div>
          )
}

export default Header
