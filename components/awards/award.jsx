import React from 'react'

import './awards.scss'

export default class Award extends React.Component {


  render() {
    const { imageUrl, linkUrl, label } = this.props;

    return (
    <div>
      <a href={linkUrl}>
        <img width="200" height="120" src={imageUrl} alt={label} />
      </a>
      <h3>{label}</h3>
    </div>);
}
}
