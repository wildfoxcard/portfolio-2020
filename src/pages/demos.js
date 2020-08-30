import React from "react"
import { Link } from 'gatsby'
import { Card } from "react-bootstrap"

//components
import Header from "../layouts/slider/Header"
import PanelFoundation from "../components/PanelFoundation"

const demos = props => {
  return (
    <>
      <Header {...props}></Header>
      <div className={`container clear-top`}>
        <div className={`row`}>
          <div className={`col-lg-8 offset-md-2`}>
            <h1 className={`text-white`}>Demos</h1>
            <p className={`text-white`}>
              Why stare at lines of code when you can interact with some apps I
              made. But you can still look at the code of these demos and this
              porfolio.
            </p>
          </div>
        </div>
        <div className={`row pt-5`}>
          <div className={`col-lg-4 offset-md-2 col-12`}>
            <Card>
              <Card.Body>
                <Card.Title>Quiz App</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle> */}
                <Card.Text>
                  {/* A demo design for mobile and desktop responsiveness */}
                  I have a quiz for you to test your knowledge. You can also create real quizzes to challenge yourself or others.
                </Card.Text>
                {/* card-link */}
                <Link className={`card-link btn btn-primary`} to={`/demos/quiz`}>Demo</Link>
                <Card.Link href="#">View Code</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className={`col-md-4 col-12`}>
            <Card>
              <Card.Body>
                <Card.Title>Flash Cards App</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle> */}
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link className={`card-link btn btn-primary`} to={`/demos/flash-cards`}>Demo</Link>
                {/* card-link */}
                <Card.Link href="#">View Code</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* <div className={`list`}>
          <div className={`list-item`}>
            <div className={`browser`}>
              <div className={`red-circle`}></div>
              <div className={`yellow-circle`}></div>
              <div className={`green-circle`}></div>
              <h3>Demo</h3>
              <div className={`site`}>
                <h2>To Do App</h2>
                <p>A demo design for mobile and desktop responsiveness.</p>
                <div className={`buttons`}>
                  <button className={`offset`}>View Demo</button>
                  <button className={`offset`}>Code</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`list-item`}>
            <div className={`browser`}>
              <div className={`red-circle`}></div>
              <div className={`yellow-circle`}></div>
              <div className={`green-circle`}></div>
              <h3>Demo</h3>
              <div className={`site`}>
                <h2>Quiz App</h2>
                <p>Create your own or try my quiz.</p>
              </div>
            </div>
          </div>
        </div> */}
    </>
  )
}

export default demos
