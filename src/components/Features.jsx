import "./header.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Image1 from "./images/image7.png";
import Image2 from "./images/image8.png";
import Image3 from "./images/image9.jpg";

const Features = () => {
  return (
    <div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <Container>
          <Row>
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                PUBLISHING SUPPORT SERVICES FOR PUBLISHERS
              </h2>
              <p className="lead">
                PUBLISHING SUPPORT SERVICES FOR PUBLISHERS We provide numerous
                value-added publishing Support Services to publishers. Our
                offering for publishers includes peer review services,
                editorial, publishing and business development related to
                service. These services make it simple for publishers to manage
                the complex process of journal publication and reach out to the
                right audience to be successful.
              </p>
            </div>
            <Col xs={6} md={4}>
              <Image className="image-Feature" src={Image1} rounded />
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="featurette-divider" />

      <div className="row featurette">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image className="image-Feature" src={Image2} rounded />
            </Col>
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                BRANDING & MARKETING COMMUNICATION CONTENT DEVELOPMENT
              </h2>
              <p className="lead">
                BRANDING & MARKETING COMMUNICATION BRANDING & MARKETING
                COMMUNICATION CONTENT DEVELOPMENT Pubrica provides marketing and
                branding content development services to pharmaceutical
                companies.
              </p>
            </div>
          </Row>
        </Container>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <Container>
          <Row>
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                EDUCATIONAL CONTENT DEVELOPMENT{" "}
              </h2>
              <p className="lead">
                Pubrica provides educational content development services to
                industries, educational institutions, software developers, and
                business executives worldwide. Pubrica has provided academic
                content to several national and international universities and
                institutes.
              </p>
            </div>
            <Col xs={6} md={4}>
              <Image className="image-Feature" src={Image3} rounded />
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="featurette-divider" />
    </div>
  );
};

export default Features;
