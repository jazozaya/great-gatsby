import React from 'react'

export default class Row extends React.Component {

  render() {

    // The row may be highlighted dark or light (we alternate)
    // The fist item (category) needs to have a class applied
    const { dark, units } = this.props;
    const className = dark ? "row dark" : "row"
    const category = React.cloneElement(this.props.children[0], {className:"category"})

    return (
      <div className={className}>
        {category}
        {units === "both" || units === "Metric" ? this.props.children[1]: null}
        {units === "both" || units === "Imperial" ? this.props.children[2]: null}
      </div>
    );
  }
}
