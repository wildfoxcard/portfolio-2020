import React, { useState, useEffect } from "react"
import AwesomeSlider from "react-awesome-slider"
import { Link } from "gatsby"

//components
import Header from "./index/Header"

//pages
import IndexPage from "../pages/index"
import CodeBootcampPage from "../pages/code-bootcamp"
import DemoPage from "../pages/demos"
import ProjectPage from "../pages/projects"
import BlogPage from "../pages/blog"
import AboutPage from "../pages/about"
import ContactPage from "../pages/contact"

//styles
import CoreStyles from "react-awesome-slider/src/core/styles.scss"
import AnimationCubeStyles from "react-awesome-slider/src/styled/cube-animation/"
import AnimationFallStyles from "react-awesome-slider/src/styled/fall-animation/"
import AnimationFoldOutStyles from "react-awesome-slider/src/styled/fold-out-animation/"
import AnimationOpenStyles from "react-awesome-slider/src/styled/open-animation/"
import AnimationScaleOutStyles from "react-awesome-slider/src/styled/scale-out-animation/"
import s from "./index.module.scss"

export const SlideSelected = React.createContext()

const Layout = props => {
  const { location } = props

  let selectedIndex = 0

  if (location.pathname === "/code-bootcamp/") {
    selectedIndex = 1
  }

  if (location.pathname === "/demos/") {
    selectedIndex = 2
  }

  if (location.pathname === "/projects/") {
    selectedIndex = 3
  }

  if (location.pathname === "/blog/") {
    selectedIndex = 4
  }

  if (location.pathname === "/about/") {
    selectedIndex = 5
  }

  if (location.pathname === "/contact/") {
    selectedIndex = 6
  }

  //states
  const [currentIndex, setCurrentIndex] = useState(selectedIndex)
  const [animation, setAnimation] = useState('cubeAnimation') //cubeAnimation, fallAnimation, foldOutAnimation, openAnimation, scaleOutAnimation

  window.setAnimation = setAnimation;
  return (
    <>
      <SlideSelected.Provider value={{ currentIndex, setCurrentIndex }}>
        <div className={`page-header__wrapper`}>
          <Header location={location}></Header>
        </div>
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
          className={`${s.overlaySettings}`}
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
          <div className={`${s.fullPage} ${s.scene0}`}>
            <IndexPage {...props} />
          </div>
          <div className={`${s.fullPage} ${s.scene1}`}>
            <CodeBootcampPage {...props} />
          </div>
          <div className={`${s.fullPage} ${s.scene2}`}>
            <DemoPage {...props} />
          </div>
          <div className={`${s.fullPage} ${s.scene3}`}>
            <ProjectPage {...props} />
          </div>
          <div className={`${s.fullPage} ${s.scene4}`}>
            <BlogPage {...props} />
          </div>
          <div className={`${s.fullPage} ${s.scene5}`}>
            <AboutPage {...props} />
          </div>
          <div className={`${s.fullPage} ${s.scene6}`}>
            <ContactPage {...props} />
          </div>
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
