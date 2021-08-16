import React from 'react'
import {Route,Switch} from "react-router-dom"
import Footer from './component/common/Footer/Footer'
import Navbar from './component/common/Navbar/Navbar'
import About from './component/Pages/About/About'
import Contact from './component/Pages/Contact/Contact'
import Gallery from './component/Pages/Gallery/Gallery'
import Home from './component/Pages/Home/Home'
import "./App.css"
import Product from './component/Pages/Products/Product'
import Allabout from './component/Pages/About/Allabout'
import { AboutData } from './Data/AboutData'
import AllProduct from './component/Pages/Products/AllProduct'
import { Nav,commercialPlyfinal, productdata, commercialPlyfeatureData, mrgradePlyfinal, waterProofPlyfeatureData, WaterprofPlyfinal, shutteringPlyfeatureData, shutteringPlyfinal, blockboardPlyfinal,flushdoorPlyfinal, flushdoorPlyfeatureData, laminatedoorPlyfinal, teakdoorPlyfinal } from './Data/FeaturesData'
import Enquiry from './component/Pages/Enquiry/Enquiry'



const App = () => {

  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/gallery" component={Gallery}/>
    <Route exact path="/product" component={Product}/> 
    <Route exact path="/enquiry" component={Enquiry}/> 

    <Route exact path="/company-profile">
      <Allabout 
      Heading={AboutData.companyProfile.heading} 
      bottomRoute="About Us" 
      text={AboutData.companyProfile.text} 
      title={AboutData.companyProfile.title}
      img={AboutData.companyProfile.img}
      />
    </Route> 

    <Route exact path="/Chairman-message">
      <Allabout 
      Heading={AboutData.ChairmanMessage.heading} 
      bottomRoute="About Us" 
      text={AboutData.ChairmanMessage.text} 
      title={AboutData.ChairmanMessage.title}
      Name={AboutData.ChairmanMessage.Name}
      img={AboutData.ChairmanMessage.img}
      post={AboutData.ChairmanMessage.post}
      />
    </Route>


    {/* All product */}
    <Route exact path="/commercial-ply">
    <AllProduct 
     data={commercialPlyfeatureData}
     Heading={Nav.commercialPly.name}
     bottomRoute="Product's"
     finaldata={commercialPlyfinal}
     productdata={productdata.commercial}
     />
    </Route> 
    <Route exact path="/mr-grade-ply">
    <AllProduct 
     data={commercialPlyfeatureData}
     Heading={Nav.mrgradeply.name}
     bottomRoute="Product's"
     finaldata={mrgradePlyfinal}
     productdata={productdata.mrgrade}
     />
    </Route> 
    <Route exact path="/waterproof-ply">
    <AllProduct 
     data={waterProofPlyfeatureData}
     Heading={Nav.waterproof.name}
     bottomRoute="Product's"
     finaldata={WaterprofPlyfinal}
     productdata={productdata.waterproof}
     />
    </Route> <Route exact path="/shuttering-ply">
    <AllProduct 
     data={shutteringPlyfeatureData}
     Heading={Nav.shutteringply.name}
     bottomRoute="Product's"
     finaldata={shutteringPlyfinal}
     productdata={productdata.shuttringply}
     />
    </Route> <Route exact path="/block-board">
    <AllProduct 
     data={commercialPlyfeatureData}
     Heading={Nav.blockboard.name}
     bottomRoute="Product's"
     finaldata={blockboardPlyfinal}
     productdata={productdata.blockboard}
     />
    </Route> <Route exact path="/flush-doors">
    <AllProduct 
     data={flushdoorPlyfeatureData}
     Heading={Nav.flushdoor.name}
     bottomRoute="Product's"
     finaldata={flushdoorPlyfinal}
     productdata={productdata.flushdoor}
     />
    </Route> 
    <Route exact path="/laminated-door">
    <AllProduct 
     data={flushdoorPlyfeatureData}
     Heading={Nav.laminatedoor.name}
     bottomRoute="Product's"
     finaldata={laminatedoorPlyfinal}
     productdata={productdata.laminnate}
     />
    </Route>
    <Route exact path="/teak-doors">
    <AllProduct 
     data={flushdoorPlyfeatureData}
     Heading={Nav.teakdoor.name}
     bottomRoute="Product's"
     finaldata={teakdoorPlyfinal}
     productdata={productdata.teakdoor}
     />
    </Route>
    </Switch>
    <Footer/>
    </>
    
  )
}

export default App
