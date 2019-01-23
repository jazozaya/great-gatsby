---
path: '/docs/difficulty-soldering/'
date: '2018-11-11'
category: 'Troubleshooting'
section: ''
title: 'Difficulty soldering'
---

Soldering to conductive ink is not the same as soldering to copper traces.

<div class="warning info">
<p>Please review our <a href="/docs/hand-soldering/">hand soldering guide</a> to learn our best practices.</p>
</div>

## Quick Checklist

**What is your iron temperature?**

The temperature of your soldering iron must be low. Ideal temperature is between **180C (356F) and 205C (400F)**

**Are you using flux?**

Our provided solder wire does not have a flux core. Flux has to be applied separately. If you don't have flux, you can always pick some up on our [store](/store/).

**Are you using the right solder alloy?**

Most solder alloys will damage Voltera PCBs. Use the supplied solder alloy, it is a Tin Bismuth Silver, a special low temperature alloy that works great with our conductive inks.

**Was the circuit flipped during the bake process?**

The circuit must have been flipped after printing and placed on the clamp ledges, ink facing towards the print platform, for the conductive ink to bake properly

**Was the circuit burnished?**

Burnished pads should appear faintly silver, not white. If the pads still appear white it may be possible to salvage the pad by burnishing until it appears silver. This does not usually work after soldering has been attempted.

**Was the circuit baked long enough?**

Symptoms of poor baking include browning of the pads. Make sure you allowed enough time for the bake to finish and cool down. If not, you need to restart your circuit.

**Is the ink expired?**

With proper storage, the ink has an expected shelf life of 6 months. Inspect the label on your ink cartridge and check when it was packaged. Expired ink may present difficulties when soldering.

## Solder does not wet the pad

<div class="important info">
<p>The provided solder wire <strong>does not have flux</strong>. Always apply generous amounts of flux separately.</p>
</div>

The pad can damaged by excessive heat or soldering time. In these cases, the ink will appear dark brown or black, and solder will ‘ball up’ on the ink. Circuit damage is irreversible, so if this happens you must re-print the circuit. Temperature control is critical to good soldering!

<div class="media-wrapper">
<img src="/docs/troubleshooting/difficultySoldering/high-heat-soldering.jpg">
</div>

## Components break off

While the Voltera ink is quite hard after baking, it is also brittle. Applying too much shear stress or torsion will break the ink. Take care when handling soldered components.

For components that will be put under stress, choose through-hole components. This includes connectors, headers, and components such as trimpots or variable resistors that will be adjusted manually.

## Reflow does not melt solder paste

The built-in Voltera reflow profile should be sufficient for the majority of cases.

<div class="important info">
<p>If you are reflowing boards thicker than 1.6 mm or if you have very large components, use the Manual Reflow feature to ensure the board reaches the required temperature.</p>
</div>

Do not leave solder paste on the board for extended periods. Reflow the board immediately after dispensing or applying solder paste for best results.

## Solder Paste is Balling Up

If you are trying to reflow solder paste on a bare pad with no component, solder paste will ball up. However, balling up on a bare pad is not an indication of poor soldering quality!

Unlike copper, the conductive ink surface is not completely metal, which means that solder needs some encouragement to form a cohesive layer - this is accomplished by placing a component on the paste.

To get a good solder joint and good wetting, you need to have a component on the pad for the paste to 'anchor' to. Because the melted paste is distributed evenly both over the component lead and the conductive ink surface, it will form good quality solder joints with the silver in the ink.
