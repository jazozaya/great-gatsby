import React from 'react'
import { Link } from 'gatsby'

import LazyLoad from 'react-lazyload'

import './preview.scss'

export default class Preview extends React.Component {

  render() {
    const { title, titleStripped, imageSrc, snippet, published } = this.props;
    return(
      <LazyLoad height={500} offset={200} once>
        <div className="preview-wrapper">
          <Link to={`/blog/${titleStripped}`}>
            <h3>{title}</h3>
            <p><i>{published}</i></p>
            <img src={imageSrc}/>
            <p>{snippet}</p>
            <p>Read more...</p>
          </Link>
        </div>
      </LazyLoad>
    )
  }

}
