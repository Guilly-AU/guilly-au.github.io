import { useState, React } from "react";
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
  Image,
  Badge,
  Stack,
} from "react-bootstrap";

function PortfolioModal({ work }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        See my project
      </Button>

      <Modal size="xl" centered show={show} onHide={handleClose}>
        <Modal.Header className="bg-myPrimaryLight" closeButton>
          <Modal.Title>{work.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xl={6}>
                <h3 className="opacity-50">Context</h3>
                <p>{work.context}</p>
                <h3 className="opacity-50">Resolution</h3>
                <p>{work.resolution}</p>

                <Stack className="mb-3" direction="horizontal" gap={2}>
                  {work.badges.split(",").map((badge, index) => (
                    <Badge key={index} pill bg="primary">
                      {badge}
                    </Badge>
                  ))}
                </Stack>
              </Col>
              <Col xl={6}>
                <Image
                  src={work.imageHome}
                  width="100%"
                  height="300px"
                  className="object-fit-cover border"
                ></Image>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {work.linkWeb && (
            <Button
              href={work.linkWeb}
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              Live
            </Button>
          )}

          <Button
            href={work.linkGithub}
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            Github
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PortfolioModal;
