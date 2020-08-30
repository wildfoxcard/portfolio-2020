import React from "react"

//components
import Header from "../layouts/slider/Header"

const projects = props => {
  return (
    <>
      <Header {...props}></Header>
      <div className={`content`}>
        <h1>Projects</h1>
        <h3>Large Projects</h3>
        <p>
          This stimulates the type of code you will see when building enterprise
          solutions for businesses. Some of these projects are not complete,
          because they will never be complete. Good projects hit deadlines, not
          completion.
        </p>
        {/* <p>PRESS BUTTONS AND EXPLORE MY DEMO APPS.</p> */}
        <div className={`list`}>
          <div className={`list-item`}>
            <div className={`browser`}>
              <div className={`red-circle`}></div>
              <div className={`yellow-circle`}></div>
              <div className={`green-circle`}></div>
              <h3>Large Project</h3>
              <div className={`site`}>
                <h2>To Do App</h2>
                <p>A demo design for mobile and desktop responsiveness.</p>
              </div>
            </div>
          </div>
          <div className={`list-item`}>
            <div className={`browser`}>
              <div className={`red-circle`}></div>
              <div className={`yellow-circle`}></div>
              <div className={`green-circle`}></div>
              <h3>Large Project</h3>
              <div className={`site`}>
                <h2>Quiz App</h2>
                <p>Create your own or try my quiz.</p>
              </div>
            </div>
            {/* <img src={tempTodo} /> */}
          </div>
        </div>
        <h3>Fiddles</h3>
        <p>
          Sometimes smaller is better. This section shows off skills using small snippets of code.
        </p>
        <div className={`list`}>
          <div className={`list-item`}>
            <div className={`browser`}>
              <div className={`red-circle`}></div>
              <div className={`yellow-circle`}></div>
              <div className={`green-circle`}></div>
              <h3>Fiddle</h3>
              <div className={`$site`}>
                <h2>To Do App</h2>
                <p>A demo design for mobile and desktop responsiveness.</p>
              </div>
            </div>
          </div>
          <div className={`list-item`}>
            <div className={`browser`}>
              <div className={`red-circle`}></div>
              <div className={`yellow-circle`}></div>
              <div className={`green-circle`}></div>
              <h3>Fiddle</h3>
              <div className={`site`}>
                <h2>Quiz App</h2>
                <p>Create your own or try my quiz.</p>
              </div>
            </div>
            {/* <img src={tempTodo} /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default projects
