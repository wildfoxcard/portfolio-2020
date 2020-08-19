import React from "react"

//components
import Header from "../layouts/index/Header"

//images
import wildFoxCardImage from "../images/wild-fox-card.png"

const index = props => {
  //{ location }
  return (
    <>
      <Header {...props}></Header>
      <img src={wildFoxCardImage} style={{ maxWidth: "100%" }} />
    </>
  )
}

export default index
