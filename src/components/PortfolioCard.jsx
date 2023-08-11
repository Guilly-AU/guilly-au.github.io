import { Container, Row, Col, Card } from "react-bootstrap";
import PortfolioModal from "./PortfolioModal";

function Portfolio() {
  const works = [
    {
      title: "Booki - HTML & CSS",
      description: "Create a travel agency homepage with HTML & CSS",
      imageHome: require("../assets/Booki-1.jpg"),
      context: `My first educational project was to develop the Booki website from a Figma mockup. The constraints were to use vanilla HTML and CSS, without any frameworks. The website had to adhere to responsive design principles for mobile and tablet devices.`,
      resolution: `To begin with, I established my development environment, notably utilizing VS Code. I analyzed and dissected the mockup to establish the code's structure. I coded the website using HTML5 and CSS3, adhering to semantic principles and ensuring responsiveness.`,
      badges: "Html,Css,Figma",
      linkWeb: "https://guilly-au.github.io/P2-Booki-HTML-CSS/",
      linkGithub: "https://github.com/Guilly-AU/P2-Booki-HTML-CSS",
    },
    {
      title: "Sophie Bruel - JavaScript",
      description: "Create a dynamic web page with vanilla JavaScript",
      imageHome: require("../assets/Sophie-Bruel-1.jpg"),
      context: `For this educational project, in my role as a front-end developer, I was tasked with creating the front-end of the website. Specifically, I focused on developing the work presentation page, building the administrator login page from scratch, and integrating the modal for uploading new works, all starting from the ground up.`,
      resolution: `The project constraints dictated the use of vanilla JavaScript for dynamically retrieving existing works from the backend. To achieve this, I employed Fetch API calls, integrating various filters for the gallery. Subsequently, I developed the login page, adhering to the mockup while implementing user authentication. Lastly, I coded the work addition modal, incorporating functionalities to add, delete, and modify works with interactions handled on the backend.`,
      badges: "Java Script, Css, Html, Fetch, API, Authentification",
      linkWeb: "",
      linkGithub:
        "https://github.com/Guilly-AU/P3-Portofolio_architecte_Sophie_Bluel-JAVASCRIPT",
    },
    {
      title: "Nina Carducci - SEO & Debug",
      description: "Debug and optimize the SEO of a photographer's site",
      imageHome: require("../assets/Nina-Carducci-1.jpg"),
      context: `For this educational project, I assumed the role of a freelance developer, offering my SEO optimization services to Nina Carducci, a photographer. The website had a few bugs and was not well optimized.`,
      resolution: `To begin, I addressed the existing bugs, particularly in the gallery where the functionality of next and previous images was not working. Following this, I generated Lighthouse and GTmetrix reports to pinpoint areas for improvement. Subsequently, I enhanced performance, accessibility, and SEO aspects. I incorporated Open Graph metadata and schema.org microdata for local referencing. For performance tracking, I integrated Google Search Console and Google Analytics.`,
      badges: "SEO, Keyword, Robots, Analytics, Lighthouse",
      linkWeb: "https://guilly-au.github.io/P5-Nina_Carducci-SEO_optimization/",
      linkGithub:
        "https://github.com/Guilly-AU/P5-Nina_Carducci-SEO_optimization",
    },
    {
      title: "Kasa - React & Sass",
      description: "Create a real estate rental web application with React",
      imageHome: require("../assets/Kasa-1.jpg"),
      context: `In this educational project, I assumed the role of a front-end developer tasked with revamping a 10-year-old website, Kasa. Utilizing React with Sass and React Router, my responsibility was to create the new website based on a provided mockup.`,
      resolution: `To successfully carry out this project, I first initiated the project and created various pages along with routes using React Router. I designed different reusable components including a Carousel, dropdown, navbar, and card. I made use of various React functionalities such as props, useState, useRef, and map. Additionally, ensuring the website was responsive was also a crucial aspect of the project.`,
      badges: "React, Sass, Component",
      linkWeb: "https://guilly-au.github.io/P6-Kasa-React-SASS/",
      linkGithub: "https://github.com/Guilly-AU/P6-Kasa-React-SASS",
    },
    {
      title: "Mon Vieux Grimoire - Node.js & Express.Js",
      description: "Develop the back-end of a book rating site",
      imageHome: require("../assets/Mon-Vieux-Grimoire-1.jpg"),
      context: `In this educational project, I collaborated with a front-end developer while assuming the role of a back-end developer. The front-end portion had already been coded, so my task was to establish a RESTful API using Node.js.`,
      resolution: `To successfully complete this project, I set up a Node.js server using Express.js and established a NoSQL database with MongoDB and Mongoose. I implemented CRUD routes to make the application dynamic. I also introduced a secure authentication system by deploying middleware. Additionally, I added the functionality for users to rate books based on their individual permissions.`,
      badges: "Node.Js, Express.Js, MongoDb, Mongoose, Middleware",
      linkWeb: "",
      linkGithub:
        "https://github.com/Guilly-AU/P7-Mon_vieux_grimoire-MERN_Stack",
    },
  ];

  return (
    <section id="portfolio" className="block works-block py-5">
      <Container>
        <div className="title-holder">
          <h2 className="text-center fs-1">Portfolio</h2>
          <h3 className="subtitle mb-4 mt-5 opacity-50">My projects</h3>
        </div>
        <Row className="portfoliolist d-flex justify-content-center">
          {works.map((works, i) => {
            return (
              <Col md={6} lg={4} className="mb-5" key={i}>
                <Card bg="light" border="primary">
                  <Card.Header
                    className="
                  text-center"
                  >
                    {works.title}
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={works.imageHome}
                    width="100%"
                    height="300px"
                    className="object-fit-cover"
                  />
                  <Card.Body className="text-center">
                    <PortfolioModal work={works} />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
