import React from 'react'

import './fastfact.scss'

export default class FastFact extends React.Component {

    render() {
      const { title, label } = this.props;
      return (
          <div className="fast-fact">
            <h4>{title}</h4>
            <p>{label}</p>
          </div>
        );
    }
  }
