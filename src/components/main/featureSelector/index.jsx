import React from 'react';

import Print from './teaser/print'
import Paste from './teaser/paste'
import Software from './teaser/software'

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
