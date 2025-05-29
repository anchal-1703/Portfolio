import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projPlant from "../assets/img/plant-disease.png";
import projHouse from "../assets/img/house-price.png";
import projEcom from "../assets/img/ecommerce.png";
import projInvoice from "../assets/img/invoice-generator.png";
import projScraper from "../assets/img/event-scraper.png";
import projPortfolio from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

 const projects = [
  {
    title: "BanasPati – AI-Powered Plant Disease Detection",
    description: "Detects plant diseases from leaf images using ML and image processing.",
    imgUrl: projPlant,
  },
  {
    title: "House Price Prediction Model",
    description: "Predicts housing prices using regression and multiple algorithms.",
    imgUrl: projHouse,
  },
  {
    title: "E-Bazar – E-Commerce Platform",
    description: "E-commerce site with auth, cart, search, and order features using JS stack.",
    imgUrl: projEcom,
  },
  {
    title: "Invoice Generator System",
    description: "Tool to automate invoice creation with detailed customer/product info.",
    imgUrl: projInvoice,
  },
  {
    title: "Event Scraper",
    description: "Scrapes Eventbrite data with Playwright and renders it in clean HTML.",
    imgUrl: projScraper,
  },

  {
    title: "anchal-1703 (Portfolio)",
    description: "Personal portfolio with projects, skills, and learning roadmap.",
    imgUrl: projPortfolio,
  },
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
