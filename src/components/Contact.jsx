import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import imgContact from "../assets/contact-me.jpg";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-myPrimaryLight">
      <Container>
        <div className="title-holder">
          <h2 className="fs-1 text-center">Contact</h2>
          <h3 className="subtitle mb-4 mt-5 opacity-50">Keep in touch</h3>
        </div>
        <Form>
          <Row>
            <Col className="" lg={6}>
              <Image
                src={imgContact}
                rounded
                className="shadow-lg object-fit-cover"
                width="100%"
                height="300px"
              ></Image>
            </Col>
            <Col className="d-flex flex-column justify-content-center" lg={6}>
              <Row>
                <Col className="mb-4" sm={6}>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                  />
                </Col>
                <Col sm={6}>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Col>
                <Col className="mb-4" sm={12}>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your message"
                    style={{ height: "100px" }}
                  />
                </Col>
                <Col className="text-center">
                  <Button className="w-100" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
