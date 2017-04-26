import React from 'react'

import Picture from 'components/common/picture'
import './gallery.scss'

// Very simple class, just adds a a picture and a subtitle.
export default class Gallery extends React.Component {

  renderPrint() {

  }

  renderPaste() {
    <div className="gallery-wrapper">
      <Picture
        url="/assets/features/print-1.jpg"
        subtitle="Repeatable 8 mil trace width"
      />

      <Picture
        url="/assets/features/print-2.jpg"
        subtitle="The V-One puts the fab house on your desk"
      />

      <Picture
        url="/assets/features/print-3.jpg"
        subtitle="Fully solderable conductive ink... even by hand!"
      />
    </div>

  }

  render() {

    return (<div className="gallery">
    <div className="gallery-wrapper">
      <Picture
        url="/assets/features/print-1.jpg"
        subtitle="Repeatable 8 mil trace width"
      />

      <Picture
        url="/assets/features/print-2.jpg"
        subtitle="The V-One puts the fab house on your desk"
      />

      <Picture
        url="/assets/features/print-3.jpg"
        subtitle="Fully solderable conductive ink... even by hand!"
      />
    </div>
  </div>);
}
}
