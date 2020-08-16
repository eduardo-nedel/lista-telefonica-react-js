import React from 'react'

import './Default.scss'

export default function Default(props) {
  return (
    <div className="default">
      <h1>Header</h1>
      <div className="content">
        { props.children }
      </div>
      <h1>Footer</h1>
    </div>
  )
}
