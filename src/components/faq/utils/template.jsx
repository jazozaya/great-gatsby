import React from 'react'
import Link from 'components/common/linkWrapper'

export default class Template extends React.Component {

  render() {
    const { title, all, id } = this.props;
    return (
      <div id={id} className="faq-section">
        <h2 className="pull-left">{title}</h2>
        {this.props.children}
        <div className="pull-right">
          {all ? <Link to="/faq/">See all questions...</Link> : null}
        </div>
      </div>
    );
  }
}
