import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

import Template from './template'

export default class ExperimentFAQ extends React.Component {

  render() {
    const { title, all } = this.props;
    return (
      <Template title={title} all={all}>
        <Collapse>
          <Panel header="Can I print with my own inks?">
            <p>The V-One is a very robust systems and is capable of handling a wide variety of high viscosity fluids. Most fluids can be dispensed right out of the box with little to no modifications.</p>
            <p>If you are interested in dispensing your own fluids please contact us at <strong>support@voltera.io</strong>. We offer empty cartridges on our store for precisely this reason.  Furthermore, if your inks are UV sensitive, we also have UV blocking cartridges.</p>
          </Panel>
          <Panel header="What substrates can I print on?">
            <p>Our conductive ink requires a curing process of 200C for 30 minutes. In general, if the substrate is able to withstand that temperature then probably able to print on it.</p>
            <p>For rigid substrates we have printed on FR4, glass and ceramics. We have also printed on flex substrates in the past, specifically polyimide (kapton) films.</p>
          </Panel>
          <Panel header="Do you have inks for flexible electronics?">
            <p>Yes! We currently offer one ink specifically for flexible applications in our <a target="_blank" href="https://store.voltera.io/products/flexible-and-stretchable-conductive-ink-cartridge">store</a>. Our R&D team is always exploring new inks, we hope to offer more in the future.</p>
            <p>Our standard ink is not made for flexible appliactions and will fracture if bent too aggressively, so we don't recommend it for applications that wil undergo repeated flexing.</p>
          </Panel>
          <Panel header="Can I get an empty cartridge?">
            <p>Yes! If you want to fill your own cartridge we have a pack of empty cartridges in our store that come with all the accessories you need to fill them properly.</p>
          </Panel>
        </Collapse>
      </Template>
    );
  }
}
