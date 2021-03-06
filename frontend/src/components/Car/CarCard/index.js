import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle,MDBCardText, MDBCol, MDBListGroupItem, MDBRow}
from 'mdbreact';
import './CarCard.css'
class CarCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

     };
  }

  render() {
    let fullDate = this.props.carCard.updatedAt;
    let date = fullDate.substr(0, 10);

    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBRow className="mb-4">
            <MDBCol md="4">
              <img src={`http://localhost:5000/uploads/${this.props.carCard.carImage}`} className="img-fluid" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBCardBody>
            <MDBCardTitle>{this.props.carCard.adTitle}</MDBCardTitle>
            <MDBCardText>
              {this.props.carCard.adDescription}
            </MDBCardText>
              <MDBListGroupItem className="d-flex">
                Inlagd : {date}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Pris: {this.props.carCard.price} SEK</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Typ av bil: {this.props.carCard.carCategory}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Märke: {this.props.carCard.carBrand}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Modellår: {this.props.carCard.carModelYear}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Drivmedel: {this.props.carCard.carFuel}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Växellåda: {this.props.carCard.gearbox}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Miltal: {this.props.carCard.mileage}</MDBListGroupItem>
              <MDBListGroupItem className="d-flex">
                Plats: {this.props.carCard.location}</MDBListGroupItem>
              <MDBListGroupItem className="hidden">
                Id: {this.props.carCard._id}</MDBListGroupItem>
                <Link to={'/car-card/' + this.props.carCard._id}>
                  <MDBBtn
                   type="submit" className="font-weight-bold button-color">
                    hantera annons
                  </MDBBtn>
                </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default CarCard;

