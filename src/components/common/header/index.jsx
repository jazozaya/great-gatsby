import React from 'react';

import Desktop from './desktop'
import Mobile from './mobile'

export default class Header extends React.Component {

  render() {
    if (window.innerWidth < 600) {
      return <Mobile />;
    }
    return  <Desktop {...this.props} />;
  }
}
