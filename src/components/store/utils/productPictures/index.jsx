import React from 'react'
import './productPictures.scss'

export default class ProductPictures extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayIndex: 0
    }
  }

  render() {
    const { images } = this.props

    if (images.length === 1) {
      return(
        <div className="product-picture">
          <img src={images[0].src} alt=""/>
        </div>
      )
    }

    return(
      <div className="product-picture">
        <img src={images[this.state.displayIndex].src} alt=""/>
        <div className="additional">
          {images.map((image, index) => <img key={index} src={image.src} alt="" onClick={() => this.setState({displayIndex: index})} />)}
        </div>
      </div>
    )
  }
}
