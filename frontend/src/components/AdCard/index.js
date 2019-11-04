import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol
} from 'mdbreact';
import { Link } from 'react-router-dom';

const AdCard = () => {
  return (
    <MDBCol>
      <br />
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <Link to="/add-car">
          <MDBBtn color="btn btn-success" className="font-weight-bold">Lägg in annons</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  )
}

export default AdCard;
