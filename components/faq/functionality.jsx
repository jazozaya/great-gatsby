import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

export default class Functionality extends React.Component {

  render() {
    return (
      <div>
        <h2>Functionality of the V-One</h2>
        <Collapse>
          <Panel header="What is the print area of the V-One?">
            135mm x 113.5mm (5.3" x 4.4"). Visit our specifications for full product details.
          </Panel>
          <Panel header="Does Voltera provide CAD tools for circuit design?">
            The Voltera software allows you to use whatever CAD tool you are already comfortable with!  Export your designs as Gerbers and upload to our software.  Easy as that!
          </Panel>
          <Panel header="How does double sided printing work?">
            We created a video that walks you through this process!
          </Panel>
          <Panel header="Can you hand solder to the ink?">
            We have a comprehensive user guide on soldering to conductive ink for through-hole components and connectors.  Take a look!
          </Panel>
          <Panel header="Am I limited in what components I can use in my designs?">
            In terms of passive components, we can dispense ink and solder paste down to 0402.   Although we officially support 0.8 mm pin to pin pitch, 0.65mm has been shown to work reliably.  We would recommend checking out the topic on our forums. Although we likely cannot print BGA components (they tend to have ball-to-ball pitches smaller than our current limits) we should be able to dispense paste for them.
          </Panel>
          <Panel header="Can I print power and ground planes?">
            We recommend that features like planes and polygons are adjusted to have a hatch fill, rather than a solid fill. This will conserve ink and speed up printing time significantly. More information can be found here.
          </Panel>


          <Panel header="Does the V-One drill through holes and vias?">
            The V-One currently does not drill holes.  We recommend you use a small drill press or Dremel press with an inexpensive rotary tool collet and a PCB drill bit set to help you drill a variety of sizes for vias and through-hole pads.
          </Panel>

          <Panel header="Does the V-One pick-and-place components?">
            The V-One currently does not have an integrated pick-and-place, so components must be placed by hand. The V-One has been designed to fab 1-20 boards.  At these volumes setting up a pick and place machine can take more time and effort than manual placement.
          </Panel>

          <Panel header="Can it print more than 2 layers?">
            We're working hard to expand the functionality of the V-One.  Currently we only support 2 layer boards.
          </Panel>
        </Collapse>
      </div>);
    }
  }
