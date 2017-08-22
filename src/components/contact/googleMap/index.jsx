import React from 'react'
import './googleMap.scss'
import volteraEmblem from './voltera-emblem.png'
import Bowser from 'bowser'
import GoogleMapReact from 'google-map-react';

class GoogleMarker extends React.Component {
  render () {
    return (<img src={volteraEmblem} />);
  }
}

export default class GoogleMap extends React.Component {
  static defaultProps = {
    center: {lat: 43.451439, lng: -80.498663},
    zoom: 5
  };

  renderMarker() {
    // Odd bog in IE - the marker is rendered, but it doesn't move with the map. So... let's just not load it.
    if (Bowser.msie) {
      return null;
    }
    return <GoogleMarker lat={43.451439} lng={-80.498663} />
  }

  render() {
    return (
      <div className="googleMap">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
        {this.renderMarker()}
        </GoogleMapReact>
      </div>
    );
  }
}
