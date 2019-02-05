import React from 'react';
import Media from 'react-media';

import Desktop from './desktop';
import Mobile from './mobile';

import { mobileThreshold } from './../../../constants';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'header-0'
    };
  }

  componentDidMount() {
    this.setState({ key: 'header-1' });
  }

  render() {
    return (
      <Media query={{ maxWidth: mobileThreshold }} key={this.state.key}>
        {matches => (matches ? <Mobile pageName={this.props.pageName} /> : <Desktop pageName={this.props.pageName} />)}
      </Media>
    );
  }
}
