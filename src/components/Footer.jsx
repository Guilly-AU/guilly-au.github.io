import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <Container fluid className="bg-dark py-5 text-white text-center">
      <div className="mb-3">&copy; 2023 Corporate. All right Reserved.</div>
      <div>
        <a
          className="pe-4"
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={30} color="white" />
        </a>
        <a href="https://github.com/Guilly-AU" target="_blank" rel="noreferrer">
          <BsGithub size={30} color="white" />
        </a>
      </div>
    </Container>
  );
}

export default Footer;
