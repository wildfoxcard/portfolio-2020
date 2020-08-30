import React from "react"
import menuJSON from "./menu.json"

//components
import IndexPage from "../pages/index"
import DemoPage from "../pages/demos"
import ProjectPage from "../pages/projects"
import BlogPage from "../pages/blog"
import CodeBootcampPage from "../pages/code-bootcamp"
import ContactPage from "../pages/contact"

export default function getMenu() {
  return menuJSON.items
}

export const getSlide = location => {
  let index = 0

  for (var i = 0; i < menuJSON.items.length; i++) {
    if (menuJSON.items[i].link === location.pathname) {
      index = i
      break
    }
  }

  return index
}

export const getComponents = props => {
  let componentArray = []

  for (var i = 0; i < menuJSON.items.length; i++) {
    switch (menuJSON.items[i].link) {
      case "/":
        componentArray.push(<IndexPage {...props} />)
        break
      case "/demos/":
        componentArray.push(<DemoPage {...props} />)
        break
      case "/projects/":
        componentArray.push(<ProjectPage {...props} />)
        break
      case "/blog/":
        componentArray.push(<BlogPage {...props} />)
        break
      case "/code-bootcamp/":
        componentArray.push(<CodeBootcampPage {...props} />)
        break
      case "/contact/":
        componentArray.push(<ContactPage {...props} />)
        break
    }
  }

  return componentArray
}

// {
//   "title": "Projects",
//   "link": "/projects/",
//   "animation": "foldOutAnimation"
// },