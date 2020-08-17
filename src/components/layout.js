import React from "react"
import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import Header from "./Layout/Header"

const Layout = ({ location, title, titleOnClick, children }) => {
  return (
    <>
      <Header></Header>
      {/* <main> */}
        {children}
        {/* </main> */}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
