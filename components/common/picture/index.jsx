import React from 'react'

import './picture.scss'

// Very simple class, just adds a a picture and a subtitle.
export default class Picture extends React.Component {
  render() {
    const { url, subtitle } = this.props;

    return (
      <div className="picture">
        <img src={url} />
        <p>{subtitle}</p>
      </div>
    );
  }
}
