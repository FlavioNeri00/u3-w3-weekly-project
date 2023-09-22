import { Button, Col, Container, Form, InputGroup, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spotify_Logo from "../logo/Spotify_Logo.png";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { FaHome, FaBookOpen } from "react-icons/fa";
import "../App.css";

const SideBar = () => {
  return (
    <div className="position-sticky">
      <Row xs={4}>
        <Navbar expand="md" className="bg-black d-flex flex-column align-items-start">
          <Navbar.Brand href="/" className="ms-3">
            <img src={Spotify_Logo} alt="logo" style={{ height: "30px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex flex-column align-items-start ms-3">
              <Nav.Link href="/" className="text-secondary fs-5">
                <FaHome className="text-secondary" /> Home
              </Nav.Link>
              <Nav.Link href="/your-library" className="text-secondary fs-5">
                <FaBookOpen className="text-secondary" /> Your Library
              </Nav.Link>
              <InputGroup className="mt-3" size="sm">
                <Form.Control
                  type="text"
                  className="mb-2"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                ></Form.Control>
                <Button
                  className="btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  style={{ marginBottom: "7px", color: "white", backgroundColor: "black" }}
                >
                  GO
                </Button>
              </InputGroup>
              <div style={{ marginTop: "33rem" }}>
                <Button style={{ paddingInline: "70px" }} className="rounded-pill  bg-white text-black">
                  Sign Up
                </Button>
                <Button
                  style={{ paddingInline: "70px" }}
                  className="rounded-pill  bg-black border border-white color-white mt-3"
                >
                  Log In
                </Button>
              </div>
              <div className="mt-4 mb-5">
                <Link className="ms-4 me-1">Cookie Policy </Link>
                <span>|</span>
                <Link className="ms-1">Privacy</Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  );
};

export default SideBar;
