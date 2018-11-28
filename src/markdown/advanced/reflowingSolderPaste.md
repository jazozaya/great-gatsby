---
path: "/docs/reflowing-solder-paste/"
date: "2018-11-23"
category: "Advanced topics"
section: ""
title: "Reflowing solder paste"
---

We currently offer two types of solder paste alloys in T4 and T5 particle sizes:

- [T4 - Sn42 Bi57.6 Ag0.4](/store/collection/solder/)
- [T4 - Sn63 Pb37](/store/collection/solder/)
- [T5 - Sn42 Bi57.6 Ag0.4](/store/collection/solder/)
- [T5 - Sn63 Pb37](/store/collection/solder/)

Tin Bismuth Silver (Sn42 Bi57.6 Ag0.4) is RoHS compliant and is meant for our conductive inks. Tin Lead (Sn63 Pb37) is meant for factory fabricated boards with a HASL finish.


Before reflow soldering on the V-One, **check the following**:

- Is your board larger than 3" x 4" ( 76.2 mm x 101.6 mm) ?
- Are you reflowing large components like connectors?
- Does your board have multiple ground planes?

If you said YES to any of the above, then the automatic **REFLOW** mode may not work correctly. The board will act like a large heat sink and will not reach the peak reflow temperatures. Instead, you should use the **MANUAL** mode.

<div class="warning info">
<p><strong>Tip</strong>: If your board will act like a large heat sink, do a <strong>MANUAL</strong> reflow instead (See below)</p>
</div>

<div class="media-wrapper">
<img src="/docs/advanced/curingAndReflowing/reflow-mode.png" />
</div>

### Tin Lead Bismuth (Sn42 Bi57.6 Ag0.4) Profile

Automatic reflow profile for Tin Lead Bismuth (Sn42 Bi57.6 Ag0.4)

<table>
  <tbody>
    <tr>
      <td style="width: 200px;"><strong>Soak Temp.</strong></td>
      <td style="width: 200px;"><strong>Soak Time</strong></td>
      <td style="width: 200px;"><strong>Peak Temp.</strong></td>
      <td style="width: 200px;"><strong>Peak Time</strong></td>
    </tr>
    <tr>
      <td>140°C (284°F) </td>
      <td>45 seconds</td>
      <td>190°C (365°F)</td>
      <td>30 seconds</td>
    </tr>
  </tbody>
</table>

<div class="media-wrapper">
<img src="/docs/advanced/curingAndReflowing/tinLeadBismuth.png" />
</div>

### Tin Lead (Sn63 Pb37) Profile

Automatic reflow profile for Tin Lead Bismuth (Sn63 Pb37)

<table>
  <tbody>
    <tr>
      <td style="width: 200px;"><strong>Soak Temp.</strong></td>
      <td style="width: 200px;"><strong>Soak Time</strong></td>
      <td style="width: 200px;"><strong>Peak Temp.</strong></td>
      <td style="width: 200px;"><strong>Peak Time</strong></td>
    </tr>
    <tr>
      <td>180°C (356°F) </td>
      <td>45 seconds</td>
      <td>220°C (428°F)</td>
      <td>30 seconds</td>
    </tr>
  </tbody>
</table>

<div class="media-wrapper">
<img src="/docs/advanced/curingAndReflowing/tinLead.png" />
</div>

## Manual Reflow

A manual reflow requires the user to place close attention to the board as it is reflowing. To perform a manual reflow:

1. Clamp your board on the heated bed.
1. Enter **Heat** > **Manual** mode.
1. Set the temperature to the *soak temperature*. 
1. Hold for 1-2 minutes to let the whole board reach the temperature.
1. Set the temperature to the *peak temperature*.
1. Observe the solder paste closely. 
1. As soon as the last pad finishes reflowing, hit **STOP** to start cooling the board.

<table>
  <tbody>
    <tr>
      <td style="width: 250px;"><strong>Solder Alloy</strong></td>
      <td style="width: 250px;"><strong>Soak Temp.</strong></td>
      <td style="width: 250px;"><strong>Peak Temp.</strong></td>
    </tr>
    <tr>
      <td>Tin Bismuth Silver</td>
      <td>140°C (284°F)</td>
      <td>190°C (365°F)</td>
    </tr>
    <tr>
      <td>Tin Lead</td>
      <td>180°C (356°F)</td>
      <td>220°C (428°F)</td>
    </tr>

  </tbody>
</table>
