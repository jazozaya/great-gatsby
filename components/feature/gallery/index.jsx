import React from 'react'

import './gallery.scss'

// Very simple class, just adds a a picture and a subtitle.
export default class Gallery extends React.Component {

  render() {

    return (<div className="gallery">
    <div className="gallery-wrapper">
      <div className="picture">
        <img src="/assets/features/print-1.jpg" />
        <p>Repeatable 8 mil trace width</p>
      </div>

      <div className="picture">
        <img src="/assets/features/print-2.jpg" />
        <p>The V-One puts the fab house on your desk</p>
      </div>

      <div className="picture">
        <img src="/assets/features/print-3.jpg" />
        <p>Fully solderable conductive ink... even by hand!</p>
      </div>
    </div>
  </div>);
}
}
