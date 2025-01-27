import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="bg-dark text-[#bdc3c7] py-4">
      <Row className="text-center align-items-center">
        <Col md="4">
          <h5>Designed and Developed by rahanyas</h5>
        </Col>
        <Col md="4">
          <h5>Copyright © {year} SB</h5>
        </Col>
        <Col md="4">
          <ul className="list-unstyled flex items-center justify-center p-3">
            <li className="mx-3">
              <a
                href="https://github.com/rahanyas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://www.linkedin.com/in/rahanyas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
