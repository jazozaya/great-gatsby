import React from 'react'

// Very simple class, just adds a a picture and a subtitle.
export default class highlights extends React.Component {
  render() {

    return (<div className="highlights">
    <div className="highlights-wrapper">
      {this.props.children}
    </div>
  </div>);
}
}
