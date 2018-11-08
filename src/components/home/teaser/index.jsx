import React from "react";

import Print from "./print";
import Paste from "./paste";
import Software from "./software";

export default class FeatureSelector extends React.Component {
  render() {
    return (
      <div>
        <section id="print">
          <Print />
        </section>
        <section id="paste">
          <Paste />
        </section>
        <section id="software">
          <Software />
        </section>
      </div>
    );
  }
}
