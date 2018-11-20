---
path: "/docs/export/kicad/"
date: "2018-11-11"
category: "Guides"
section: "Exporting Gerbers"
title: "KiCad"
---

## Gerber Export Guide

This article describes the preferred method for generating Gerber and Drill files to print circuits on the Voltera V-One. Before proceeding, it is recommended to read the [Circuit Design Guidelines](/docs/circuit-design-guidelines/).

**Note**: Screenshots are of KiCad 4.0.7 running on Mac OS X 10.12.6 Sierra. The exact names of the settings presented may differ based on the KiCad version, operating system, and circuit design in question.

## Exporting Gerber Files

From the Pcbnew, navigate to _File > Plot_.

Under _Plot format_, select **Gerber**.

Optionally, create a subfolder to hold the generated files. By default they will be written to your project directory.

Under _Layers_, select **F.Cu, B.Cu, F.Paste and B.Paste**. You will not need all of these files for every circuit, but exporting them all simplifies this process.

Under _Options_:

- Check _Plot footprint values_
- Check _Plot footprint references_
- Check _Exclude PCB edge layer from other layers_
- Set _Default line width (mm): 0.1_

Under _Gerber Options_:

- Check _Use Protel filename extensions_
- Set _Format: 4.6mm_

When ready, **Click Plot** to export the Gerbers files.

<div class="media-wrapper">
<img src="/docs/guides/export/kicad/1.png">
</div>

## Exporting Drill Files

Continuing from the _Plot_ window, click **Generate Drill File**, next to the _Plot_ button.

If you created a subfolder for your Gerber files, select it as your Output directory

Under _Drill Units_, select **Millimeters**

Under _Zeros Format_, select **Decimal format**

Under _Drill Map File Format_, select **Gerber**

Under _Drill File Options_, uncheck all options

Under _Drill Origin_, select **Absolute**

When ready, Click **Drill File** to export the drill file.

<div class="media-wrapper">
<img src="/docs/guides/export/kicad/2.png">
</div>
