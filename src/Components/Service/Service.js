import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useHistory } from "react-router";


const Service = (props) => {
  const history = useHistory();
  const hendelClick = () =>{
    history.push('/study')
  }
  console.log(props);
  const { serviesr, img, point1, point2, point3, point4, point5 } =
    props.service;
  return (
    <Col>
    {/* service card start */}
      <Card>
        <Card.Img className='w-75 mx-auto' variant="top" src={img} fluid/>
        <Card.Body>
          <Card.Title className='fw-bold'>{serviesr}</Card.Title>
          <Card.Text>
            <ListGroup>
              <ListGroup.Item>{point1}</ListGroup.Item>
              <ListGroup.Item>{point2}</ListGroup.Item>
              <ListGroup.Item>{point3}</ListGroup.Item>
              <ListGroup.Item>{point4}</ListGroup.Item>
              <ListGroup.Item>{point5}</ListGroup.Item>
            </ListGroup>
            <Button onClick={hendelClick} variant="outline-primary mt-3">Go Study</Button>
          </Card.Text>
          
        </Card.Body>
      </Card>
      {/* service card end */}
    </Col>
  );
};

export default Service;
<div>
  <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</div>;
