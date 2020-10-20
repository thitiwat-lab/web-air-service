import React, { useContext } from 'react'

import MainContext from '../../contexts/mainContext'

export default () => {
  const { state } = useContext(MainContext)

  if (!state.breadcrumb.title) {
    return <div className="section-header-empty" />
  } else {
    return (
      <div className="section-header">
        <h1>{state.breadcrumb.title}</h1>
      </div>
    )
  }
}
