import React from 'react';
import Bowser from 'bowser';

import Desktop from './desktop'
import Mobile from './mobile'

export default class Header extends React.Component {

  render() {
    if (Bowser.mobile) {
      return <Mobile pageName={this.props.pageName} />;
    }
    return  <Desktop pageName={this.props.pageName} />;
  }
}
