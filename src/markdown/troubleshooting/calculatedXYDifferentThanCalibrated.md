---
path: "/docs/calculated-xy-different/"
date: "2018-11-11"
category: "Troubleshooting"
section: ""
title: "XY center different than calibrated"
---

This error normally occurs the first time you use the V-One. It indicates the XY switches are not where the V-One is expecting them. There are two common causes:

- The probe or dispenser are not mounted properly **OR**
- The calibration has shifted slightly during shipping

To resolve this issue, follow the procedure below:

1. Remove, then re-mount the dispenser or probe. Inspect the magnets and ensure there is no metal debris stuck, and there is no air gap between the plastic and the chrome shafts.

<div class="media-wrapper">
<img src="/docs/troubleshooting/CalculatedXYDifferentThanCalibrated/probe-placement.gif">
</div>

Try performing an **Outline**, if the error persists:

1. Open the console with **Alt + C**. (The console allows to send commands directly to the printer.)
1. Home the machine (**Alt + H**) and ensure the probe is mounted.
1. Paste and enter the following command in the console: **I2 C2;**

<div class="media-wrapper">
<img src="/docs/troubleshooting/CalculatedXYDifferentThanCalibrated/Screenshot_2.png">
</div>

The V-One will perform a calibration procedure and make contact with the limit switches multiple times. When complete, the **LED lights will flash green** to indicate V-One's XY reference is now re-calibrated.

The **I2 C2** calibration resolves majority of cases, but if the error persists, email **support@voltera.io**, or message in the in-app chat.
