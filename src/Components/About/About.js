import React from "react";
import { Accordion, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      {/* about title start */}
      <h2 className='fw-bold mt-4'>- About Us -</h2>
      <p>
        Being the best education consultancy firm we make sure that our students
        get what they deserve.
      </p>
      {/* about title end */}
      {/* our story start */}
      <Container className="my-5">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3 className='mb-3'>Our Story</h3>
                </Card.Title>
                <Card.Text>
                  <p>
                    Yatra Education Services (YES) is a reliable and one of the
                    best education consultancy firm in Dhaka. We provide easy
                    and hassle free services to the students who wants to study
                    abroad. Students can apply for programs like Diploma,
                    Bachelor or Master’s. We process for countries like Canada,
                    UK, USA, Australia, Sweden, Hungary, Malta, Netherlands,
                    China, Malaysia, India and many more. Our student is our
                    first priority. Through our services we help students to -
                  </p>
                  <ListGroup>
                    <ListGroup.Item>
                      Select their desired course or program,
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Select a good ranked University,
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Arrange Hostel or Accommodation in the foreign country,
                    </ListGroup.Item>
                    <ListGroup.Item>Arrange scholarships,</ListGroup.Item>
                    <ListGroup.Item>
                      Embassy Interview Training and Visa processing services.
                    </ListGroup.Item>
                  </ListGroup>
                  <p>
                    We help our students to get Full or partial scholarship
                    depending on their academic achievements. After all studying
                    abroad is costly so you can contact us for any kind of help.
                    You are also welcome to visit our office for further
                    information and application.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* our story end */}
          </Col>
          {/*  students Say start */}
          <Col className="mt-3">
            <h3 className='mb-4'>What Our Students Say</h3>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Fardeen Chowdhury</Accordion.Header>
                <Accordion.Body>
                I want to take a moment to celebrate and acknowledge each and every step that I had gone through with Yatra Education Services regarding my studying abroad. And yes the journey was an incredible one, something I can’t thank them enough for. Their endless efforts and infinite cooperation took me a step closer into getting my Canadian Study Permit in a very short period of time. Thank you for the humble service and may the success of many other aspiring students like me reach greater heights with Yatra Education Services by their side.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Zahid Hasan</Accordion.Header>
                <Accordion.Body>
                This is the best education consultancy firm and i recommend them. I have received my student visa for Hungary and Yatra Education Services team provided me full support . I have received all the supports like admission to visa interview training, bank support and every guidance from them. Yatra Education Services is a reliable consultancy firm for student visa processing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Razaul Karim</Accordion.Header>
                <Accordion.Body>
                Study education services is a trusted and number 1 student consultancy firm in Dhaka. Thank you so much for the guidelines which helped me to secure my student visa. I am grateful to Mr. John for his support. I recommend every students to visit their office at least once before applying somewhere.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Parvez Ahmed</Accordion.Header>
                <Accordion.Body>
                Yatra Education Services is one of the best place for those who want to study abroad. Their working structure is very good and transparent, they don't make any hidden charges. I am satisfied with their cordial service, and also they helped me to make the most wise decision ever. I recommend others to visit Yatra Education Service before taking any decision, I am sure that they could able to make the most better decisions before invest in dreams 🦋🦋.... 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Ratul Hasan</Accordion.Header>
                <Accordion.Body>
                Study education services is a trusted and number 1 student consultancy firm in Dhaka. Thank you so much for the guidelines which helped me to secure my student visa. I am grateful to Mr. John for his support. I recommend every students to visit their office at least once before applying somewhere.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/*  students Say end */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
<h2>this is about</h2>;
