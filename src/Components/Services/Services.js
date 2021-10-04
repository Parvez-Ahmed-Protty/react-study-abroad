import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/ServicesData.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
  return (
    <div className="mt-5 my-5">
      {/* services title */}
      <h2 className='text-center mb-4 fw-bold'>- Our Services -</h2>
      {/* services container start */}
      <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
      {
          services.map(service => <Service 
            key={service.id}
            service={service}></Service>)
      }
      </Row>
      </Container>
      {/* services container end */}
    </div>
  );
};

export default Services;
