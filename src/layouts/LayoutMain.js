import React from "react"

//layouts
import LayoutSlider from "./slider/LayoutSlider"
import LayoutStandard from "./standard/LayoutStandard"

function LayoutMain(props) {
    const { children, pageContext } = props;

console.log('layout choosen', pageContext.layout)

  if (pageContext.layout === "standard") {
    return <LayoutStandard {...props}>{children}</LayoutStandard>
  }
  return <LayoutSlider {...props}>{children}</LayoutSlider>
}

export default LayoutMain
