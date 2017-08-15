import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

import Template from './template'

export default class PasteFAQ extends React.Component {

  render() {
    const { title, all } = this.props;
    return (
      <Template title={title} all={all}>
        <Collapse>
          <Panel header="How long does a paste cartridge last?">
            <p>A single solder paste cartridge will allow you to dispense up to 11,000 0603 solder pads.</p>
            <p>The solder paste cartridge has a an official shelf life of 10 months and should be stored in the refridgerator when not used.</p>
          </Panel>
          <Panel header="How long does it take to paste and reflow?">
            <p>Once you teach the software where the board is mounted, the V-One will take about 5-10 minutes to dispense paste.</p>
            <p>Components need to be placed by hand, but once they are placed, reflowing the board only takes about 2 or 3 minutes.</p>
          </Panel>
          <Panel header="Can I use my own paste and reflow profile?">
            <p>The heated bed can reach a maximum temperature of 240°C (464°F) in about 2 minutes. If you use your own solder paste you can manually control the temperature to follow your own reflow profile.</p>
            <p>If you want to use the V-One mainly for solder paste dispensing of fabbed boards, we offer a <a target="_blank" href="https://store.voltera.io/products/solder-paste-cartridge-sn60pb40-alloy">special solder alloy</a> for boards with a lead based HASL finish.</p>
          </Panel>
          <Panel header="Does the solder paste contain lead?">
            <p>Nope! Elemental analysis of our solder paste alloy shows a 0.01% trace amount of lead. This is well below the maximum of 0.07% required by IPC J-STD-006-B for lead-free solder.</p>
            <p>The conductive ink and solder wire are also lead free. Download the <a target="_blank" href="http://voltera.io/MSDS">MSDS</a> to learn more.</p>
          </Panel>
          <Panel header="Am I limited in what components I can use?">
            <p>We can dispense solder paste down to 0402 components and although we officially support a 0.5 mm pin to pin pitch, some of our users have dispensed on 0.4 mm pitch IC's without difficulty. We have also dispensed on BGA components reliably.</p>
          </Panel>
        </Collapse>
      </Template>
    );
  }
}
