---
path: "/docs/backlash-compensation/"
date: "2018-11-11"
category: "Troubleshooting"
section: ""
title: "Measuring X-Axis backlash"
---

## Backlash Symptoms

<div class="warning info">
<p>Units shipped after September 2016 have already been calibrated and will have no backlash.</p>
</div>

If you received your unit before September 2016, then your unit may experience X-Axis backlash. Common symptoms include:

- Diagonal traces specifically have poor in-fill
- Changing direction in X-Axis causes features to be misaligned
- Pad location will not align with pad centers after repeated attempts

To apply backlash compensation on your unit, you will have to perform a quick calibration procedure, and provide the V-One with the correct compensation constant - just follow the instructions below.

## Print the Backlash Calibration Pattern

The pattern we've supplied to diagnose backlash uses a Vernier scale to visually determine the amount of backlash in your unit.

<div class="media-wrapper">
<img src="/docs/troubleshooting/backlashCompensation/x-axis-backlash-calibration.jpg">
</div>

Download the pattern and print the .GTL file with your V-One.

- [VernierScale.GTL](/docs/troubleshooting/backlashCompensation/VernierScale.GTL)

<div class="warning info">
<p>Print the design without any modifications! It must be printed by the V-One exactly as intended.</p>
</div>

## Measuring Backlash

Before measuring the backlash, use the **M520** command, and record the value reported beside "Backlash Compensation". We will use this value later.

The Vernier scale has two rows of vertical lines. To diagnose the backlash, do the following:

- Starting from the right, find the first pair of lines (top and bottom row) which are perfectly vertically aligned. Use the pair on the far left side as a reference - these will always be aligned.
- Multiply the number that labels that pair by **0.025**. This is the amount of backlash present, in millimeters. For example, the pair labeled 4 would give **4 x 0.025 = 0.1 mm** of backlash.
- Add this value to the backlash compensation number you had recorded earlier. This is the total backlash compensation.
- Open the gcode console (**Alt+C**), and enter **M507 X###** where ### is the number you calculated in step 3, in mm. For example: **M507 X0.1**

You have now calibrated your V-One for backlash! We recommend taking a picture of the calibration pattern for reference, in case you need to check in future.
