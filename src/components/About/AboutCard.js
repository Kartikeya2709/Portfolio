import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kartikeya Sharma </span>
            from <span className="purple"> Delhi , India.</span>
            <br />
            I am currently pursuing M.C.A at Amity Uiversity.
            <br />
            I have done B.C.A from Sirifort Institute Of Management Studies.
            Also had done schooling from St.Xavier`s Senior Secondary School Delhi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kartikeya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
