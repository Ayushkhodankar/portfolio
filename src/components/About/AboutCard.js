import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
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
            {/* <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Reading Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Failure is the chapter before success!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
