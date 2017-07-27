import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

export default class Inks extends React.Component {

  render() {
    return (
      <div>
        <h2>Ink and Solder Paste</h2>
        <Collapse>
          <Panel header="How many pads can I print with a solder paste cartridge?">
            <p>
              A single solder paste cartridge will allow you to dispense up to 11,000 0603 solder pads.
            </p>
            <p>
              The official shelf life of the solder paste is 10 months from the time of delivery.
            </p>
          </Panel>
          <Panel header="Does solder paste contain lead?">
            No.  The ink and solder wire are lead free.  Elemental analysis of our solder paste alloy shows a 0.01% trace amount of lead. This is well below the maximum of 0.07% required by IPC J-STD-006-B for lead-free solder.
          </Panel>
          <Panel header="How many boards can I print with the ink cartridge?">
            A single ink cartridge will allow you to print up to 85 "Hello World" boards. This also equates to 100 m of conductive trace at 8 mil width, or 200 cm2 of solid pour.  The number of boards you are able to print will depend on size and complexity of the circuits you are building.
            <p>
              The official shelf life of the ink is 6 months from time of delivery.
            </p>
          </Panel>
          <Panel header="Does the ink have frequency limitations?  Current limitations? ">
            Our calculations show that it should hold up well to about 1 GHz, but we plan on characterizing the ink experimentally in the RF (hundreds of MHz), microwave (GHz), and millimeter-wave (tens of GHz) range over the next few months. We have a full article the performance of the ink under different loads.
          </Panel>
          <Panel header="Does the ink deteriorate over time?">
            We've tested our printed PCBs under 100mA load for 4 months in ambient, high-temperature (60C) and low-temperature (5C) environments, with no detectable change in performance.
          </Panel>
          <Panel header="How does this ink compare to standard copper?">
            The bulk resistivity of our ink is 9.5E-7 Ohms.m and the sheet resistance under typical conditions is 12 mOhms/sq.  It is among the best conductive ink on the market and while it is not as conductive as copper it is capable of handling most digital and analog applications.  Contact support@voltera.io if you have further questions.
          </Panel>
        </Collapse>
      </div>);
    }
  }
