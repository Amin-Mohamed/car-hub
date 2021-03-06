import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAlert} from 'mdbreact';
import { Link, Redirect } from "react-router-dom";
class LoginFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    email: '',
    password: '',
    redirect: false,
    isLoggedIn: false,
    hasClicked: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.loginAuthentication();
    setTimeout(() => {
      this.setState({
        hasClicked: true
      })
    }, 200);
  }

  loginAuthentication = () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:5000/users/auth', user)
      .then(response => {
        console.log(response.data)
        if (response.status === 200) {
          this.setState({
            isLoggedIn: true
          })
          const token = response.data.token
          const userId = response.data.user.id
          // Save token as Cookies //expires in one hour
          const expires = (token.expires_in || 60 * 60) * 1000
          const inOneHour = new Date(new Date().getTime() + expires)
          Cookies.set('access_token', token, {
            expires: inOneHour
          });
          Cookies.set('userId', userId, {
            expires: inOneHour
          });
          this.setState({
            redirectTo: '/'
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const hasClicked = this.state.hasClicked;

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <MDBContainer>
          { !isLoggedIn && hasClicked ? (
          <MDBAlert color="danger">
            Fel E-post eller lösenord
          </MDBAlert>
          ): ''}
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.onSubmit}>
              <h3 className="my-3">
                <strong className = "font-weight-bold " >
                  Logga in på ditt konto </strong>
              </h3>
              <br />
              <br />
              <label htmlFor="email" className="dark-grey-text">
                E-post
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                required={true}
              />
              <br />
              <label htmlFor="password" className="dark-grey-text">
                Lösenord
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                autoComplete="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                required={true}
              />
              <div className="text-center mt-4">
                <MDBBtn color="btn btn-success" type="submit" className="font-weight-bold">logga in</MDBBtn>
              </div>
              <br />
              <p className="grey-text d-flex justify-content-center">
                Ny kund?
                <Link to="/sign-up" className="dark-grey-text font-weight-bold ml-1">
                Registrera dig och skapa ett konto
                </Link>
              </p>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginFrom;
