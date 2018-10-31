import thumbflexHeater from "./thumbnail/flexible-heater.jpg";
import thumbPhoton from "./thumbnail/voltera-photon-shield.jpg";
import thumbDoubleTutorial from "./thumbnail/double-sided-tutorial.jpg";
import thumbSolderPaste from "./thumbnail/solder-paste-preview.jpg";
import thumbFastReflow from "./thumbnail/fast-reflow.jpg";
import thumbPasteAdjustment from "./thumbnail/dynamic-paste-adjustment.jpg";
import thumbOutlineBoard from "./thumbnail/outline-board.jpg";
import thumbSelectivePrint from "./thumbnail/selective-print.jpg";
import thumbMountDispenser from "./thumbnail/mount-the-dispenser.jpg";
import thumbGlass from "./thumbnail/electronics-on-glass.jpg";
import thumbSurface from "./thumbnail/irregular-surface.jpg";
import thumbPrinted from "./thumbnail/printed-traces.jpg";

import largeflexHeater from "./large/flexible-heater.jpg";
import largePhoton from "./large/voltera-photon-shield.jpg";
import largeSolderPaste from "./large/solder-paste-preview.jpg";
import largePasteAdjustment from "./large/dynamic-paste-adjustment.jpg";
import largeGlass from "./large/electronics-on-glass.jpg";
import largePrinted from "./large/printed-traces.jpg";

export const printGallery = [
  {
    thumbnailURL: thumbflexHeater,
    largeURL: largeflexHeater,
    subtitle: "Create a flexible heater",
    description:
      "The V-One can dispense on a wide variety of surfaces. This pattern was printing on a flexible film that was molded to a 3d printed part."
  },
  {
    thumbnailURL: thumbPhoton,
    largeURL: largePhoton,
    subtitle: "Compatible with your Photon!",
    description:
      "We offer Arduino, Raspberry Pi and Photon templates to help you build faster. This particular board was used to automate a chicken coop door! Yes. IoT for chickens. ",
    source: "https://www.facebook.com/robotchickenworkshop/"
  },
  {
    thumbnailURL: thumbDoubleTutorial,
    subtitle: "Building a double sided circuit",
    description: "Follow along as we build a 2 layer LED Matrix using one our Arduino Mega templates.",
    videoId: "iMqxk5a3u0Q"
  }
];

export const pasteGallery = [
  {
    thumbnailURL: thumbSolderPaste,
    largeURL: largeSolderPaste,
    subtitle: "Preview before dispensing",
    description: "Just pick your paste file from your Gerbers and load it into the software to see how the solder paste will be dispensed. "
  },
  {
    thumbnailURL: thumbFastReflow,
    subtitle: "Reflowing in fast motion.",
    description:
      "One of the coolest reflow videos we've seen with the V-One. You can see how the heat radiates from the center of the board outwards. Soldering everything in its path. Blink and you'll miss it! ",
    videoId: "-yfQR5mc-Y8",
    source: "https://twitter.com/GenerLink/status/796104966683365377"
  },
  {
    thumbnailURL: thumbPasteAdjustment,
    largeURL: largePasteAdjustment,
    subtitle: "Tune your paste on the fly.",
    description:
      "Too much or not enough paste can lead to soldering problems. Get your paste coverage just right by adjusting it in real time."
  }
];

export const softwareGallery = [
  {
    thumbnailURL: thumbOutlineBoard,
    subtitle: "Position your print.",
    description: "The first step of a print is to let the software know where the board is located.",
    videoId: "CYf2HrWt7bw",
    maxWidth: "360"
  },
  {
    thumbnailURL: thumbSelectivePrint,
    subtitle: "Print what you need.",
    description: "The software allows customize what you want to print. You can also uses this to print a section multiple times.",
    videoId: "FpS8v_-SfKI",
    maxWidth: "360"
  },
  {
    thumbnailURL: thumbMountDispenser,
    subtitle: "Mount the dispenser.",
    description: "Mounting the dispenser is a breeze. All of our attachments have magnets so you can swap them without any special tools.",
    videoId: "KMVpMnKNyb4",
    maxWidth: "360"
  }
];

export const experimentGallery = [
  {
    thumbnailURL: thumbGlass,
    largeURL: largeGlass,
    subtitle: "Dispense on a glass slide.",
    description:
      "Get up close and personal by printing on a glass slide and looking at it under the microscope. Our standard ink adheres to almost everything, but you are welcome to use your own!"
  },
  {
    thumbnailURL: thumbSurface,
    subtitle: "Works with curved surfaces.",
    description:
      "An extreme example of how irregular surfaces are handled. The software is capable of measuring a very tight array of points to get good height mapping.",
    videoId: "ar6ioZEefSU"
  },
  {
    thumbnailURL: thumbPrinted,
    largeURL: largePrinted,
    subtitle: "Under the microscope.",
    description:
      "Print traces down to 8 mil (200 microns) out of the box. We even offer a 6 mil (150 micron) nozzle for extra fine resolution."
  }
];
