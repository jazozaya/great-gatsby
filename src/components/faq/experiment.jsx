import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

export default class Experiment extends React.Component {

  render() {
    return (
      <div>
        <h2>Experimenting with the V-One</h2>
        <Collapse>
          <Panel header="What inks can you print with?  Can you print with mine?">
            <p>
              The V-One is a very robust systems and is capable of handling a wide variety of high viscosity fluids. Most fluids can be dispensed right out of the box with little to no modifications.
            </p>
            <p>
              If you are interested in dispensing your own fluids please contact us at support@voltera.io. We offer empty cartridges on our store for precisely this reason.  Furthermore, if your inks are UV sensitive, we also have UV blocking cartridges.
            </p>
          </Panel>
          <Panel header="What substrates can you print on?  Can you print on mine?">
            <p>Our ink requires a curing process of 200C, and in general if the substrate is able to withstand that temperature you are likely able to print on it.
            </p>
            <p>For rigid substrates we have printed on FR4, glass and ceramics. We have also printed on flex substrates in the past, specifically polyimide (kapton) films. We have made circuits successfully, however the ink will fracture if bent too aggressively, and the resistance will increase over repeated flexing. We are currently looking into inks made specifically for flexible applications.
            </p>
          </Panel>
        </Collapse>
      </div>);
    }
  }
