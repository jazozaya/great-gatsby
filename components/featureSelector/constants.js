
// Feature Details.
// React tends to complain if we have dynamic imports - so we import all SVGs here.
export const features = {
  print: {
    name: "print",
    label: "Create Circuit Boards",
    iconSvg: require('!raw-loader!./icons/circuit.min.svg'),
  },
  reflow: {
    name: "reflow",
    label: "Reflow Your Parts on",
    iconSvg: require('!raw-loader!./icons/reflow.min.svg'),
  },
  paste: {
    name: "paste",
    label: "Dispense solder paste",
    iconSvg: require('!raw-loader!./icons/ic.min.svg'),
  },
  software: {
    name: "software",
    label: "Software you love to use",
    iconSvg: require('!raw-loader!./icons/software.min.svg'),
  },
  platform: {
    name: "platform",
    label: "Build faster with templates",
    iconSvg: require('!raw-loader!./icons/platform.min.svg'),
  },
  experiment: {
    name: "experiment",
    label: "Experiment with the V-One",
    iconSvg: require('!raw-loader!./icons/experiment.min.svg'),
  }
}
