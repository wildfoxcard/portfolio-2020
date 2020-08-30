import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

//components
import getMenu from "../../utils/getMenu"

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {getMenu().map((item, i) => (
              <Link className={`nav-link`} to={item.link}>
                {item.title}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
