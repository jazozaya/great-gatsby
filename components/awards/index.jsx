import React from 'react'
import Award from './award'

import './awards.scss'

export default class Awards extends React.Component {

render() {
  return (<div className="awards">
  <div className="awards-wrapper">
    <Award
      imageUrl="/assets/awards/techcrunch-hardware.jpg"
      linkUrl="http://techcrunch.com/2015/01/08/and-the-winner-of-hardware-battlefield-2015-is-voltera/"
      label="International Winner"
      />
    <div className="vertical"></div>
    <Award
      imageUrl="/assets/awards/popular-science.jpg"
      linkUrl="http://www.popsci.com/3d-printer-circuit-boards"
      label="Invention of the Year"
      />
    <div className="vertical"></div>
    <Award
        imageUrl="/assets/awards/james-dyson-award.jpg"
        linkUrl="http://www.jamesdysonaward.org/en-GB/news/voltera-v-one-wins-2015-james-dyson-award/"
        label="International Winner"
        />
    <div className="vertical"></div>
    <Award
      imageUrl="/assets/awards/maker-faire.jpg"
      linkUrl="http://makezine.com/2015/06/15/volteras-v-one-prints-2-layer-circuit-boards/"
      label="Editor's Choice"
      />
  </div>
</div>);
}
}

// <Award
//     imageUrl="/assets/awards/canadian-printed-electronics.jpg"
//     linkUrl="https://cpes2017.ca/"
//     label="Most Innovative"
//     />
