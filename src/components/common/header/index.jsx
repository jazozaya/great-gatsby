import React from 'react';

import Desktop from './desktop2'
import Mobile from './mobile2'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { windowWidth : 1920 };
  }

  componentDidMount() {
      this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    if (this.state.windowWidth < 600) {
      return <Mobile />;
    }
    return  <Desktop {...this.props} />;
  }
}
