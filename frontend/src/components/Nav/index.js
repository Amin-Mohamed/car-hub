import React from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler,
MDBCollapse, MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isLoggedIn: false
    };

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

handleLogoutClick() {
  Cookies.remove('access_token');
}

componentDidMount() {
  if (Cookies.get('access_token')) {
    this.setState({
      isLoggedIn: true
    })
  }
}

render() {
  const isLoggedIn = this.state.isLoggedIn;
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
              <Link to="/add-car"><h5 className="font-weight-bold white-text">
                <MDBIcon icon="plus-square" fixed/> Lägg till anonns</h5>
              </Link>
            </MDBNavItem>
             <br />
            <MDBNavItem>

              {isLoggedIn ? (
              <Link to="/login" onClick={this.handleLogoutClick} ><h5 className="font-weight-bold white-text">
                 <MDBIcon icon="user-alt" fixed /> Logga ut</h5>
              </Link>
              ) : (
              <Link to="/login"><h5 className="font-weight-bold white-text">
                 <MDBIcon icon="user-alt" fixed /> Logga in</h5>
              </Link>
              )}

            </MDBNavItem>
            <br />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Nav;
