import React from 'react';
import './featureSelector.scss';

import Print from './teaser/print'
import Paste from './teaser/paste'
import Software from './teaser/software'
import Selector from './selector'
import { buttonDescriptions as f } from './selector/constants'

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
