import React from "react"
import Header from "../layouts/index/Header"

//styles
import layoutStyle from "../layouts/index.module.scss"

const demos = props => {
  return (
    <>
      <Header {...props}></Header>
      <div className={`${layoutStyle.content}`}>
        <h1>Demos</h1>
        <p>
          Interact with some apps I have made to show my skills. These apps are
          made with react, gatsby, and using firebase for the backend.
        </p>
        {/* <p>PRESS BUTTONS AND EXPLORE MY DEMO APPS.</p> */}
        <div className={`${layoutStyle.list}`}>
          <div className={`${layoutStyle.listItem}`}>
            <div className={`${layoutStyle.browser}`}>
              <div className={`${layoutStyle.redCircle}`}></div>
              <div className={`${layoutStyle.yellowCircle}`}></div>
              <div className={`${layoutStyle.greenCircle}`}></div>
              <h3>Demo</h3>
              <div className={`${layoutStyle.site}`}>
                <h2>To Do App</h2>
              </div>
            </div>
          </div>
          <div className={`${layoutStyle.listItem}`}>
            <div className={`${layoutStyle.browser}`}>
              <div className={`${layoutStyle.redCircle}`}></div>
              <div className={`${layoutStyle.yellowCircle}`}></div>
              <div className={`${layoutStyle.greenCircle}`}></div>
              <h3>Demo</h3>
              <div className={`${layoutStyle.site}`}>
                <h2>Quiz App</h2>
              </div>
            </div>
            {/* <img src={tempTodo} /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default demos
