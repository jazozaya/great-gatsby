import React from 'react'

import './awards.scss'

export default class Award extends React.Component {


  render() {
    const { imageUrl, linkUrl, label } = this.props;

    return (
    <div>
      <a href={linkUrl} target="_blank">
        <img className="individual-award" src={imageUrl} />
      </a>
      <h3>{label}</h3>
    </div>);
}
}
