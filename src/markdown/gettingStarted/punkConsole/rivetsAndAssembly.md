---
path: "/docs/punk-console/rivets-and-assembly/"
date: "2018-11-11"
category: "Getting started"
section: "Punk Console"
title: "5. Rivets and assembly"
---

## Punk Console: Assembly

Now that both layers are printed, it's time to assemble the circuit!

## Burnishing

With the white burnishing pads give both sides of the circuit a gentle scrub. You should see the traces and pads turn a faint silver as you burnish.

Burnishing the surface removes organic elements left on the surface and prepares the pads for soldering.

## Inserting the rivets

The V-One Drill shipped with two rivet sizes, the smaller rivets are better suited for vias, while the larger rivets are suited for plated through holes.

To insert rivets, you will need:

- A set of tweezers
- A hammer or mallet

To secure the rivets you need to use the specialized rivet tools. Two were included with your drill bundle, one for each rivet size. Take a moment now to familiarize yourself with them.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/RivetCloseUp.png">
</div>

There are of **six 0.7 mm holes** that need small rivets and **ten 1.6 mm** holes for the larger rivet. The larger rivets allow us to have a secure mechanical connection.

### 1. Insert the rivet

Using fine tweezers, carefully pinch the rivet and place it in the hole. Repeat this process for all the rivets.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/placingRivets.jpg">
</div>

The small (0.4mm) rivets can be tricky to handle, we recommend placing the substrate flat on a table then pinching the rivets from their side. Pinching them from the head can send them shooting across the room.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/TweezerTip.png">
</div>

### 2. Flip the board.

Place a flat plate on top of your PCB and flip the board upside down so that all the rivets are facing up. Ensure you are working on a **hard surface/table** that will not deflect.

<div class="warning info">
    <p><strong>Be careful</strong>: all your rivets may fall out if the boards are not pressed together!</p>
</div>

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/Flipping.png">
</div>

### 3. Position the rivet tool

The V-One Drill ships with two rivet tools, one for each size. Position the rivet tool on top and ensure the tip of the tool is centered on the rivet. **Ensure the tool is centered** before pressing down. Otherwise the rivet may buckle inwards.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/centering.jpg">
</div>

### 4. Strike down.

Use a small mallet or similar tool to apply a download force on the rivet tool. You do not need to apply large amounts of force, just enough to deform the copper. The rivet should not be 'loose' after stiking, if the rivet is loose try striking it again a bit harder.

<div class="important info">
    <p><strong>Important</strong>: Applying too much force can damage the printed traces and the FR1 underneath.</p>
</div>

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/hammerTime.jpg">
</div>

Repeat this steps for all rivets.

## Double check connections

The rivet tools have been designed to flatten the rivets and prevent damage to the traces. If the rivets did not connect the top and bottom layer, then too little or too much force was used to deform them.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/RivetsInSideBySide.jpg">
</div>

Spend a few minutes with a multimeter to ensure the connection has been made. If they haven't you can always touch them up with a bit of solder.

## Soldering Time!

After rivets have been installed, the next step is to solder the parts. The circuit requires the following components:

- 2 - 0.01uF Capacitor
- 5 - 1K Resistors
- 1 - Green LED
- 2 - 500K Trimpots
- 1 - 556 Timer
- 1 - Piezo Speaker.
- 1 - 9V Battery
- 1 - 9V Battery Connector

### Surface Mount Components

To solder the surface mount components, you can dispense solder paste with the V-One and reflow. Just clamp the board on the platform and load the following paste files:

- [Punk_Console.GTP](/docs/gettingStarted/punkConsole/rivetsAndAssembly/Punk_Console.GTP)
- [Punk_Console.TXT](/docs/gettingStarted/punkConsole/rivetsAndAssembly/Punk_Console.TXT)

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/SolderPaste.png">
</div>

Alternatively, you can also hand solder the components. The choice is yours! Just be sure to use lots of flux, keep the temperature low, and use the provided solder wire.

Use the following image as a reference:

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/Layout.JPG">
</div>

During assembly, remember **the LED has a polarity**, the little green strip indicates the cathode side (GND) and should be **facing the left side of the PCB**.

The 556 Timer also has a polarity, it should be installed with the **white band facing the upper side of the PCB**. Once all the components are placed the board should look like this:

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/PartiallyAssembled.jpg">
</div>

### Thruhole Components

Next up are the thruhole components:

- The 2 trimpots
- The piezo buzzer
- The 9V connector.

Feed the component leads through the larger rivets. Soldering to the large rivets ensures a very strong mechanical connection.

When you are soldering the battery connector, the red lead must be connected positive (+) pad as shown below.

<div class="media-wrapper">
<img alt="In The Box" src="/docs/gettingStarted/punkConsole/rivetsAndAssembly/FullyAssembled.jpg">
</div>

## The Result

Plug in the 9V battery and watch your circuit come alive. If everything is working the LED will be lit and the buzzer will be producing a high pitched tone.

Feel free to play with the trimpots, as you twist them the buzzer will produce different sounds. Can you play a song with them?

<div class="media-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8C-z9LmUGmc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div

That concludes the tutorial - if you ran into any hiccups along the way, let us know at **support@voltera.io**. When you are ready, learn how to design with rivets [here](/docs/working-with-rivets/)!

<div class="navigation">
    <a href="/docs/punk-console/printing-the-circuit/" class="left">< Back</a>
    <a href="#" class="right disabled">Next ></a>
</div>