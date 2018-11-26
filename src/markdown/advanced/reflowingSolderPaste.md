---
path: "/docs/reflowing-solder-paste/"
date: "2018-11-23"
category: "Advanced topics"
section: ""
title: "Reflowing solder paste"
---

We offer two types of solder paste:

- Tin Bismuth Silver (RoHS, compatible with our conductive inks)
- Tin Lead (meant for traditionally fabricated boards)

The V-One heating platform is capable of following a basic reflow profile for both solder alloys, but before reflowing **_check the following_**:

- Is your board very large? Larger than 3" x 4" ?
- Are you reflowing large components like capacitors and connectors?
- Does your board have several solid copper planes?

If you said YES to any of the above, then the automatic **REFLOW** mode may not work correctly. The board will act like a large heat sink and will not reach the peak reflow temperatures. Instead, you should do use the **MANUAL** mode.

<div class="warning info">
<p><strong>Tip</strong>: If your board will act like a large heat sink, do a <strong>MANUAL</strong> reflow instead (See below)</p>
</div>

<div class="media-wrapper">
<img src="/docs/advanced/curingAndReflowing/reflow-mode.png" />
</div>

### Tin Lead Bismuth Profile

Automatic reflow profile for Tin Lead Bismuth (Sn42Bi57.6Ag0.4)

<table>
  <tbody>
    <tr>
      <td style="width: 200px;"><strong>Soak Temperature</strong></td>
      <td style="width: 200px;"><strong>Soak Time</strong></td>
      <td style="width: 200px;"><strong>Peak Temperature</strong></td>
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

### Tin Lead Profile

Automatic reflow profile for Tin Lead Bismuth (Sn63Pb37)

<table>
  <tbody>
    <tr>
      <td style="width: 200px;"><strong>Soak Temperature</strong></td>
      <td style="width: 200px;"><strong>Soak Time</strong></td>
      <td style="width: 200px;"><strong>Peak Temperature</strong></td>
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
1. Set the temperature to the *soak temperature*. Hold for 1-2 minutes to allow heat distribution
1. Set the temperature to the *peak temperature*.
1. Observe the solder paste closely. 
1. As soon as the last pad finishes reflowing, hit **STOP** to start cooling the board.

<table>
  <tbody>
    <tr>
      <td style="width: 250px;"><strong>Solder Alloy</strong></td>
      <td style="width: 250px;"><strong>Soak Temperature</strong></td>
      <td style="width: 250px;"><strong>Peak Temperature</strong></td>
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
