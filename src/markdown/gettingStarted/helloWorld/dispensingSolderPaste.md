---
path: "/docs/hello-world/dispensing-solder-paste/"
date: "2018-11-11"
category: "Getting started"
section: "Hello World"
title: "4. Dispensing solder paste"
---

## Hello World: Paste

_Before starting, ensure you have completed the previous section, and have assembled and primed the solder paste dispenser_

## Burnish

Burnishing cleans up the surface and aids in soldering. It’s easy:

- Scrub the circuit with the burnishing pad for about 20 seconds.
- Keep going until the circuit turns a faint silver colour.
- Applying more pressure to the pad will speed up the process.

<div class="media-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/6m3PPKZIS6M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

To check if the pads are fully burnished, hold the board up to a bright light. Burnished pads will have a **slight shine** when reflecting the light. If in doubt, burnish for another 20 seconds.

## Locate Pads

Like you did previously:

1. Clamp the board
1. Mount the probe

To dispense solder paste, the V-One first needs to know the orientation of the board. To do this, you will need to help the V-One locate the designated pads:

1. Click the **MOVE TO PAD** button to start the pad location process.
1. Use the **arrow keys** to move the printer to the _approximate_ location of the pad that is highlighted in the print preview. You do not need to align it perfectly just yet.
1. Click **LOWER** to drop the probe to the surface of the board.
1. Use the **arrow keys** to once again adjust the position of the probe. This time, position the probe in the **center** of the highlighted pad
1. click **MEASURE** to confirm the pad location.
1. Repeat steps 1-5 for the second highlighted pad.

<div class="warning info">
<p>Take your time! If the alignment is off, the solder paste will not print in the right spot.</p>
</div>

After locating the pads, the V-One now has a pretty good idea of where the board is located.

## Validate Pads

Before we get to printing the solder paste, use this step to make sure that the pad alignment is accurate.

Click on any pads in the print preview, and the printer will go to the center of the pad. If you notice that the position is off, press the **BACK** button and repeat the Locate Pad steps.

## Print

<div id="paste-calibrate">
<h3>1. Calibrate first</h3>
</div>

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/dispensingSolderPaste/select_pads.jpg">
</div>

1. Dispense solder paste on a few small pads close to the edge – we recommend using the orange pads selected below.
1. Click **START** to begin printing . Adjust the solder paste flow using **-** and **+** until the pads are completely covered, but not overflowing.
1. If there is too much paste, wipe the solder off of the selected pads and decrease the flow.

### 2. Print solder paste

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/dispensingSolderPaste/paste-dispensed.jpg">
</div>

When you are happy with the amount of solder paste, select the remaining pads and press print!

This completes the solder paste dispensing feature. Let’s move along to the next article and discover the V-One’s reflow capabilities!

<div class="navigation">
    <a href="/docs/hello-world/printing-the-circuit/" class="left">< Back</a>
    <a href="/docs/hello-world/reflow-and-assembly/" class="right">Next ></a>
</div>