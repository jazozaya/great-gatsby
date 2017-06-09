import React from 'react'

import './awards.scss'

export default class Award extends React.Component {


  render() {
    const { imageUrl, linkUrl, label } = this.props;

    return (
    <div className="individual-award">
      <a href={linkUrl} target="_blank">
        <img width="200" height="120" src={imageUrl} />
      </a>
      <h3>{label}</h3>
    </div>);
}
}
