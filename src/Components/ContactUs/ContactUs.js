import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="my-4">
      {/* contact section start */}
      <Row>
        <Col>
          <h2>Office Address :</h2>
        </Col>
        <Col>
          <h4 className='text-info'>Study Abroad Services</h4>
          <p>
            <small>72/1, Property Rise (2nd floor),</small>
          </p>
          <p>
            <small>DIT Road, Malibagh, Mouchak,</small>
          </p>
          <p>
            <small>Dhaka – 1217, Bangladesh.</small>
          </p>
          <p>
            <small>Email: info.studyabroad@gmail.com</small>
          </p>
          <p>
            <small>Call: +88 01707073116, +88 01841073116.</small>
          </p>
          <p>
            <small>Saturday to Thursday – 10 : 30 AM – 7 : 00 PM</small>
          </p>
          <p>
            <small className='text-danger'>Friday Closed.</small>
          </p>
        </Col>
      </Row>
      {/* contact section end */}
    </Container>
  );
};

export default ContactUs;
