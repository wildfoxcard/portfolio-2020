import React from "react"
import { navigate } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

function Header() {
  const homeNavClickHandler = () => {
    navigate("/")
  }

  const studiesNavClickHandler = () => {
    navigate("/studies/")
  }

  const projectsNavClickHandler = () => {
    navigate("/projects/")
  }

  const bootcampNavClickHandler = () => {
    navigate("/code-bootcamp/")
  }

  const blogNavClickHandler = () => {
    navigate("/blog/")
  }

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand
        href="javascript:void(0)"
        onClick={() => homeNavClickHandler()}
      >
        Wild Fox Card
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="javascript:void(0)"
            onClick={() => bootcampNavClickHandler()}
          >
            Code Bootcamp
          </Nav.Link>
          <Nav.Link
            href="javascript:void(0)"
            onClick={() => studiesNavClickHandler()}
          >
            Demos
          </Nav.Link>
          <Nav.Link
            href="javascript:void(0)"
            onClick={() => projectsNavClickHandler()}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="javascript:void(0)"
            onClick={() => blogNavClickHandler()}
          >
            Blog
          </Nav.Link>
          <Nav.Link
            href="javascript:void(0)"
            onClick={() => studiesNavClickHandler()}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="javascript:void(0)"
            onClick={() => studiesNavClickHandler()}
          >
            Contact
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
