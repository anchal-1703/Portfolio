import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>

            <h1>Anchal Sandhu</h1>
            <p>Software Engineer | Full Stack Developer</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anchal1703"><img src={navIcon1} alt="" /></a>
              <a href="https://www.github.com/anchal-1703"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Copyright &copy; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
