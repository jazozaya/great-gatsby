---
path: "/docs/punk-console/printing-the-circuit/"
date: "2018-11-11"
category: "Getting started"
section: "Punk Console"
title: "4. Printing the circuit"
---

## Punk Console: Printing

The key reason we are printing right after drilling (without removing the substrate) is because we will have a perfect alignment between the ink and drill hole. We can confidently probe and print our first layer without tripping up over holes.

## Printing the top layer

Jump into the print workflow and **click ALIGNED**. Then load the following files:

- [Punk_Console.GTL](/docs/gettingStarted/punkConsole/drillingTheHoles/Punk_Console.GTL)
- [Punk_Console.TXT](/docs/gettingStarted/punkConsole/drillingTheHoles/Punk_Console.TXT)

The top layer of the circuit looks like this:

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/printingTheCircuit/topLayer.jpg">
</div>

When it comes time to position the print, click the 'Reuse Alignment' button. The alignment that was used during the drilling step will be loaded.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/printingTheCircuit/ReuseAlignment.png">
</div>

Continue with the print workflow, it will be very similar to printing a single sided board except the **priming pattern may print on top of holes**. This is normal and does not have negative side effects. You may wipe down the ink afterwards.

## Baking your board.

To bake your board, you will need to loosen the clamps and flip the board, but remember to remove the **sacrificial layer** to ensure the board reaches the curing temperatures.

<div class="important info">
<p><strong>Important</strong>: Remove the sacrificial layer when you start the bake. Otherwise the board will not get hot enough!</p>
</div>

**Note**: The substrates provided with the V-One Drill are made of FR1. You might see the substrate brown a bit after the baking cycle.

## Printing the bottom layer

To print the bottom layer, clamp the board with the blank side up. It is not necessary to mount the sacrificial layer. Start the print workflow and once again choose 'Aligned' when asked.

Load the following files:

- [Punk_Console.GBL](/docs/gettingStarted/punkConsole/drillingTheHoles/Punk_Console.GBL)
- [Punk_Console.TXT](/docs/gettingStarted/punkConsole/drillingTheHoles/Punk_Console.TXT)

The drilled holes are used to align the board. The software will automatically pick two holes for you to use, but for this circuit you should override the selection and use the following holes:

### First Alignment

In the 'Align Circuit' step, click the following hole and align to it. When you click measure, the probe will record the position and descend into the hole, this is normal.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/printingTheCircuit/selection.jpg">
</div>

### Second Alignment

Select the following hole for the second feature.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/printingTheCircuit/selection2.jpg">
</div>

Once alignment is complete continue with the probing, printing and baking steps.

After the bake cycle finishes we can start the board assembly. When you are ready, let's start the assembly step.

<div class="navigation">
    <a href="/docs/punk-console/drill-the-holes/" class="left">< Back</a>
    <a href="/docs/punk-console/rivets-and-assembly/" class="right">Next ></a>
</div>
