import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projBloocube from "../assets/img/bloocube.png";
import projGST from "../assets/img/gst-billing.png";
import projPlant from "../assets/img/plant-disease.png";
import projHouse from "../assets/img/house-price.png";
import projEcom from "../assets/img/ecommerce.png";
import projScraper from "../assets/img/event-scraper.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bloocube – AI-Powered Influencer Marketplace",
      description: "Designed and developed a full-stack web platform connecting brands with content creators. Built responsive frontend with React.js, RESTful APIs with Node.js/Express, and integrated PostgreSQL database. Focused on scalability, performance optimization, and secure deployment with JWT authentication.",
      imgUrl: projBloocube,
    },
    {
      title: "GST Billing System",
      description: "Developed a comprehensive web-based GST-compliant invoicing system. Implemented product & customer management, automated tax calculations, and PDF invoice generation. Tech stack: Laravel (backend), Bootstrap & Vue.js (frontend), MySQL (database).",
      imgUrl: projGST,
    },
    {
      title: "BanasPati – AI-Powered Plant Disease Detection",
      description: "ML-based system to detect plant diseases from leaf images using image processing and classification algorithms. Provides farmers with early disease detection and treatment recommendations.",
      imgUrl: projPlant,
    },
    {
      title: "E-Bazar – E-Commerce Platform",
      description: "Full-featured e-commerce platform with user authentication, shopping cart, product search, and order management. Built with MERN stack for seamless user experience.",
      imgUrl: projEcom,
    },
    {
      title: "House Price Prediction Model",
      description: "ML model predicting housing prices using regression algorithms. Analyzes multiple features including location, size, and amenities to provide accurate price estimates.",
      imgUrl: projHouse,
    },
    {
      title: "Event Scraper",
      description: "Web scraping tool extracting event data from Eventbrite using Playwright. Processes and renders data in clean, structured HTML format for easy consumption.",
      imgUrl: projScraper,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Featured Projects</h2>
                  <p>A showcase of my technical expertise through real-world applications. From AI-powered marketplaces to ML-driven analytics, each project demonstrates proficiency in full-stack development, system design, and modern web technologies.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
