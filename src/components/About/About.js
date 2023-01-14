import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import image from "../../Assets/image.png";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";
import GitHubCalendar from "react-github-calendar";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={image}
              style-prop-object="20px"
              alt="about"
              className="img-fluid"
            />
          </Col>
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
                    Hello, I am <span className="red">Ayush Khodankar</span> a
                    bachelor's student in{" "}
                    <span className="red">Information Technology </span>
                    graduating from R.T.M.Nagpur University from
                    <span className="red"> Nagpur, India</span>.
                    <br />
                    <br />
                    I have completed my certifications in Java Full Stack
                    Development & Front-End Web Development . I am currently
                    learning MERN Stack Development & Cloud Services.
                    <br />
                    <br />
                    This is my personal website which I have created to present
                    the skills which I have aquired while learning and the
                    projects developed. Given below are the listed tools and
                    stacks which have worked with :
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 className="project-heading">Skillsets Aquired</h1>

        <Techstack />

        <h1 className="project-heading">Tools Familier With</h1>
        <Toolstack />

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Contributed Days To Code
          </h1>
          <GitHubCalendar
            username="Ayushkhodankar"
            blockSize={15}
            blockMargin={5}
            color="rgb(30, 152, 10)"
            fontSize={16}
          />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
