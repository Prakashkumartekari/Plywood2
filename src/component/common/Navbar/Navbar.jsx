import { AppBar, Collapse, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Paper, Toolbar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { NavLink, Redirect,} from "react-router-dom";
import logo from "../../../assets/logo2.png";     
import "./navbar.css";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [aboutarrow, setAboutarrow] = useState(false)
  const [productarrow, setProductarrow] = useState(true)
  const [open, setOpen] = useState(false)
  const handleScroll = (e) => {
    if (window.pageYOffset > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const handleclose =()=>setOpen(false)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const style1= {
    height:"50px",
    transition:"height 0.5s"
  }
  const style2 = {
    height:"60px",
    transition:"height 0.5s",
    
  }
  return (
    <div>
      <AppBar className="Navbar" style={scrollNav?{padding:".5rem",transition:"all 0.5s",backgroundColor:"#fff"}:{padding:"1rem",transition:"all 0.5s",backgroundColor:"rgba(0,0,0,0.5)"}}>
        <Toolbar>
          <div className="Navbar__brand">
            <img src={logo} alt="logo" style={scrollNav?style1:style2}/>
          </div>
          <Hidden smDown>
            <div className="Navbar__link">
              <ul>
                <li>
                  <NavLink
                  onClick={()=>handleclose()}
                    className={scrollNav ? "navLink_scroll" : "navLink"}
                    exact
                    to="/"
                    activeClassName="navActive"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  onClick={()=>handleclose()}
                    className={scrollNav ? "navLink_scroll" : "navLink"}
                    exact
                    to="/company-profile"
                    activeClassName="navActive"
                  >
                    About
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/company-profile"
                        activeClassName="navActive"
                      >
                        Company Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/Chairman-message"
                        activeClassName="navActive"
                      >
                        Chairman Message
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li style={{transition:"all 0.5s"}}>
                  <NavLink
                  onClick={()=>handleclose()}
                    className={scrollNav ? "navLink_scroll" : "navLink"}
                    exact
                    to={Redirect("/")}
                    activeClassName="navActive"
                  >
                    Products
                  </NavLink>
                  <ul style={{transition:"all 0.5s"}}>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/commercial-ply"
                        activeClassName="navActive"
                      >
                        Commercial Ply
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/mr-grade-ply"
                        activeClassName="navActive"
                      >
                        MR Grade Plywood
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/waterproof-ply"
                        activeClassName="navActive"
                      >
                        Waterproof Ply
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/shuttering-ply"
                        activeClassName="navActive"
                      >
                        Shuttering Ply
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/block-board"
                        activeClassName="navActive"
                      >
                        Block Board
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/flush-doors"
                        activeClassName="navActive"
                      >
                        Flush Door
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/laminated-door"
                        activeClassName="navActive"
                      >
                        Laminated Door
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>handleclose()}
                        className="submenu"
                        exact
                        to="/teak-doors"
                        activeClassName="navActive"
                      >
                        Teak Door
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                  onClick={()=>handleclose()}
                    className={scrollNav ? "navLink_scroll" : "navLink"}
                    exact
                    to="/gallery"
                    activeClassName="navActive"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  onClick={()=>handleclose()}
                    className={scrollNav ? "navLink_scroll" : "navLink"}
                    exact
                    to="/enquiry"
                    activeClassName="navActive"
                  >
                    Enquiry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  onClick={()=>handleclose()}
                    className={scrollNav ? "navLink_scroll" : "navLink"}
                    exact
                    to="/contact"
                    activeClassName="navActive"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className="menuicon" >
              <IconButton style={scrollNav?{color:"orange"}:{color:"white"}} onClick={()=>setOpen(true)}>
            <MenuOutlinedIcon fontSize="large"/>
              </IconButton>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer 
      open={open} 
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      style={{height:"100vh",}}
      onClose={()=>handleclose()}
      >
      <Paper elevation={2}>
            <img src={logo} alt="logo" style={{height:90,objectFit:"contain",padding:"1rem"}}/>
            </Paper>
            <div className="mobileNav__list">
          <List
          component="nav"
          >
            <ListItem button>
            <NavLink
            onClick={()=>handleclose()}
                    className="drawerNav"
                    exact
                    to="/"
                    activeClassName="mobilenavActive"
                  >
                    Home
                  </NavLink>
            </ListItem>  
                  <Divider/>
            <ListItem button onClick={()=>setAboutarrow(!aboutarrow)} className="drawerNav">
            <ListItemText primary="About" style={aboutarrow?{color:"#EF7F1B"}:null}/>
            {aboutarrow? <ExpandLess /> : <ExpandMore />}
            </ListItem> 
            <Divider/>
            <Collapse in={aboutarrow} timeout="auto" unmountOnExit>
              <List  component="div" disablePadding style={{marginLeft:"1rem"}}>
                <ListItem>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/company-profile"
                        activeClassName="mobilenavActive"
                      >
                        Company Profile
                      </NavLink>
                </ListItem>
                <ListItem>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/Chairman-message"
                        activeClassName="mobilenavActive"
                      >
                        Chairman Message
                      </NavLink>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={()=>setProductarrow(!productarrow)} className="drawerNav">
            <ListItemText primary="Product" style={productarrow?{color:"#EF7F1B"}:null}/>
            {productarrow? <ExpandLess /> : <ExpandMore />}
            </ListItem> 
            <Divider/>
            <Collapse in={productarrow} timeout="auto" unmountOnExit>
              <List  component="div" disablePadding style={{marginLeft:"1rem"}}>
                <ListItem button>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav "
                        exact
                        to="/commercial-ply"
                        activeClassName="mobilenavActive"
                      >
                        Commercial Ply
                      </NavLink>
                </ListItem>
                <ListItem button>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/mr-grade-ply"
                        activeClassName="mobilenavActive"
                      >
                        MR Grade Plywood
                      </NavLink>
                </ListItem>
                <ListItem button>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/waterproof-ply"
                        activeClassName="mobilenavActive"
                      >
                        Waterproof Ply
                      </NavLink>
                </ListItem>
                <ListItem button>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/shuttering-ply"
                        activeClassName="mobilenavActive"
                      >
                        Shuttering Ply
                      </NavLink>
                </ListItem>
                <ListItem button>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/block-board"
                        activeClassName="mobilenavActive"
                      >
                        Block Board
                      </NavLink>
                </ListItem> 
                <ListItem button>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/flush-doors"
                        activeClassName="mobilenavActive"
                      >
                        Flush Door
                      </NavLink>
                </ListItem> 
                <ListItem button>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/laminated-door"
                        activeClassName="mobilenavActive"
                      >
                        Laminated Door
                      </NavLink>
                </ListItem> 
                <ListItem button>
                <NavLink
                onClick={()=>handleclose()}
                        className="drawerNav"
                        exact
                        to="/teak-doors"
                        activeClassName="mobilenavActive"
                      >
                        Teak Door
                      </NavLink>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
            <NavLink
            onClick={()=>handleclose()}
                    className="drawerNav"
                    exact
                    to="/gallery"
                    activeClassName="mobilenavActive"
                  >
                    Gallery
                  </NavLink>
            </ListItem>
            <Divider/>
            <ListItem button>
            <NavLink
            onClick={()=>handleclose()}
                    className="drawerNav"
                    exact
                    to="/enquiry"
                    activeClassName="mobilenavActive"
                  >
                    Enquiry
                  </NavLink>
            </ListItem>
            <Divider/>
        <ListItem button>
        <NavLink
        onClick={()=>handleclose()}
                    className="drawerNav"
                    exact
                    to="/contact"
                    activeClassName="mobilenavActive"
                  >
                    Contact Us
                  </NavLink>
        </ListItem>
          </List>
          </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
