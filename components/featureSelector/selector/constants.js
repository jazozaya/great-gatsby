
// Feature Details.
// React tends to complain if we have dynamic imports - so we import all SVGs here.
export const buttonDescriptions = {
  print: {
    name: "print",
    label: "Create Circuit Boards",
    iconSvg: require('!raw-loader!./icons/circuit.min.svg'),
  },
  reflow: {
    name: "reflow",
    label: "Reflow Solder",
    iconSvg: require('!raw-loader!./icons/reflow.min.svg'),
  },
  paste: {
    name: "paste",
    label: "Dispense solder paste",
    iconSvg: require('!raw-loader!./icons/ic.min.svg'),
  }
}
