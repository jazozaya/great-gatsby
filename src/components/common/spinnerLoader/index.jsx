import React from 'react'

import './spinnerLoader.scss'

export default class SpinnerLoader extends React.Component {
  render() {
    const { mini } = this.props
    const loaderClass = mini ? "loader mini" : "loader"
    return (
      <div className="loader-wrapper">
        <div className={loaderClass}></div>
      </div>
    );
  }
}
