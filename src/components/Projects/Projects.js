import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import footstore from "../../Assets/Projects/footstore.png";
import ealert from "../../Assets/Projects/ealert.png";
import pizza from "../../Assets/Projects/pizza.png";
import medico from "../../Assets/Projects/medico.png";
import promanager from "../../Assets/Projects/promanager.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promanager}
              isBlog={false}
              title="Product-Manager"
              description="A web application to perform basic CRUD operations in Java-Spring Boot which is developed in Spring Tool Suite(STS) v3.9.10 along with connection with MySQL for data management."
              ghLink="https://github.com/Ayushkhodankar/ProductManager-Basic"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ealert}
              isBlog={false}
              title="E-Alert"
              description="A proposed bed booking web application can be used by the hospitals for booking the beds in the emergency cases where users can book beds for the patients in case of emergency. This web application is totally developed in Java(Servlets & JSPs),MySQL & locally hosted on Apache Tomcat Server-7  ."
              ghLink="https://github.com/Ayushkhodankar/Bed-Booking-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medico}
              isBlog={false}
              title="Medico"
              description="An appointment system for the patients for booking the appointments to the doctors along with the doctor dashboard for the queries and appointments of the patients.Java Servlets & JSPs are used to develop the website ,MySQL used to save data locally and Apache Tomcat Server to locally host the website. "
              ghLink="https://github.com/Ayushkhodankar/AppointmentSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Hut'N Gut"
              description="A mobile application build with Andriod Studio-Java to order pizzas. In this app the customers can order there own customized pizza according to their requirements."
              ghLink="https://github.com/Ayushkhodankar/Hut-N-Gut-PizzaStore"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={footstore}
              isBlog={false}
              title="FootStore"
              description="This web application raises tickets for the issues discovered by the customers and session tracking is integrated along with this website and this website is builded with Java-Servlets & JSPs and locally hosted on Tomcat-7 Server. "
              ghLink="https://github.com/Ayushkhodankar/Footwear"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
