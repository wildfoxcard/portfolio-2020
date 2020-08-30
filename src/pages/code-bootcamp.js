import React from "react"

//components
import Header from "../layouts/slider/Header"


const codeBootcamp = props => {
  return (
    <>
      <Header {...props}></Header>
      <div className={`content`}>
        <h1>Code Bootcamp</h1>
        <p>
          One of my new hobbies is to find free resources online and create a comprehensive check list to help others learn to program
        </p>
        {/* <p>PRESS BUTTONS AND EXPLORE MY DEMO APPS.</p> */}
        <div className={`list`}>
          <div className={`list-item`}>
            <div className={`$browser`}>
              <div className={`red-circle`}></div>
              <div className={`yellow-circle`}></div>
              <div className={`green-circle`}></div>
              <h3>School</h3>
              <div className={`site`}>
                <h2>Front-end</h2>
                <p>A beginners course for html, css, and javascript. Learn the es6 standards, then react, and finally gatsby.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default codeBootcamp
