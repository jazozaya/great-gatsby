import React from 'react'
import Link from 'gatsby-link'

import './summary.scss'

export default class Summary extends React.Component {

  render() {
    return (
      <div className="summary-wrapper">
        <section className="summary center-narrow">
          <h2>The V-One <a href="#print">prints double sided PCBs</a>, dispenses <a href="#paste">solder paste</a>, and will help you explore <Link to="/experiment/">new materials and substrates</Link>.</h2>
        </section>
      </div>
    );
  }
}
