import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Study from "../Study/Study";

const Studies = () => {
    const [studies, setStudies] = useState([]);
    useEffect(()=>{
        fetch('/StudyData.JSON')
        .then(res => res.json())
        .then(data => setStudies(data))
    },[])
  return (
    <div>
      {/* studies title start */}
      <h2 className='fw-bold mt-4'>- Study in Abroad -</h2>
      <p className="w-50 mx-auto bg-white p-3 mb-5">
        Hi, You will find a list of countries below from where you can choose
        your study abroad destination. You can check the admission requirements,
        your eligibility, scholarship availability, fees and many more from
        here. Feel free to contact us for a free counselling. You are welcome
        ask us any question that you want to know.
      </p>
      {/* studies title end */}
      {/* studies start*/}
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
         {
             studies.map(study => <Study 
                key={study.key}
                study={study} ></Study>)
         }
        </Row>
      </Container>
      {/* studies start*/}
    </div>
  );
};

export default Studies;
