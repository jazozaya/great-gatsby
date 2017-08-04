import React from 'react'

import './awards.scss'

export default class Awards extends React.Component {

  constructor(props){
    super(props);
    this.state = { windowWidth: 1920};
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth })
  }

  renderDivider() {
    if (this.state.windowWidth < 600) {
      return null;
    }
    return <div className="vertical"></div>
  }

  render() {

    return (
      <div className="awards-wrapper">
        <h2>An award winning machine.</h2>
        <div className="awards flex-row center-narrow">
          <div>
            <a href="http://techcrunch.com/2015/01/08/and-the-winner-of-hardware-battlefield-2015-is-voltera/" target="_blank">
              <img className="individual-award" src="/awards/techcrunch-hardware.gif" />
            </a>
            <h3>"International Winner"</h3>
          </div>
          {this.renderDivider()}
          <div>
            <a href="http://www.popsci.com/3d-printer-circuit-boards" target="_blank">
              <img className="individual-award" src="/awards/popular-science.gif" />
            </a>
            <h3>"Invention of the Year"</h3>
          </div>
          {this.renderDivider()}
          <div>
            <a href="http://www.jamesdysonaward.org/en-GB/news/voltera-v-one-wins-2015-james-dyson-award/" target="_blank">
              <img className="individual-award" src="/awards/james-dyson-award.gif" />
            </a>
            <h3>"International Winner"</h3>
          </div>
          {this.renderDivider()}
          <div>
            <a href="http://makezine.com/2015/06/15/volteras-v-one-prints-2-layer-circuit-boards/" target="_blank">
              <img className="individual-award" src="/awards/maker-faire.gif" />
            </a>
            <h3>"Editor's Choice"</h3>
          </div>
        </div>
      </div>
    );
  }
}
