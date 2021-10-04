import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white">
      {/* footer start */}
      <div className='d-flex align-items-center justify-content-around'>
      <h4 className=' py-4'>Follow Us on Social Media</h4>
      <div className='fs-3'>
      <i className="fa fa-facebook me-4" aria-hidden="true"></i>
      <i className="fa fa-instagram me-4" aria-hidden="true"></i>
      <i className="fa fa-linkedin me-4" aria-hidden="true"></i>
      <i className="fa fa-twitter me-4" aria-hidden="true"></i>
      </div>
      </div>
      {/* footer end */}
    </Container>
  );
};

export default Footer;
