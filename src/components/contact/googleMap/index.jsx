import React from "react";
import "./googleMap.scss";
import volteraEmblem from "./voltera-emblem.png";
import Bowser from "bowser";
import GoogleMapReact from "google-map-react";

class GoogleMarker extends React.Component {
  render() {
    return <img src={volteraEmblem} alt="" />;
  }
}

export default class GoogleMap extends React.Component {
  static defaultProps = {
    center: { lat: 43.4555075, lng: -80.4955712 },
    zoom: 5
  };

  renderMarker() {
    // Odd bog in IE - the marker is rendered, but it doesn't move with the map. So... let's just not load it.
    if (Bowser.msie) {
      return null;
    }
    return <GoogleMarker lat={43.4555075} lng={-80.4955712} />;
  }

  render() {
    return (
      <div className="googleMap">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDAKgLWBTIjlTC2F2pKIo0Lah_1nofGlHs"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.renderMarker()}
        </GoogleMapReact>
      </div>
    );
  }
}
