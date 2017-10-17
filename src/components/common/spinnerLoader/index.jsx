import React from 'react'

import './spinnerLoader.scss'

export default class SpinnerLoader extends React.Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
}
