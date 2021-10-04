import React from "react";
import { Container, Image } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      {/* Banner section start */}
      <Image src="./banner.png" fluid />
      <Container className="my-4 bg-white p-4">
        <h2 className="text-center fw-bold">- Study Abroad -</h2>
        <p className="w-50 mx-auto">
          Study Abroad Services (YES) is one of the best education
          consultancy firm in Dhaka, Bangladesh. We offer higher education
          opportunities to the students who wants to study abroad from
          Bangladesh. So, students can apply for Bachelor or Masters program in
          countries like Canada, UK, Sweden, Hungary, Malta, Malaysia, China and
          many more.
        </p>
      </Container>
      {/* Banner section end */}
    </div>
  );
};

export default Banner;
