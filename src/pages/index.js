import React from "react"

//components
import Header from "../layouts/slider/Header"

const index = props => {
  //{ location }
  return (
    <>
      <Header {...props}></Header>
      <div className={`text-center-center`}>
        <h1>Hello, Welcome to my Portfolio</h1>
        <p>My name is Mike but online I use the name Wild Fox Card</p>
      </div>
    </>
  )
}

export default index
