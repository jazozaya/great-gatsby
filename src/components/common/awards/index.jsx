import React from 'react'
import Award from './award'

import './awards.scss'

export default class Awards extends React.Component {

  constructor(props){
    super(props);
    this.state = { windowWidth: 1920};
  }

  renderMobile() {

    return (

      <div className="awards-wrapper">
        <div className="awards">
          <Award
            imageUrl="/awards/techcrunch-hardware.jpg"
            linkUrl="http://techcrunch.com/2015/01/08/and-the-winner-of-hardware-battlefield-2015-is-voltera/"
            label="International Winner"
            />
          <Award
            imageUrl="/awards/popular-science.jpg"
            linkUrl="http://www.popsci.com/3d-printer-circuit-boards"
            label="Invention of the Year"
            />
          <Award
            imageUrl="/awards/james-dyson-award.jpg"
            linkUrl="http://www.jamesdysonaward.org/en-GB/news/voltera-v-one-wins-2015-james-dyson-award/"
            label="International Winner"
            />
          <Award
            imageUrl="/awards/maker-faire.jpg"
            linkUrl="http://makezine.com/2015/06/15/volteras-v-one-prints-2-layer-circuit-boards/"
            label="Editor's Choice"
            />
        </div>
      </div>);
    }

    componentDidMount() {
      this.setState({ windowWidth: window.innerWidth })
    }

    render() {

      if (this.state.windowWidth < 600) {
        return this.renderMobile();
      }

      return (<div className="awards-wrapper">
      <div className="awards">
        <Award
          imageUrl="/awards/techcrunch-hardware.jpg"
          linkUrl="http://techcrunch.com/2015/01/08/and-the-winner-of-hardware-battlefield-2015-is-voltera/"
          label="International Winner"
          />
        <div className="vertical"></div>
        <Award
          imageUrl="/awards/popular-science.jpg"
          linkUrl="http://www.popsci.com/3d-printer-circuit-boards"
          label="Invention of the Year"
          />
        <div className="vertical"></div>
        <Award
          imageUrl="/awards/james-dyson-award.jpg"
          linkUrl="http://www.jamesdysonaward.org/en-GB/news/voltera-v-one-wins-2015-james-dyson-award/"
          label="International Winner"
          />
        <div className="vertical"></div>
        <Award
          imageUrl="/awards/maker-faire.jpg"
          linkUrl="http://makezine.com/2015/06/15/volteras-v-one-prints-2-layer-circuit-boards/"
          label="Editor's Choice"
          />
      </div>
    </div>);
  }
}

// <Award
//     imageUrl="/awards/canadian-printed-electronics.jpg"
//     linkUrl="https://cpes2017.ca/"
//     label="Most Innovative"
//     />
