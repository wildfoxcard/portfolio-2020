// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

import "./src/layouts/main.scss"


import {globalHistory} from '@reach/router';


export const onInitialClientRender = () => {
  /**
   * This is a workaround for a bug in Gatsby
   *
   * See https://github.com/gatsbyjs/gatsby/issues/8357 for more details
   */
  globalHistory._onTransitionComplete();
}
