import React from 'react'

import Question from './utils/question'
import Template from './utils/template'

export default class ExperimentFAQ extends React.Component {

  render() {
    const { title, all } = this.props;
    return (
      <Template title={title} all={all}>
        <Question underline title="Can I print with my own inks?">
          <p>The V-One is a very robust systems and is capable of handling a wide variety of high viscosity fluids. Most fluids can be dispensed right out of the box with little to no modifications.</p>
          <p>If you are interested in dispensing your own fluids please contact us at <strong>support@voltera.io</strong>. We offer empty cartridges on our store for precisely this reason. If your inks are UV sensitive, we also have UV blocking cartridges.</p>
        </Question>
        <Question underline title="What substrates can I print on?">
          <p>Our conductive ink requires a curing process of 200C for 30 minutes. In general, if the substrate can withstand that temperature then you're probably able to print on it.</p>
          <p>For rigid substrates we have printed on FR4, glass and ceramics. We have also printed on flex substrates in the past, specifically polyimide (kapton) films.</p>
        </Question>
        <Question underline title="Do you have inks for flexible electronics?">
          <p>Yes! We currently offer one ink specifically for flexible applications in our <a target="_blank" href="https://store.voltera.io/products/flexible-and-stretchable-conductive-ink-cartridge">store</a>. Our R&D team is always exploring new inks, we hope to offer more in the future.</p>
          <p>Our standard ink is not made for flexible applications and will fracture if bent too aggressively, so we don't recommend it for applications that wil undergo repeated flexing.</p>
        </Question>
        <Question title="Can I get an empty cartridge?">
          <p>Yes! If you want to fill your own cartridge we have a pack of empty cartridges in our store that come with all the accessories you need to fill them properly.</p>
        </Question>
      </Template>
    );
  }
}
