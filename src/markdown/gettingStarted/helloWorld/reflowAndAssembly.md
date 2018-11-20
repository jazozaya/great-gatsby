---
path: "/docs/hello-world/reflow-and-assembly/"
date: "2018-11-11"
category: "Getting started"
section: "Hello World"
title: "5. Reflow and assembly"
---

## Hello World: Reflow & Assembly

_Before starting, ensure you have completed the printing and solder paste sections of this tutorial._

## Assembly

Now that you have deposited solder paste on your circuit, all that is left to do is to place your components and reflow solder the board.

The Hello World circuit is a basic LED circuit. Holding a 9V battery to the + and - terminals on the circuit provides power, and a 555 timer IC chip sends the signal to flash the LEDs at a frequency determined by the resistor and capacitor values.

We have provided the schematic and layout below. If you use EAGLE, you can also download the source files [here](https://github.com/VolteraInc/circuit-design-resources/raw/master/Voltera%20Project%20Gerbers/Hello%20World/Hello_World.zip).

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/reflowAndAssembly/hello-world-brd.jpg">
</div>

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/reflowAndAssembly/hello-world-sch.jpg">
</div>

To assemble the circuit:

- Remove the components from the tape by peeling back the clear plastic.
- Carefully place your components onto the corresponding pads, as shown in the circuit layout.

<div class="warning info">
<p>Do not smear the solder paste when placing components. Once they are placed, press down gently so the components rest evenly on the pads.</p>
</div>

The components included in the Hello World Circuit Kit are Surface Mount Devices (SMD). Just like through-hole components, there are conventions for reading the values and orientations of SMD components:

### Resistors

The value of an SMD resistor is written directly on the package. The last digit is the multiplier, while the digits in front of it give the value

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/reflowAndAssembly/SMD_RES_180.png">
</div>

### LEDs

Unlike resistors, LEDs have a polarity! One side of the LEDs will be marked green, indicating the negative terminal. The image below shows how the LEDs should be arranged, according to the circuit layout:

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/reflowAndAssembly/hello-world-led.jpg">
</div>

### ICs (integrated circuits)

These packages must be placed in the correct orientation so that the pins line up with the right pads. There is a dot on the package (and in the layout) that indicates PIN #1, as shown below:

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/reflowAndAssembly/hello-world-ic.jpg">
</div>

## Reflow

Now that everything is set up, the circuit is ready to be reflow soldered.

1. From the start menu, select the **HEAT** option.
1. Click the **REFLOW** tile.
1. Select the solder paste you're using, based on the Lot number on the cartridge label.
1. Click **REFLOW** to start the process.

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/reflowAndAssembly/reflow.jpg">
</div>

<div class="important info">
<p>The V-One gets hot while reflowing. Do not touch! Do not leave unattended while heating!</p>
</div>

When the heating cycle finishes, the V-One will start **glowing blue**. This means the soldered PCB is safe to remove.

## Congratulations!

Your very first V-One printed and reflowed PCB is done! Unpack the 9V battery, and press the battery leads to the labelled pads to see your circuit say hello!

<div class="media-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/sdjhwUG9VuQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
</div>

This concludes the Hello World tutorial. We suggest you visit our [maintenance](/docs/hello-world/maintenance/) article to learn how to keep the V-One in tip top condition.

<div class="navigation">
    <a href="/docs/hello-world/dispensing-solder-paste/" class="left">< Back</a>
    <a href="/docs/hello-world/maintenance/" class="right">Next ></a>
</div>