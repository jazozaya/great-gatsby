import React from 'react'

import Question from './utils/question'
import Template from './utils/template'

export default class PrintFAQ extends React.Component {

  render() {
    const { title, all, id } = this.props;
    return (
      <Template id={id} title={title} all={all}>
          <Question underline title="What bit sizes are included?">
            <p>The V-One Drill ships with the following sizes: 0.70mm, 0.80mm, 0.90mm, 1.00mm, 1.60mm. Two drill bits for each size.</p>
            <p>If you need different sizes, let us know!</p>
          </Question>
          <Question underline title="How are vias and through holes created?">
            <p>We use rivets! Rivets are just small copper tubes.  They are placed in a hole and pressed into place using a special tool. A mechanical connection is made between the top and bottom layers.</p>
            <p>The V-One Drill comes with a pack of small rivets (200 pcs, 0.4mm ID) and large rivets (200 pcs, 1.0mm ID)</p>
          </Question>
          <Question underline title="Can I route shapes? What about copper?">
            <p>For the time being, only drilling holes are supported. The V-One is not designed to withstand the lateral forces experienced during milling.</p>
          </Question>
          <Question underline title="What hazards are there? I heard FR4 dust is toxic">
            <p>We use FR1 - it does not contain fiberglass and is a softer material, which means less wear on the drill bits. FR4 dust, on the other hand, contains fiberglass particles which can be harmful.</p>
          </Question>
          <Question underline title="I already have a V-One, will it work?">
            <p>Yes! We have designed the drilling attachment to be entirely backwards compatible. If you struggled with double sided boards in the past, this attachment will make your life easier!</p>
          </Question>

      </Template>
    );
  }
}
