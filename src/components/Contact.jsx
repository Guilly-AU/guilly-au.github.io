import React, { useRef } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import imgContact from "../assets/contact-me.jpg";
import emailjs from "@emailjs/browser";

function Contact() {
  console.log(process.env.REACT_APP_SERVICE_ID);
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_USER_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <section id="contact" className="py-5 bg-myPrimaryLight">
      <Container>
        <div className="title-holder">
          <h2 className="fs-1 text-center">Contact</h2>
          <h3 className="subtitle mb-4 mt-5 opacity-50">Keep in touch</h3>
        </div>
        <Form onSubmit={(e) => handleSubmit(e)} ref={form}>
          <Row>
            <Col className="mb-4" lg={6}>
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
                <Col className="mb-2" sm={6}>
                  <Form.Group controlId="formName">
                    <Form.Label className="floating-label">Name</Form.Label>{" "}
                    <Form.Control
                      type="text"
                      name="user_name"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col className="mb-2" sm={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label className="floating-label">Email</Form.Label>{" "}
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col className="mb-2" sm={12}>
                  <Form.Group controlId="formSubject">
                    <Form.Label className="floating-label">Subject</Form.Label>{" "}
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col className="mb-4" sm={12}>
                  <Form.Group controlId="formMessage">
                    <Form.Label className="floating-label">Message</Form.Label>{" "}
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={3}
                      placeholder="Your message"
                      required
                      style={{ resize: "none" }}
                    />
                  </Form.Group>
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
