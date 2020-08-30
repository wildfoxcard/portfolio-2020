import React, { useState, useEffect } from "react"

//component
import Header from "./Header"

export const SlideSelected = React.createContext()

const LayoutStandard = props => {
  const { location, children } = props


  
  return (
    <>
      <Header {...props} />
      <main>
        <div className={`container-fluid pt-5`}>
          <div className={`container`}>
            <div className={`row`}>{children}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LayoutStandard
