
// Feature Details.
// React tends to complain if we have dynamic imports - so we import all SVGs here.
export const features = {
  print: {
    name: "print",
    label: "Create Circuit Boards",
    iconSvg: require('!raw-loader!./icons/circuit.min.svg'),
    url: "myUrl",
    gallery: [{
      imgUrl: "/assets/features/print-1.jpg",
      subtitle:"Repeatable 8 mil trace width"
      },
      {
        imgUrl: "/assets/features/print-2.jpg",
        subtitle:"Repeatable 8 mil trace width"
      },
      {
      imgUrl: "/assets/features/print-3.jpg",
      subtitle:"Repeatable 8 mil trace width"
      }]
  },
  reflow: {
    name: "reflow",
    label: "Reflow Your Parts on",
    iconSvg: require('!raw-loader!./icons/reflow.min.svg'),
    url: "myUrl"
  },
  paste: {
    name: "paste",
    label: "Dispense solder paste",
    iconSvg: require('!raw-loader!./icons/ic.min.svg'),
    url: "myUrl"
  },
  software: {
    name: "software",
    label: "Software you want to use",
    iconSvg: require('!raw-loader!./icons/software.min.svg'),
    url: "myUrl"
  },
  platform: {
    name: "platform",
    label: "Build faster with templates",
    iconSvg: require('!raw-loader!./icons/platform.min.svg'),
    url: "myUrl"
  },
  experiment: {
    name: "experiment",
    label: "Experiment with the V-One",
    iconSvg: require('!raw-loader!./icons/experiment.min.svg'),
    url: "myUrl"
  }
}
