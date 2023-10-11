import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar
        className="bg-body-tertiary text-white"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          &nbsp;
          <Navbar.Text className="text-white">+91 9884350006</Navbar.Text>
          &nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          &nbsp;
          <Navbar.Text className="text-white">+1-972-502-9262</Navbar.Text>
          &nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          &nbsp;
          <Navbar.Text className="text-white">sales@pubrica.com</Navbar.Text>
          {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              Contact us | Pubrica | Insights
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="https://pubrica.com/wp-content/uploads/2020/11/250X80_03_min_mbl.png"
                width="200"
                height="60"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  EDITING & TRANSLATION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  PUBLICATION SUPPORT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  RESEARCH SERVICES
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/about">
                <Nav.Link>About us</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#link">Our Quality</Nav.Link>
              <Nav.Link href="#link">Industries</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary navcolor text-white">
        <Nav.Link href="#link" className="nav-item nav-item1 nav-item2">
          Quality Assurance
        </Nav.Link>
        <Nav.Link href="#link" className="nav-item nav-item2">
          Our Process
        </Nav.Link>
        <Nav.Link href="#link" className="nav-item nav-item2">
          Our Peer Review Team
        </Nav.Link>
        <Nav.Link href="#link" className="nav-item nav-item2">
          Confidentiality{" "}
        </Nav.Link>
        <Nav.Link href="#link" className="nav-item nav-item2">
          Publication Ethics
        </Nav.Link>
        <Nav.Link href="#link" className="nav-item nav-item2">
          Our Published Papers{" "}
        </Nav.Link>
        <Nav.Link href="#link" className="nav-item nav-item2">
          FAQ
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default Header;
