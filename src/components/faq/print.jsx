import React from "react";

import Question from "./utils/question";
import Template from "./utils/template";

export default class PrintFAQ extends React.Component {
  render() {
    const { title, all, id } = this.props;
    return (
      <Template id={id} title={title} all={all}>
        <Question underline title="How long does an ink cartridge last?">
          <p>
            A single ink cartridge will allow you to print up to 85 <strong>Hello World</strong> boards. This also equates to 100 m of
            conductive trace at 8 mil width, or 200 cm2 of solid pour. The number of boards you are able to print will depend on size and
            complexity of the circuits you are building.
          </p>
          <p>The ink cartridge has an official shelf life of 6 months and should be stored in the refrigerator when not used.</p>
        </Question>
        <Question underline title="Are there frequency or current limitations?">
          <p>
            An 8 month research partnership with the University of Alberta demonstrated the ink will perform on par with standard copper up
            to 5 GHz!
          </p>
          <p>
            To learn about conductivity considerations, visit our{" "}
            <a target="_blank" href="https://support.voltera.io/hc/en-us/articles/115005825067/#Conductivity" rel="noopener noreferrer">
              article
            </a>{" "}
            in our support docs.
          </p>
        </Question>
        <Question underline title="Does the ink deteriorate over time?">
          <p>
            We've tested our printed PCBs under 100mA load for 4 months in ambient, high-temperature (60°C) and low-temperature (5°C)
            environments, with no detectable change in performance.
          </p>
        </Question>
        <Question underline title="How does this ink compare to copper?">
          <p>
            The bulk resistivity of our ink is 9.5E-7 Ohms.m and the sheet resistance under typical conditions is 12 mOhms/sq. It is among
            the best conductive inks on the market and while it is not as conductive as copper, it is capable of handling almost all digital
            and analog applications.
          </p>
        </Question>
        <Question title="Am I limited in what components I can use?">
          <p>
            We recommend you stick with through-hole for large components like connectors, but use surface mount components for resistors
            and capacitors.
          </p>
          <p>
            For passive components, we can dispense ink down to 0402 pads. For IC's, although we officially support 0.8 mm pin to pin pitch,
            0.65mm has been shown to work reliably.
          </p>
        </Question>
      </Template>
    );
  }
}
