import React from 'react'
import Link from 'components/common/linkWrapper'

import Question from './utils/question'
import Template from './utils/template'

export default class TechnologyFAQ extends React.Component {

  render() {
    const { title, all } = this.props;
    return (
      <Template title={title} all={all}>
        <Question underline title="How long does it take to make a board?">
          <p>It's very quick!</p>
          <p>A simple board like the <strong>Hello World</strong> will take about 5 minutes to print, 30 minutes to bake (the ink needs to be dried), and depending on how fast you place your components about 10-15 minutes to dispense solder paste and reflow.</p>
          <p>You can comfortably make a simple single layer board in under an hour.</p>
        </Question>
        <Question underline title="What is the print area of the V-One?">
          <p>135mm x 113.5mm (5.3" x 4.4"). Visit our <Link to="/specs/">specifications</Link> page for full product details.</p>
        </Question>
        <Question underline title="Does the V-One drill through holes and vias?">
          <p>The V-One currently does not drill holes.  We recommend you use a small drill press or Dremel press with an inexpensive rotary tool collet and a PCB drill bit set to help you drill a variety of sizes for vias and through-hole pads.</p>
        </Question>
        <Question underline title="Does the V-One pick-and-place components?">
          <p>The V-One currently does not have an integrated pick-and-place, so components must be placed by hand. The V-One has been designed to be a prototyping tool.  At these volumes setting up a pick and place machine can take more time and effort than manual placement.</p>
        </Question>
        <Question title="Can it print more than 2 layers?">
          <p>We're working hard to expand the functionality of the V-One.  Currently we only support 2 layer boards.</p>
        </Question>
      </Template>
    );
  }
}
