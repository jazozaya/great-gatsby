---
path: "/docs/hello-world/printing-the-circuit/"
date: "2018-11-11"
category: "Getting started"
section: "Hello World"
title: "3. Printing the circuit"
---

## Hello World: Print

The Hello World circuit is a basic LED circuit. Holding a 9-Volt battery to the **+** and **-** terminals on the circuit provides power, and a 555 timer integrated circuit (IC) controls the signal that flash the LEDs at a frequency determined by the resistors and capacitor. We have included all the materials and components you need to print your first circuit in the Hello World kit.

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/hello-world-demo-shop.jpg">
</div>

## Software

### 1. Open the software

When you open the Voltera V-One software you will be welcomed by the start screen and it will automatically connect to the printer if it is plugged in.

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/Software-Dashboard.png">
</div>

Our software will guide you through the steps of each feature as you go. Let’s review them quickly:

- **PRINT**: Print your designed circuit pattern onto a blank FR4 board.
- **SOLDER PASTE**: Dispense solder paste onto fabricated or V-One printed boards.
- **HEAT**: Bake wet ink, and reflow components onto fabricated or V-One printed boards.
- **DRILL**: Drill holes of various sizes onto your blank FR1 board with the V-One Drill.

### 2. Selecting the Workflow

To begin printing your first circuit, select **PRINT**.

The software will then prompt you to choose whether you are doing a **SIMPLE** or **ALIGNED** print. Since we're starting with a bare board, select **SIMPLE**.

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/Simple-vs-Aligned.png">
</div>

Finally, the software will ask you to select which ink you are using. Have a look at your ink cartridge, and select the matching ink name on the screen. This will ensure your software is using the right print settings!

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/mceclip1.png">
</div>

### 3. Loading a Circuit

Take a moment to familiarize yourself with the software interface. Instructions will be presented on the left, and videos are displayed on the right.

1. Click the Hello World hyperlink in the instruction panel.
1. Wait for circuit to load.
1. Click **Next**.

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/sw_print_preview.png">
</div>

### 4. Sidebar - Tour of the UI!

Before we move further, let's look at some useful elements in the user interface. In the top right corner of the app, you have the following:

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/mceclip4.png">
</div>

1. **Status Info**: Connection status, temperature, and position of the print head.
1. **E-Stop**: Immediately stops the V-One. Alternatively, you can press the Esc key 2 times.
1. **Home**: Moves the printer to the home position.
1. **Settings**: Adjust your print settings if required.
1. **Support**: Have a problem? Let us know. For tech support, please include your gerber files!
1. **Community Forums**: Feed of the latest posts. Click any of the titles to go right to the topic.

The **Legend** can be found in the bottom-right corner. This tells you how to interpret the Print Preview. You'll see later how this is helpful, when using the Selective Print feature.

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/mceclip5.png">
</div>

## Positioning

### 1. Clamp the Board

The clamps have 2 ledges, a CLAMP ledge and a BAKE ledge. Take a moment now to get familiar with the clamps.

**Clamps - Top Side**

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/Clamp-Top-Darker.png">
</div>

**Clamps - Bottom Side**

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/Clamp-Bottom-Darker.png">
</div>

The **Clamp** ledge is what you will use now to secure the board during printing and later during solder paste dispensing, while the **Bake** side will be used when baking the board after a successful print.

1. Secure the board underneath the **Clamp** ledges, and push the clamps inward against the board. The notches should be facing the board.
1. Screw down the clamps so that the provided thumb screws are finger-tight.
1. Make sure the board is fully secured.

### 2. Mount the Probe

The contact pads at the back of the probe should be aligned with the probe contact pins on the carriage.

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/carriage.png">
</div>
 
<div class="important info">
<p>Don't remove the Probe or Dispensers unless prompted by the Software! If you need to do so for any reason, click the HOME button to re-calibrate before proceeding.</p>
</div>

<div id="outline">
<h3>3. Position the Circuit</h3>
</div>

In this step the V-One will ensure that there is a clear print path on the clamped board. The probe tip will outline the boundary of the area to be printed. If you see the probe tip passes outside of the board while outlining, click and drag the circuit to adjust the position and outline again.

### 4. Probe the Board

Outline look good? Go to the next step and click PROBE. The V-One will now automatically generate a height map of the board’s surface. This height map is critical for good quality printing.

<div class="warning info">
<p>If you need to move the board for any reason after this step, you must return and RE-PROBE!</p>
</div>

<div id="priming">
<h2>Priming</h2>
</div>

### 1. Prime conductor

Priming the conductor is important to confirm good ink flow before dispensing.

1. Slowly turn the gear **counter-clockwise** until you feel resistance (this is the dispensing plunger hitting the ink).
1. Keep turning until you push a tiny amount of ink out of the nozzle.
1. **Rotate the gear ¼ turn clockwise to stop the flow of ink.**
1. Wait until the ink stops leaking from the nozzle and gently wipe the nozzle clean.
1. Mount the dispenser on the carriage.

<div class="media-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/zl4z162jn3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div id="calibration">
<h2>Calibration</h2>
</div>

Calibrating the conductor will determine the resolution of your print, so pay close attention to this step and take your time! Clicking **START** will print the calibration pattern.

Use the curved lines to make sure enough ink is coming out. Then, adjust the horizontal lines so they are not touching – **even a small gap is enough!**

You can adjust the width of the printed lines while printing by controlling the amount of ink dispensed with the **+** and **-** buttons:

- The **+** button dispenses more ink by a tiny amount. Makes lines thicker.
- The **-** button dispenses less ink by a tiny amount. Makes lines thinner.

<div id="print">
<h2>Printing</h2>
</div>

You are now ready to print your first circuit! So go for it, press **START**! Once the print is complete your circuit should look something like the image below:

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/hello-world-printed.jpg">
</div>

**Does your circuit look different?**

If the pads are **touching each other** (shorted) that means there is too much ink. Wipe the ink and repeat the calibration step.

If there are **gaps** in the circuit, try our selective printing feature! Select the broken area in the print preview, and click **START**.

**Want more control?**

- Click and drag to select multiple features at once.
- Holding the **Shift** key while selecting features will add them to the current selection.
- Holding the **Ctrl** key when selecting features will remove them from the current selection.

<div class="media-wrapper">
<img src="/docs/gettingStarted/helloWorld/printingTheCircuit/selective-print-scaled.jpg">
</div>

## Baking

Your circuit is printed, but we can’t do much with wet ink… that’s what baking is for! We are about to dry the conductive ink. Remove the conductive ink dispenser from the carriage. Cap the dispenser, and **store it in the refrigerator**.

When flipping the board, keep the following in mind:

- Push the clamps in so they are flush with the board.
- Make sure that the board rests on top of the baking ledges.
- When flipping the board be careful not to smear the wet ink!

<div class="important info">
<p>The V-One gets hot! Do not touch the printer while glowing red.</p>
</div>

## Congratulations!

You have printed your first V-One PCB! This completes the first print guide.

When you are ready to assemble your circuit, continue to the next articles where we lead you through the V-One solder paste and reflow features.

<div class="navigation">
    <a href="/docs/hello-world/printer-setup/" class="left">< Back</a>
    <a href="/docs/hello-world/dispensing-solder-paste/" class="right">Next ></a>
</div>
