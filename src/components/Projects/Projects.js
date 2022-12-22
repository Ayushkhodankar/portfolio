import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import pizza from "../../Assets/Projects/pizza.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Product-Manager"
              description="A web application to perform basic CRUD operations in Java-Spring Boot which is developed in Spring Tool Suite(STS) v3.9.10 ."
              ghLink="https://github.com/Ayushkhodankar/ProductManager-Basic"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Alert"
              description="A proposed bed booking web application can be used by the hospitals for booking the beds in the emergency cases where users can book beds for the patients in case of emergency. This web application is totally developed in Java(Servlets & JSPs),MySQL & locally hosted on Apache Tomcat Server-7  ."
              ghLink="https://github.com/Ayushkhodankar/Bed-Booking-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Medico"
              description="An appointment system for the patients for booking the appointments to the doctors along with the doctor dashboard for the queries and appointments of the patients.Java Servlets & JSPs are used to develop the website ,MySQL used to save data locally and Apache Tomcat Server to locally host the website. "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Hut'N Gut"
              description="A mobile application build with Andriod Studio-Java to order pizzas. In this app the customers can order there own customized pizza according to their requirements."
              ghLink="https://github.com/Ayushkhodankar/Hut-N-Gut-PizzaStore"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FootStore"
              description="This web application raises tickets for the issues discovered by the customers and session tracking is integrated along with this website and this website is builded with Java-Servlets & JSPs and locally hosted on Tomcat-7 Server. "
              ghLink="https://github.com/Ayushkhodankar/Footwear"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
