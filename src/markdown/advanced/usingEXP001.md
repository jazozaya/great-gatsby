---
path: "/docs/using-exp001/"
date: "2018-11-11"
category: "Advanced topics"
section: ""
title: "Using EXP001 (Exp. Ink)"
---

## Overview

Working with the experimental conductive ink (EXP001 Ink) is very similar to our standard conductive ink, with the following exceptions:

1. **Improved Solder Wetting**. The EXP001 ink tends to accept solder easier when properly burnished and cured. Use flux and solder at 180C-210C with a clean soldering iron for best results.

1. **The Double-Sided Procedure has changed for rivets**. The ink is hard, but brittle. The standard riveting procedure will fracture pads. Instead, follow the procedures and guidelines described below.

1. **The curing profile is very sensitive**. This conductive ink _must_ be cured in accordance with the set profile. Even a difference of 10 degrees will significantly affect the ink resistance.

## Double Sided Procedure Adjustments

Because the EXP001 ink is brittle, the double-sided board procedure requires three adjustments:

1. **Holes and pads must be oversized in the design file**. This will give enough clearance to ensure that the ink doesn’t overlap the hole - otherwise, the ink will fracture or delaminate when inserting the rivets.

1. **Rivets must be soldered, not malleted**. EXP001 ink will fracture if malleted. Solder rivets directly to the ink instead.

1. **Reflow soldering is done before riveting**. The rivets will not be flat, which will introduce risk of nozzle crashing if you paste and reflow after riveting.

Follow the table below when designing pads for the rivets:

<table style="width: 700px;">
<tbody>
<tr>
<td style="width: 175px;"><strong>Rivet Size (ID)<br>[mm]</strong></td>
<td style="width: 175px;"><strong>Via ID<br>[mm]</strong></td>
<td style="width: 175px;"><strong>Via OD <br>[mm]</strong></td>
<td style="width: 175px;"><strong>Drill Bit Size <br>[mm]</strong></td>
</tr>
<tr>
<td style="width: 175px;">0.4</td>
<td style="width: 175px;">1.0</td>
<td style="width: 175px;">2.0</td>
<td style="width: 175px;">0.7</td>
</tr>
<tr>
<td style="width: 175px;">1.0</td>
<td style="width: 175px;">1.9</td>
<td style="width: 175px;">3.2</td>
<td style="width: 175px;">1.6</td>
</tr>
</tbody>
</table>

## Guide: Double-Sided Test Board

<div class="warning info">
<p><strong>NOTE</strong>: This guide assumes you are already familiar with Drilling, Printing, Riveting, and Soldering. If you are not, we highly recommend going through the linked guides first. 
</div>

For this guide, we’ll be using the EXP001 ink to make a modified Punk Console board.

Parts required (available on our [store](/store/collection/drilling/)):

- The _modified_ Punk Console Gerber files
- The Punk Console Kit
- A 2x3 or 3x4 FR1 board
- Rivets (1.0mm and 0.4mm)
- Tin-Bismuth solder paste and solder wire

Punk Console Gerbers:

- [Punk Console EXP001.GTL](/docs/advanced/usingEXP001/Punk_Console_EXP001.GTL) (Top Layer)
- [Punk Console EXP001.GBL](/docs/advanced/usingEXP001/Punk_Console_EXP001.GBL) (Bottom Layer)
- [Punk Console EXP001.GTP](/docs/advanced/usingEXP001/Punk_Console_EXP001.GTP) (Paste Layer)
- [Punk Console EXP001.TXT](/docs/advanced/usingEXP001/Punk_Console_EXP001.TXT) (Drill File)

### Drilling

Ensure you load the modified Punk Console files.

The software will expect that you are producing over-sized holes, so you need to consciously choose the right drill bit, rather than following the recommendations.

<table>
<tbody>
<tr>
<td style="width: 220px;"><strong>Hole Size (Design) [mm]</strong></td>
<td style="width: 220px;"><strong>Drill Bit [mm]</strong></td>
</tr>
<tr>
<td style="width: 220px;">1.0</td>
<td style="width: 220px;">0.7</td>
</tr>
<tr>
<td style="width: 220px;">1.9</td>
<td style="width: 220px;">1.6</td>
</tr>
</tbody>
</table>

### Printing the Top and Bottom layers

To use the EXP001 ink:

1. Enter the PRINT step and select either SIMPLE or ALIGNED (depending on how you did the DRILL step)
1. Select the **EXP001** ink profile during the ink select step.
1. Proceed as normal to print.
1. Bake with the **EXP001** profile.
1. Repeat for side 2.

### Soldering & Assembly

<div class="warning info">
<p><strong>NOTE</strong>: The PCB will need to be pasted and reflowed before riveting.
</div>

1. **Ensure you burnish** diligently for 20 seconds. Your board should be silver and reflective after burnishing.

<div class="media-wrapper">
<img src="/docs/advanced/usingEXP001/shiny-board-700px.jpg" />
</div>

2. Solder paste dispensing is done as usual.

3. See the image below for component placement. The LED polarity is important, make sure it’s placed so that the arrow in the diagram points towards the green line on the LED.

   <div class="media-wrapper">
   <img src="/docs/advanced/usingEXP001/PunkConsole.png" />
   </div>

### Riveting

Now that the board is soldered, we’re ready for riveting. Follow the steps below:

Preparing the board

1. **Flip the board** so the component-side (top) is facing down.
1. **Insert rivets from the back-side** of the board, so they are protruding through the front (the component side).
1. **Place a larger piece of FR4** on the back side, to keep the rivets in place.

<div class="media-wrapper">
    <img src="/docs/advanced/usingEXP001/Flipping.png" />
</div>

4. **Flip the boards together**, keeping the rivets in place.
1. We recommend **taping down both boards** at this point to keep things from moving around. Use some painters’ tape to secure the Punk Console board and the backing board to the workbench / table.
1. **Apply flux generously to the rivet/pad.**
1. Set the soldering iron to 200C.

### Soldering the rivets

For the 1.0 mm rivets, you’ll want to ensure that you don’t get solder inside or overtop of the rivet, otherwise you won’t be able to feed in your component leads afterwards. The 0.4mm rivets can and should be fully covered in solder.

Before starting, watch the video below:

<div class="media-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/CNOCTPIeNhY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

1. Apply heat to the pad and rivet, and feed in a generous amount of solder wire.

<div class="warning info">
<p><strong>NOTE</strong>: For the 1.0mm rivets, solder only to the sides, leaving the inner channel clear.
</p>
</div>

2. Pull the iron around to the other side of the rivet, ensuring a solid connection on all sides.
1. Repeat for all rivets on the top side.
1. Once the rivets are soldered on the top side, insert your through-hole components and flip the board over (or hold in helping hands, whatever is easier).
1. Solder component leads to the rivet / pad on the bottom side. Ensure that solder bridges the rivet and ink.
1. For the 0.4mm rivets, simply solder over top of the rivet and pad to ensure electrical connection.
