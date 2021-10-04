import React from "react";
import { Button, Card, CardGroup, Col } from "react-bootstrap";
import './Study.css';
const Study = (props) => {
    const {flags, name, capital, region, languages, population} = props.study;
  return (
    <CardGroup className='mb-5'>
        <Col>
      <Card>
        <Card.Img className="mx-auto img" variant="top" src={flags} fluid />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              <p>languages:{languages}</p>
              <p><small>Capital:{capital}</small></p>
              <p><small>Region:{region}</small></p>
              <p><small>Population:{population}</small></p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-primary">Apply Now</Button>
    </Card.Footer>
      </Card>
    </Col>
    </CardGroup>
  );
};

export default Study;
