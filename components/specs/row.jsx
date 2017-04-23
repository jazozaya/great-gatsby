import React from 'react'

export default class Row extends React.Component {

  render() {

    // The row may be highlighted dark or light (we alternate)
    // The fist item (category) needs to have a class applied
    const { light } = this.props;
    const className = light ? "row light" : "row"
    const category = React.cloneElement(this.props.children[0], {className:"category"})
    return (<div className={className}>
      {category}
      {this.props.children[1]}
      {this.props.children[2]}
    </div>);
  }
}
