import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import img from "../../Assets/img.json";
import Toolstack from "./Toolstack";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";
import GitHubCalendar from "react-github-calendar";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Khodankar </span>
            from <span className="purple"> Nagpur, India</span>
            <br />I am a final year undergraduate in Information Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={img} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Skillsets Aquired
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Tools Familier With
        </h1>
        <Toolstack />

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Contributed Days To Code
      </h1>
      <GitHubCalendar
        username="Ayushkhodankar"
        blockSize={15}
        blockMargin={5}
        color="#EE2525"
        fontSize={16}
      />
    </Row>
      </Container>
    </Container>
  );
}

export default About;
