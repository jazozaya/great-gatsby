---
path: "/docs/working-with-rivets/"
date: "2018-11-11"
category: "Guides"
section: ""
title: "Working with rivets"
---

## What is a rivet?

When creating double sided boards with the Voltera V-One, there are 3 options for connecting the top and bottom layer after holes have been drilled.

- Threading a wire and soldering on both sides of the holes
- Plugging the drilled holes with conductive ink and bake
- Using rivets and a rivet tool

Threading a wire is the familiar approach, but it can be tedious to do. Plugging holes with ink provides a nicer experience but requires an extra baking step. In both methods, the holes made are filled in.

At Voltera - we recommend using rivets. A rivet (or eyelet) is a small hollow copper tube that can be inserted on one side of the board, then - using a specialized **rivet tool** - the rivets are pressed and deformed to connect both sides.

A mechanical connection is made between the ink and copper and can be later touched up with solder to form a stronger chemical bond.

<div class="media-wrapper">
<img src="/docs/guides/workingWithRivets/rivetBeforeAndAfter2.jpg">
</div>

Since rivets are hollow, they can also be used as plated through holes and will help secure your 0.1" headers or similar parts.

## Designing with rivets

We offer 2 rivet sizes on our store. Dimensions below:

<table>
<tbody>
<tr>
<td style="width: 160px;"><strong>Size</strong></td>
<td style="width: 160px;"><strong>Inner Diameter</strong></td>
<td style="width: 160px;"><strong>Outer Diameter</strong></td>
<td style="width: 160px;"><strong>Length</strong></td>
<td style="width: 160px;"><strong>Head Diameter</strong></td>
</tr>
<tr>
<td style="width: 160px;">Small</td>
<td style="width: 160px;">0.4 mm</td>
<td style="width: 160px;">0.6 mm</td>
<td style="width: 160px;">2.2 mm</td>
<td style="width: 160px;">0.9 mm</td>
</tr>
<tr>
<td style="width: 160px;">Large</td>
<td style="width: 160px;">1.0 mm</td>
<td style="width: 160px;">1.4 mm</td>
<td style="width: 160px;">2.5 mm</td>
<td style="width: 160px;">2.2 mm</td>
</tr>
</tbody>
</table>

<div class="media-wrapper">
<img src="/docs/guides/workingWithRivets/containers.jpg">
</div>

There are 2 things to keep in mind when designing with rivets - the drill hole and the head diameter.

### 1. The Drill Hole

To ensure the rivets fits in the hole nicely, the hole diameter needs to be 0.1 mm larger than the rivet outer diameter.

<div class="warning info">
<p>Use a drill size of 0.7mm for the small rivet and 1.5mm (or 1.6mm) for the large rivet.</p>
</div>

When placing vias in your design program, ensure the right drill size is used so the V-One leaves enough space when printing the ink.

### 2. The Head Diameter

The head diameter is the widest part of the rivet, this is the flange that will be in contact with your trace. This parameter determines how close the rivet can be to other parts or rivets.

In your design program, your via outer diameter should be equal or greater than the rivet head diameter. **0.9 mm for the small rivet, 2.2 mm for the large rivet**.

The large rivet has an inner diameter of 1.0 mm and is suited for standard 0.1" headers. However - the head diameter is quite large and traces cannot be routed in between the pins. Please adjust your layout accordingly - otherwise the rivet may end up shorting two traces!

<div class="media-wrapper">
<img src="/docs/guides/workingWithRivets/headers.jpg">
</div>

## Pressing Rivets

After drilling, rivets need to be inserted and pressed. Once you are familiar with the process it is straightforward, but for beginners we recommend practicing on a sample board first.

### 1. Insert the rivet

Using fine tweezers, carefully pinch the rivet and place it in the hole. Repeat this process for all the rivets.

<div class="media-wrapper">
<img src="/docs/guides/workingWithRivets/placingRivets.jpg">
</div>

The small (0.4 mm) rivets can be tricky to handle, we recommend placing the substrate flat on a table then pinching the rivets from their side. Pinching them from the head can send them shooting across the room.

<div class="media-wrapper">
<img src="/docs/guides/workingWithRivets/TweezerTip.png">
</div>

### 2. Flip the board.

Place a flat plate on top of your PCB and flip the board upside down so that all the rivets are facing up. Ensure you are working on a **hard surface/table** that will not deflect.

<div class="warning info">
<p><strong>Be careful</strong>: all your rivets may fall out if the boards are not pressed together!</p>
</div>

<div class="media-wrapper">
<img src="/docs/guides/workingWithRivets/Flipping.png">
</div>

### 3. Position the rivet tool

The V-One Drill ships with two rivet tools, one for each size. Position the rivet tool on top and ensure the tip of the tool is centered on the rivet. Ensure the tool is centered before pressing down. Otherwise the rivet may buckle inwards.

<div class="media-wrapper">
<img src="/docs/guides/workingWithRivets/centering.jpg">
</div>

### 4. Strike down.

Use a small mallet or similar tool to apply a download force on the rivet tool. You do not need to apply large amounts of force, just enough to deform the copper. The rivet should not be 'loose' after striking, if the rivet is loose try striking it again a bit harder.

<div class="important info">
<p><strong>Important</strong>: Applying too much force can damage the printed traces and the FR1 underneath.</p>
</div>

<div class="media-wrapper">
<img src="/docs/guides/workingWithRivets/hammerTime.jpg">
</div>

Repeat this steps for all rivets.

## Touch Up

After the rivets are pressed, we recommend taking a few minutes with the multimeter and ensuring all electrical connections between the top and bottom layer are conductive.

<div class="important info">
<p><strong>Tip</strong>: 2 or 3 minutes with the multimeter, can save 20-30 minutes of debugging.</p>
</div>

If you find a rivet has not made a secure electrical connection, then you can touch up the connection by adding a little bit of flux and solder wire.
