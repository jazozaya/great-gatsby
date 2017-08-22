import React from 'react';
import Bowser from 'bowser';

import Desktop from './desktop'
import Mobile from './mobile'

export default class Header extends React.Component {

  track() {

    // Anna's add blocker interfered with this function, it said google_trackConversion was not defined. And crashed other things.
    try {
      if (process.env.NODE_ENV === 'production') {
        window.google_trackConversion({
            google_conversion_id: 933031938,
            google_custom_params: {},
            google_remarketing_only: true
          });
      }
    } catch(e) {
      console.log(e)
    }
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
