---
path: "/docs/broken-nozzles/"
date: "2018-11-11"
category: "Troubleshooting"
section: ""
title: "Broken nozzles"
---

We have added numerous checks to the software and firmware to prevent nozzles from breaking. However, every now and then certain conditions may result in a broken nozzle.

<div class="important info">
<p>The dispensing nozzles are very fragile! Always handle with care. </p>
</div>

A broken nozzle will cause all kinds of problems when printing, and should be avoided at all costs. Inspect the tip of the nozzle before each print to check if it has been damaged.

<div class="media-wrapper">
<img src="/docs/troubleshooting/brokenNozzles/broken_nozzle.jpg">
</div>

4 nozzles were included with your V-One - unscrew the broken nozzle and screw in a new one. This article explains the most common reasons for broken nozzles.

## Accidental Handling Mistakes.

Please pay attention to the following:

### When uncapping the dispenser...

Take care when removing the plastic cap to avoid breaking nozzles. Instead of pulling the plastic cap, it is better to **twist the cap and gently pull** it away from the dispenser as it comes off.

Inks should be stored inside a capped dispenser in the refrigerator.

### When priming the ink...

During priming, you are expected to wipe away excess ink flowing out of the nozzle with a tissue. **This is the only time that you must contact the nozzle tip**.

Do **not** wipe the dispenser on a tissue as if you were writing with a pen, it is easy to break the nozzle this way. **Instead hold the dispenser still** and bring the tissue in towards the nozzle.

<div class="warning info">
<p><strong>Tip</strong>: Use a lint free (Kimwipe) tissue if you can. If you don't have one, the burnishing pad also works well!</p>
</div>

### When mounting on the carriage...

Be careful when approaching the carriage, **the magnetic force may surprise you**. Hold the dispenser firmly in your hand with two fingers. As you approach the carriage, hold the dispenser at an angle so the top set of magnets makes contact first.

## The dispenser was remounted unexpectedly.

During printing, you might have to remove the dispenser unexpectedly from the carriage. A few reasons:

- The nozzle appears to be clogged or has debris and must be inspected.
- The calibration pattern wasn't wiped clean.
- The ink cartridge is empty.
- You forgot to hand prime the dispenser.

If this happens, it is crucial to home the system (by clicking the home icon) before starting another print.

<div class="warning info">
<p>If you remove the dispenser, click the Home icon when you remount it!</p>
</div>

**Why?**

After mounting a dispenser, the V-One will perform a height calibration sequence and contact the limit switches a few times. During this sequence the machine will record the height of the dispenser.

If you physically remove the dispenser and re-mount it, it is very unlikely you will mount it at the exact same height. It might be sitting 50 microns lower than before. Why is this a problem? **The V-One can detect when the probe is mounted, but it cannot detect if the dispenser is ON**, so it will not be aware of the height difference and you may break a nozzle.

Pressing the Home icon will force the software to re-calibrate the height.

## Substrate is not clamped correctly.

If the substrate is not clamped properly two things may happen:

- The substrate will deform during probing
- The substrate will move during wiping & cleaning.

In both scenarios, your height calibration will be incorrect you'll certainly break a nozzle. The clamps have two ledges, a baking ledge and a clamping ledge. When you clamp a substrate, ensure a portion of the substrate is underneath the clamp. Clamping the substrate only at its sides it not enough.

<div class="warning info">
<p><strong>Note</strong>: A properly clamped substrate cannot move in the horizontal or vertical direction!</p>
</div>

## Substrate is compressible or warped.

If your substrate is warped or deformed, **it may deflect downwards during probing. Even if it is properly clamped!** Don't worry, only very large (4" x 5") substrates tend to have this problem.

Observe your substrate during probing, can you see it moving as the probe descends and touches it? It likely deforms more in certain areas. If this happens, the probe will measure height incorrectly and the nozzles may break when it comes time to print.

If you notice this behaviour, try to clamp the board in a different orientation or use **double sided kapton tape** to secure the board.

**Note**: If you are intentionally printing on a compressible substrate - like a stretchable polymer, please contact **support@voltera.io** for some extra tips & tricks.

## Dirty limit switches or probe

From time to time, ink may leak from the nozzle and fall onto the limit switches. It is crucial that these limit switches are clean from any debris or ink before using the V-One. Otherwise your height will not be calibrated properly and you risk breaking nozzles.

If there is any ink on the XY positioning switches or the Z-Min switch, **use a Q-Tip and alcohol to wipe down the switches before printing.**

<div class="warning info">
<p><strong>Tip</strong>: It is easier to clean the ink when it still wet! Clean after each print!</p>
</div>

<div class="media-wrapper">
<img src="/docs/troubleshooting/brokenNozzles/Limit_Switches.png">
</div>

Like the limit switches, ensure you clean the probe tip if you notice any ink on it.

## Printing height is too low

If your printing height is too low, the nozzle can scrape the surface of the substrate as it moves. A broken nozzle is usually imminent if this happens.

By clicking the 'advanced' link during the calibrate or printing step you can adjust the printing height in real time. The default printing height is 0.08 mm (80 microns) and is suitable for vast majority of applications. If it has changed, use ▲ and ▼ to adjust it back.

<div class="media-wrapper">
<img src="/docs/troubleshooting/brokenNozzles/PrintHeight.png">
</div>

Advanced users can experiment printing at lower heights but we recommend never going lower than 40 microns.

## The probe fell in a hole or missed the edge of the board.

If the nozzle randomly breaks in the middle of a printing job, it is possible the probe fell in a hole during the probing step.

Watch the probing step closely to ensure the probe doesn't fall into a hole. Ensure the drill file is loaded along with your copper layer so the software is aware of the hole locations.

