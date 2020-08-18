import React, { useContext } from "react"
import { Link } from "gatsby"

//styles
import s from "./Header.module.scss"

// images
import wildFoxCardImage from "../../images/wild-fox-card.png"

//state
import { SlideSelected } from "../index"

const Header = () => {
  const context = useContext(SlideSelected)
  return (
    <header className={`${s.headerWrapper}`}>
      <div className={`${s.left}`}>
        <img src={wildFoxCardImage} style={{ width: "50px" }} />
      </div>
      <div className={`${s.left}`}>
        <Link to={"/code-bootcamp/"} onClick={() => context.setCurrentIndex(1)}>
          <h2>Wild Fox Card</h2>
        </Link>
        <div className={`${s.navLinkWrapper}`}>
          <Link
            to={"/code-bootcamp/"}
            className={`${s.navLink}`}
            onClick={() => context.setCurrentIndex(1)}
          >
            Code Bootcamp
          </Link>
          <Link
            to={"/demos/"}
            className={`${s.navLink}`}
            onClick={() => context.setCurrentIndex(2)}
          >
            Demos
          </Link>

          <Link
            to={"/projects/"}
            className={`${s.navLink}`}
            onClick={() => context.setCurrentIndex(3)}
          >
            Projects
          </Link>
          <Link
            to={"/blogs/"}
            className={`${s.navLink}`}
            onClick={() => context.setCurrentIndex(4)}
          >
            Blog
          </Link>
          <Link
            to={"/about"}
            className={`${s.navLink}`}
            onClick={() => context.setCurrentIndex(5)}
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className={`${s.navLink}`}
            onClick={() => context.setCurrentIndex(6)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
