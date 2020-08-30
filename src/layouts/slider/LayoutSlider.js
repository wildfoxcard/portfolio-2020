import React, { useState, useEffect } from "react"
import AwesomeSlider from "react-awesome-slider"
import { Link } from "gatsby"

//components
import Header from "./Header"
import getMenu, { getSlide, getComponents } from "../../utils/getMenu"

//styles
import CoreStyles from "react-awesome-slider/src/core/styles.scss"
import AnimationCubeStyles from "react-awesome-slider/src/styled/cube-animation/"
import AnimationFallStyles from "react-awesome-slider/src/styled/fall-animation/"
import AnimationFoldOutStyles from "react-awesome-slider/src/styled/fold-out-animation/"
import AnimationOpenStyles from "react-awesome-slider/src/styled/open-animation/"
import AnimationScaleOutStyles from "react-awesome-slider/src/styled/scale-out-animation/"

export const SlideSelected = React.createContext()

const Layout = props => {
  const { location } = props

  let selectedIndex = getSlide(location)

  //states
  const [currentIndex, setCurrentIndex] = useState(selectedIndex)
  const [animation, setAnimation] = useState("cubeAnimation") //cubeAnimation, fallAnimation, foldOutAnimation, openAnimation, scaleOutAnimation

  useEffect(() => {
    const index = getSlide(location)
    setCurrentIndex(index)
    setAnimation(getMenu()[index].animation)
  }, [location])

  return (
    <>
      <SlideSelected.Provider
        value={{ currentIndex, setCurrentIndex, animation, setAnimation }}
      >
        <AwesomeSlider
          animation={animation}
          cssModule={[
            CoreStyles,
            AnimationCubeStyles,
            AnimationFallStyles,
            AnimationFoldOutStyles,
            AnimationOpenStyles,
            AnimationScaleOutStyles,
          ]}
          className={`overlay-settings`}
          bullets={false}
          selected={currentIndex}
          // startupScreen={props => {
          //   console.log('props startup', props)
          // }}
          onFirstMount={(props, b, c) => {
            console.log("onFirstMount", props, b, c)
            props.currentIndex = 1
            props.selected = 1
            //element, currentIndex, nextIndex, currentScreen, nextScreen
            // console.log("options", props, location)
            // if (location.pathname === "/about/") {
            //   console.log("hit")
            //   setCurrentIndex(1)
            //   // props.currentIndex = 1
            // }
          }}
        >
          {getComponents(props).map((comp, i) => {
            return (
              <div className={`full-page scene-${i}`} key={i}>
                {comp}
              </div>
            )
          })}
          {/* {props.children} */}
        </AwesomeSlider>
        {/* <main> */}

        {/* </main> */}
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </SlideSelected.Provider>
    </>
  )
}

export default Layout
