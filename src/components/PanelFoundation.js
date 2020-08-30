import React from "react"

function PanelFoundation({ children }) {
  return (
    <div className={`container-fluid pt-5`}>
      <div className={`container`}>
        <div className={`row`}>{children}</div>
      </div>
    </div>
  )
}

export default PanelFoundation
