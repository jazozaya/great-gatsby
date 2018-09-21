import React from 'react'
import Link from 'gatsby-link'

import Question from './utils/question'
import Template from './utils/template'

export default class TechnologyFAQ extends React.Component {

  render() {
    const { title, all, id } = this.props;
    return (
      <Template id={id} title={title} all={all}>
        <Question underline title="How long does it take to make a board?">
          <p>It's very quick!</p>
          <p>A simple board like the <strong>Hello World</strong> will take about 5 minutes to print, 30 minutes to bake (the ink needs to be dried), and depending on how fast you place your components about 10-15 minutes to dispense solder paste and reflow.</p>
          <p>You can comfortably make a simple single layer board in under an hour.</p>
        </Question>
        <Question underline title="What is the print area of the V-One?">
          <p>127mm x 104mm (5.0â€ x 4.1â€). Visit our <Link to="/specs/">specifications</Link> page for full product details.</p>
        </Question>
        <Question underline title="Can the V-One make vias and through holes?">
          <p>It does now! We just released the <strong>V-One Drill!</strong> - an attachment to the V-One</p>
          <p>The <strong>V-One Drill</strong> makes double sided boards much easier to create and comes with all the drill bits, rivets and other accessories you need to get started. Learn more about it <Link to="/product/drill/">here!</Link></p>
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
