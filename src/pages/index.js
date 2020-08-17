import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col, Card } from "react-bootstrap"
import wildFoxCardImage from "../images/wild-fox-card.png"

const index = ({ location }) => {
  return (
    <Layout location={location} title={"Home Page"}>
      <Container
        fluid
        // style={{ backgroundColor: "var(--light)", color: "var(--secondary)" }}
      >
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <Card>
                <Card.Img variant="top" src={wildFoxCardImage} />
                
              </Card>
              {/* <img src={wildFoxCardImage} style={{ maxWidth: "100%" }} /> */}
            </Col>
            <Col sm={12} md={6} className={"m-auto"}>
              <h1>Mike's Portfolio</h1>
              <p>
                I enjoy programming, this is where I store most of my personal
                works.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Link to={"/blog"}>Blog</Link>
    </Layout>
  )
}

export default index
