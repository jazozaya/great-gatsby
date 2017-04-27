import React from 'react'
import './gallery.scss'

import Lightbox from 'react-image-lightbox';
import Picture from 'components/common/picture'

import { images } from './constants';

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        photoIndex: 0,
        isOpen: false
    };
    this.handler.bind(this)
}

  handler(index) {
    this.setState( { isOpen: true, photoIndex: index});
  }

  renderGrid() {
    // Generate our grid.
    return images.map((currentValue, index) =>
      <Picture
        key={currentValue.name+index.toString()}
        onClick={() => this.handler(index)}
        url={'/assets/gallery/thumbnail/'+ currentValue.name}
        subtitle={currentValue.subtitle}
        />)
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (<div className="gallery">
    <div className="gallery-wrapper">
      <h1>Gallery</h1>
      <p>The V-One is a flexible platform that can help you in every step of development. Just <strong>click on any picture</strong> below to learn more.</p>
    </div>
    <div className="gallery-grid-wrapper">
      {this.renderGrid()}
    </div>

    {isOpen && <Lightbox
       mainSrc={'/assets/gallery/large/' + images[photoIndex].name}
       nextSrc={'/assets/gallery/large/' + images[(photoIndex + 1) % images.length].name}
       prevSrc={'/assets/gallery/large/' + images[(photoIndex + images.length - 1) % images.length].name}
       imageCaption={<div className="lbox-caption"><p>{images[photoIndex].subtitle}</p></div>}

       onCloseRequest={() => this.setState({ isOpen: false })}
       onMovePrevRequest={() => this.setState({
           photoIndex: (photoIndex + images.length - 1) % images.length,
       })}
       onMoveNextRequest={() => this.setState({
           photoIndex: (photoIndex + 1) % images.length,
       })}
         />
     }
  </div>);
}
}
