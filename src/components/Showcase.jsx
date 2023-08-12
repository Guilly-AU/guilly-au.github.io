import { Row, Col, Image, Container } from "react-bootstrap";
import Avatar from "../assets/emoji.gif";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Typewriter from "typewriter-effect";

function Showcase() {
  return (
    <section className="my-5">
      <Container>
        <Row className="">
          <Col
            sm="6"
            className="d-flex flex-column justify-content-center fs-2"
          >
            <Typewriter
              options={{}}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(300)
                  .typeString(`Hello, my name is<br />`)
                  .pauseFor(300)
                  .typeString(
                    `<strong><span style="color: #0d6efd;">Guillaume Damenez</span></strong><br />`
                  )
                  .pauseFor(1000)
                  .typeString(
                    'I am a <strong><span style="color: #0d6efd;">front-end web developer.</span></strong>'
                  )
                  .pauseFor(1000)
                  .deleteChars(25)
                  .typeString(
                    '<strong><span style="color: #0d6efd;">back-end web developer.</span></strong>'
                  )
                  .pauseFor(1000)
                  .deleteChars(23)
                  .typeString(
                    '<strong><span style="color: #0d6efd;font-size: 2rem">full-stack web developer!</span></strong>'
                  )
                  .start();
              }}
            />
            <div className="mx-auto my-5">
              <a
                className="pe-4"
                href="https://linkedin.com/in/guillaume-damenez-4a71b6264/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={30} color="black" />
              </a>
              <a
                href="https://github.com/Guilly-AU"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} color="black" />
              </a>
            </div>
          </Col>
          <Col sm="6">
            <Image
              src={Avatar}
              width="100%"
              alt="Guillaume Damenez"
              style={{ borderRadius: "81% 19% 90% 10% / 21% 90% 10% 79%" }}
              className="shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Showcase;
