import React, { useContext } from "react"
import { Link } from "gatsby"
import getMenu from "../../utils/getMenu"

//styles
import s from "./Header.module.scss"

// images
import wildFoxCardImage from "../../images/wild-fox-card.png"

const Header = () => {
  return (
    <header className={`${s.headerWrapper}`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={`float-right`}>
              <div className={`${s.navLinkWrapper}`}>
                {getMenu().map((item, i) => {
                  return (
                    <Link
                      to={item.link}
                      className={`${s.navLink}`}
                      activeClassName={`${s.active}`}
                      key={i}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className={`float-left`}>
              <div className={`${s.imageWrapper}`}>
                <img src={wildFoxCardImage} />
              </div>

              <h2 className={`${s.brand}`}>Wild Fox Card</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`${s.left} ${s.imageWrapper}`}>
        <img src={wildFoxCardImage} />
      </div>
      <div className={`${s.left}`}>
        <h2>Wild Fox Card</h2>
        <div className={`${s.navLinkWrapper}`}>
          {getMenu().map((item, i) => {
            return (
              <Link
                to={item.link}
                className={`${s.navLink}`}
                activeClassName={`${s.active}`}
                key={i}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      </div> */}
    </header>
  )
}

export default Header
