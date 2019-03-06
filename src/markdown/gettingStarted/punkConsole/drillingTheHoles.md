---
path: "/docs/punk-console/drill-the-holes/"
date: "2018-11-11"
category: "Getting started"
section: "Punk Console"
title: "3. Drilling the holes"
---

## Punk Console: Drilling

<div class="important info">
<p><strong>Note</strong>: This tutorial is for <strong>advanced users</strong>, complete the Hello World tutorial first!</p>
</div>

For this tutorial, we are going to be building a Voltera flavored [Atari Punk Console](https://en.wikipedia.org/wiki/Atari_Punk_Console). It is a simple circuit that creates old school synth sounds using a piezo as a speaker. The circuit consists of a 556 IC (two 555 timers), a few capacitors, resistors, two trimpots and the piezo buzzer.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/drillingTheHoles/FullyAssembled.jpg">
</div>

Adjusting the trimpots will produce different sounds. Check out the end of [this video](https://youtu.be/Oi3dmSMpjsU?t=3m51s) to see it in action!

## Double Sided Workflow

We will be creating a double sided PCB using the V-One Drill attachment. There are a couple of ways of creating a double sided board, today we'll follow this sequence:

### 1. Drill the holes.

To start, a blank board will be mounted on the heated bed. Then we will drill two types of holes: small holes for vias, and large ones for through hole components.

### 2. Print the top layer

After drilling, the top layer will be printed. The procedure is the same as creating a single layer board, however the board will contain drill holes.

<div class="warning info">
<p>In this step, it is important to carefully clean the board of drilling debris and avoid moving the board..</p>
</div>

### 3. Print the bottom layer.

Once the top side finishes baking, it is time to print the bottom side by doing an aligned print. Here, we'll teach the software the location of 2 holes to get the layers to line up.

### 4. Assemble the circuit.

Now that both layers are printed, it is necessary to connect the top and bottom layer using rivets and to populate the board.

## Software

### 1. The drill workflow

Open up the software and jump into the Drill workflow. Since we are not going to be aligning to any existing features, choose SIMPLE alignment.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/drillingTheHoles/DrillWorkflow.png">
</div>

### 2. Load your file.

Download the Punk Console Gerbers [here](https://github.com/VolteraInc/circuit-design-resources/raw/master/Voltera%20Project%20Gerbers/Drill%20Tutorial%20Circuit/Punk_Console.zip) and load the following files:

- [Punk_Console.GTL](/docs/gettingStarted/punkConsole/drillingTheHoles/Punk_Console.GTL)
- [Punk_Console.TXT](/docs/gettingStarted/punkConsole/drillingTheHoles/Punk_Console.TXT)

Following along with the software as we complete the workflow.

## Drilling

### 1. Clamp your board.

When drilling boards on the V-One, it is important to protect the heated bed and the drill bits from any damage. The drill bits must travel deep into the substrate to create a clean hole.

The sacrificial layer offers this protection and needs to be mounted directly on top of the heated bed. Use the long thumbscrews provided to secure your clamps and hold the **2x3 FR1 substrate** in place.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/drillingTheHoles/sacrificialLayer.jpg">
</div>

### 2. Select your hole size

Proceed to position and probe your board as you advance with the software.

When selecting holes, you must indicate what drill bit size you want to start with. The software will highlight all of the holes that match the requested size. To start, let's drill the 0.70 mm holes.

Of course - advanced users can always manually select holes they wish to drill. Once you are good to go, **put on your safety glasses** and hit next.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/drillingTheHoles/drillSelection.jpg">
</div>

### 3. Installing the drill bits

Now we must install the 0.7 mm drill bit. The drill bit container has 10 drill bits with the following sizes (2 of each): 0.70 mm, 0.80 mm, 0.90 mm, 1.00 mm and 1.6 mm. Left to right, they increase in size.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/drillingTheHoles/DrillBits.png">
</div>

The bits are also engraved with their size in millimeters. The one shown below is 0.7 mm.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/drillingTheHoles/Markings.jpg">
</div>

Use the provided 1.5 mm hex key to install the drill bit. Make sure the bit is deep enough in the coupler so the shaft is not visible.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/drillingTheHoles/goldilocks.jpg">
</div>

### 4. Start drilling!

Mount the drill and plug in the power adapter. The LED indicators will light up and the drill will beep a few times to indicate it is ready to go! Click **START** to start drilling!

<div class="warning info">
<p><strong>Important</strong>: As a safety precaution, the drill will immediately stop spinning when removed from the V-One.</p>
</div>

### 5. Keep drilling!

Once all the 0.7 mm holes are drilled, click the 'Drill More Holes' button to start drilling the 1.6 mm holes. The software will indicate which holes are left.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/drillingTheHoles/Drill-more-holes.png">
</div>

When changing drill bits make sure to unplug the power cable before removing it from the V-One carriage.

### 6. Cleanup the workspace

After all the drilling is completed. Be sure to clean up the debris with a vacuum or damp cloth. We are going to print on top of the holes now, so it is very important to **leave the substrate clamped down and do not move it**!

<div class="important info">
<p><strong>Important</strong>: Do not move the substrate! We are going to print next!</p>
</div>

Let's start printing the top layer of this circuit! Follow along in the [next section](/docs/punk-console/printing-the-circuit/)

<div class="navigation">
    <a href="/docs/punk-console/drill-setup/" class="left">< Back</a>
    <a href="/docs/punk-console/printing-the-circuit/" class="right">Next ></a>
</div>