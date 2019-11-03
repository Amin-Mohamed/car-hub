import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler,
MDBCollapse, MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom";
class Nav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="blue" dark expand="md">
        <MDBNavbarBrand>
          <Link to="/"><h4><strong className="white-text"
          style={{ fontFamily: 'Trajan', fontWeight: 'bold' }}
          >CarHub</strong></h4></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav>
            <br />
            <MDBNavItem>
              <Link to="/"><h5 className="font-weight-bold white-text">
                <MDBIcon icon="home" fixed /> Hem </h5>
              </Link>
            </MDBNavItem>
            <br />
            <MDBNavItem>
              <Link to="/"><h5 className="font-weight-bold white-text">
                <MDBIcon icon="car-side" fixed /> Bilar för salu</h5>
              </Link>
            </MDBNavItem>
            <br />
            <MDBNavItem>
              <Link to="/"><h5 className="font-weight-bold white-text">
                <MDBIcon icon="plus-square" fixed/> Lägg till anonns</h5>
              </Link>
            </MDBNavItem>
             <br />
            <MDBNavItem>
              <Link to="/login"><h5 className="font-weight-bold white-text">
                 <MDBIcon icon="user-alt" fixed /> Logga in</h5>
              </Link>
            </MDBNavItem>
            <br />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Nav;