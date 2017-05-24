import React from 'react'
import './googleMap.scss'

import GoogleMapReact from 'google-map-react';

class GoogleMarker extends React.Component {
  render () {
    return (<img src="/assets/voltera-logo.png" />);
  }
}

export default class GoogleMap extends React.Component {
  static defaultProps = {
    center: {lat: 43.451439, lng: -80.498663},
    zoom: 5
  };

  render() {
    return (
      <div className="googleMap">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
        <GoogleMarker
          lat={43.451439}
          lng={-80.498663}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
