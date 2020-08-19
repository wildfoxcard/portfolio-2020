import React from "react"

//components
import Header from "../layouts/index/Header"

//styles
import layoutStyle from "../layouts/index.module.scss"
const projects = props => {
  return (
    <>
      <Header {...props}></Header>
      <div className={`${layoutStyle.content}`}>
        <h1>Projects</h1>
        <h3>Large Projects</h3>
        <p>
          This stimulates the type of code you will see when building enterprise
          solutions for businesses. Some of these projects are not complete,
          because they will never be complete. Good projects hit deadlines, not
          completion.
        </p>
        {/* <p>PRESS BUTTONS AND EXPLORE MY DEMO APPS.</p> */}
        <div className={`${layoutStyle.list}`}>
          <div className={`${layoutStyle.listItem}`}>
            <div className={`${layoutStyle.browser}`}>
              <div className={`${layoutStyle.redCircle}`}></div>
              <div className={`${layoutStyle.yellowCircle}`}></div>
              <div className={`${layoutStyle.greenCircle}`}></div>
              <h3>Large Project</h3>
              <div className={`${layoutStyle.site}`}>
                <h2>To Do App</h2>
                <p>A demo design for mobile and desktop responsiveness.</p>
              </div>
            </div>
          </div>
          <div className={`${layoutStyle.listItem}`}>
            <div className={`${layoutStyle.browser}`}>
              <div className={`${layoutStyle.redCircle}`}></div>
              <div className={`${layoutStyle.yellowCircle}`}></div>
              <div className={`${layoutStyle.greenCircle}`}></div>
              <h3>Large Project</h3>
              <div className={`${layoutStyle.site}`}>
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
        <div className={`${layoutStyle.list}`}>
          <div className={`${layoutStyle.listItem}`}>
            <div className={`${layoutStyle.browser}`}>
              <div className={`${layoutStyle.redCircle}`}></div>
              <div className={`${layoutStyle.yellowCircle}`}></div>
              <div className={`${layoutStyle.greenCircle}`}></div>
              <h3>Fiddle</h3>
              <div className={`${layoutStyle.site}`}>
                <h2>To Do App</h2>
                <p>A demo design for mobile and desktop responsiveness.</p>
              </div>
            </div>
          </div>
          <div className={`${layoutStyle.listItem}`}>
            <div className={`${layoutStyle.browser}`}>
              <div className={`${layoutStyle.redCircle}`}></div>
              <div className={`${layoutStyle.yellowCircle}`}></div>
              <div className={`${layoutStyle.greenCircle}`}></div>
              <h3>Fiddle</h3>
              <div className={`${layoutStyle.site}`}>
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
