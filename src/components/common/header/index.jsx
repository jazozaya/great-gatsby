import React from 'react';
import Bowser from 'bowser';

import Desktop from './desktop'
import Mobile from './mobile'

export default class Header extends React.Component {

  track() {
    window.google_trackConversion({
      google_conversion_id: 933031938,
      google_custom_params: {
        hiMakan: 'how are you?'
      },
      google_remarketing_only: true
    });
  }

  componentDidUpdate() {
    this.track();
  }

  componentDidMount() {
    setTimeout(this.track, 500);
  }

  render() {
    if (Bowser.mobile) {
      return <Mobile pageName={this.props.pageName} />;
    }
    return  <Desktop pageName={this.props.pageName} />;
  }
}
