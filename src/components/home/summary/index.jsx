import React from 'react'
import { Link } from 'gatsby'

import './summary.scss'

export default class Summary extends React.Component {

  render() {
    return (
      <div className="summary-wrapper">
        <section className="summary center-narrow">
          <h2>The V-One <Link to="/product/print/">prints double sided PCBs</Link>, dispenses <Link to="/product/paste/">solder paste</Link>, and will help you explore <Link to="/product/experiment/">new materials and substrates</Link>.</h2>
        </section>
      </div>
    );
  }
}
