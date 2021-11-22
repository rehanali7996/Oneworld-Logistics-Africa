import React from 'react';
import { BrowserRouter as Router, Switch, NavLink, Link, Route, Redirect } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import './styles.css';
import AboutComponent from './about';
import Homecarousel from './main';
import ShopandShipComponent from './shop&ship';
import LoginComponent from './Login';
import ForgotPasswordComponent from './forgotPassword';
import RegisterComponent from './Register';
import DomesticComponent from './domestic';
import InternationalComponent from './international';
import RoadtoSAComponent from './roadSA';
import AirandOceanComponent from './Air&Ocean';
import CustomsComponent from './customs';
import BranchesComponent from './Branches';
import FAQComponent from './faq';
import RateComponent from './Rate_Calccomponent';

export default function NavbarComponent(){
      
        return(                                        // Integerating react-bootstrap with react-router-dom using 'as' keyword 
                <Router>
                        <Navbar expand="lg">
                                <Container fluid>
                                <Navbar.Brand href="#home"><img src="/images/logo.jpg" alt="logo" /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                        <Nav.Item>
                                                <Nav.Link as={NavLink} to="/home" exact className="nav-links" activeClassName="nav-links-active" >Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                                <Nav.Link as={NavLink} to="/about-us" exact className="nav-links" activeClassName="nav-links-active">About us</Nav.Link>
                                        </Nav.Item>                      
                                        <NavDropdown title="Services" id="basic-nav-dropdown" className="nav-links" activeClassName="nav-links-active">
                                        <NavDropdown.Item className="dropdown-item">
                                                <Nav.Link as={NavLink} to="/shopandship" exact className="nav-links-dropdown" activeClassName="nav-links-active">Shop and Ship (Online)</Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                                <Nav.Link as={NavLink} to="/domestic" exact className="nav-links-dropdown" activeClassName="nav-links-active">Domestic Courier</Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                                <Nav.Link as={NavLink} to="/international" exact className="nav-links-dropdown" activeClassName="nav-links-active">International Courier and Freight</Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                                <Nav.Link as={NavLink} to="/roadfromSA" exact className="nav-links-dropdown" activeClassName="nav-links-active">Road Freight from South Africa</Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                                <Nav.Link as={NavLink} to="/airandocean" exact className="nav-links-dropdown" activeClassName="nav-links-active">Air and Ocean Freight</Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                                <Nav.Link as={NavLink} to="/customs" exact className="nav-links-dropdown" activeClassName="nav-links-active">Customs Clearances</Nav.Link>
                                        </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Item>
                                                <Nav.Link as={NavLink} to="/branches" exact className="nav-links" activeClassName="nav-links-active">Branches, Agents and Contact Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                                <Nav.Link as={NavLink} to="/faq" exact className="nav-links" activeClassName="nav-links-active">FAQs</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                                <Nav.Link as={NavLink} to="/rate" exact className="nav-links" activeClassName="nav-links-active">Rate Calculator</Nav.Link>
                                        </Nav.Item>
                                </Nav>
                                <Nav className="justify-content-end" >
                                        <Nav.Item className="p-2">
                                                <Link to="/login">
                                                <Button variant="custom" size="lg" active>Login</Button>
                                                </Link>
                                        </Nav.Item>
                                        <Nav.Item className="p-2">
                                                <Link to="/register">
                                                <Button variant="custom" size="lg" active>Register</Button>
                                                </Link>
                                        </Nav.Item>
                                </Nav>
                                </Navbar.Collapse>
                                </Container>
                        </Navbar>
                        <Switch>
                                <Route exact path="/">
                                        <Homecarousel/>
                                </Route>
                                <Route path="/home">
                                        <Redirect to="/" />                                        
                                </Route>
                                <Route path="/about-us">
                                        <AboutComponent/>
                                </Route>   
                                <Route path="/shopandship">
                                        <ShopandShipComponent/>
                                </Route>   
                                <Route path="/domestic">
                                        <DomesticComponent/>
                                </Route>
                                <Route path="/international">
                                        <InternationalComponent/>
                                </Route>
                                <Route path="/roadfromSA">
                                       <RoadtoSAComponent/>
                                </Route>
                                <Route path="/airandocean">
                                       <AirandOceanComponent/>
                                </Route>
                                <Route path="/customs">
                                       <CustomsComponent/>
                                </Route>
                                <Route path="/branches">
                                       <BranchesComponent/>
                                </Route>
                                <Route path="/faq">
                                       <FAQComponent/>
                                </Route>
                                <Route path="/rate">
                                       <RateComponent/>
                                </Route>
                                <Route path="/login">
                                        <LoginComponent/>
                                </Route>    
                                <Route path="/forgotPass">
                                        <ForgotPasswordComponent/>
                                </Route>   
                                <Route path="/register">
                                        <RegisterComponent/>
                                </Route>  
                                                
                        </Switch>                        
                </Router>                
        )
}