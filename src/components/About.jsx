import { Col, Container, Row, Image, ProgressBar } from "react-bootstrap";
import imgTest from "../assets/scren-dev.webp";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiBootstrap,
} from "react-icons/si";

function About() {
  const skills = [
    {
      technology: "html",
      achievement: 90,
      Icon: SiHtml5,
    },
    {
      technology: "Css",
      achievement: 90,
      Icon: SiCss3,
    },
    {
      technology: "JavaScript",
      achievement: 80,
      Icon: SiJavascript,
    },
    {
      technology: "React",
      achievement: 80,
      Icon: SiReact,
    },
    {
      technology: "Bootstrap",
      achievement: 70,
      Icon: SiBootstrap,
    },
    {
      technology: "Node.js",
      achievement: 70,
      Icon: SiNodedotjs,
    },
  ];
  return (
    <section id="about" className="py-5 bg-myPrimaryLight">
      <Container>
        <div className="title-holder">
          <h2 className="fs-1 text-center">About me</h2>
          <h3 className="subtitle mb-4 mt-5 opacity-50">My bio</h3>
          <p>
            Formerly a senior technician in maintenance, I've embarked on an
            exciting journey to become a junior full-stack web developer. My
            previous path has equipped me with meticulous precision and expert
            problem-solving, skills that I'm now translating into web
            development.
          </p>
          <p>
            My skills encompass React, Node.js, Express, CSS, HTML, JavaScript
            and more. I'm eager to craft interactive interfaces while building
            robust server-side functionalities. This transition stems from my
            appetite for learning and my drive to contribute meaningfully to
            innovative projects.
          </p>
          <p>
            My diverse experience gives me a unique edge in approaching web
            development. I'm thrilled to collaborate with creative minds to
            create impactful digital solutions.
          </p>
          <h3 className="subtitle mb-4 mt-5 opacity-50">My skills</h3>
        </div>

        <Row>
          <Col md="5" className="my-auto">
            <Image
              src={imgTest}
              className="shadow-lg mb-3"
              rounded
              alt="code"
              width="100%"
            />
          </Col>
          <Col md="7">
            {skills.map((list, i) => (
              <div className="progress-block mb-1" key={i}>
                <h4 className="">
                  <list.Icon color="primary" className="mx-3" />
                  {list.technology}
                </h4>
                <ProgressBar
                  className="bg-white"
                  animated
                  now={list.achievement}
                  label={`${list.achievement}%`}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
