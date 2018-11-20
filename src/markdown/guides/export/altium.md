---
path: "/docs/export/altium/"
date: "2018-11-11"
category: "Guides"
section: "Exporting Gerbers"
title: "Altium"
---

## Gerber Export Guide

This article describes the preferred method for generating Gerber and Drill files to print circuits on the Voltera V-One. Before proceeding, it is recommended to read the [Circuit Design Guidelines](/docs/advanced/circuit-design-guidelines/).

**Note**: Screenshots are of Altium Designer 13.2 running on Windows 8.1. The exact names of the settings presented may differ based on the Altium Designer version, operating system, and circuit design in question.

## Exporting Gerber Files

From the .PcbDoc file, navigate to _File > Fabrication Outputs > Gerber Files_.

### General Tab

Select either **Millimeters, 3:5 (preferred) OR Inches, 2:5**

<div class="media-wrapper">
<img src="/docs/guides/export/altium/mceclip0.png">
</div>

### Layers Tab

Under _Layers to Plot_ check **Plot the Top Layer, Top Paste, Bottom Layer and Bottom Paste**. This will generate GTL, GTP, GBL and GBP files. You will not need all of these files for every circuit, but exporting them all simplifies this process. Ensure that **Mirror is not checked** for any of the selected layers.

<div class="media-wrapper">
<img src="/docs/guides/export/altium/mceclip1.png">
</div>

### Drill Drawings Tab

**No options should be checked**. Drilling information will be exported later.

<div class="media-wrapper">
<img src="/docs/guides/export/altium/mceclip2.png">
</div>

### Apertures Tab

Check **Embedded apertures (RS274X)**

<div class="media-wrapper">
<img src="/docs/guides/export/altium/mceclip3.png">
</div>

### Advanced Tab

Use the **default values** for _Film Size_.

Under _Aperture Matching Tolerances_, set **Plus and Minus to 0.005mil**.

Under _Batch Mode_, select **Separate file per layer**.

Under _Leading/Trailing Zeroes_, select **Suppress leading zeros**.

Under _Position on Film_, select **Reference to relative origin**.

Under _Plotter Type_, select **Unsorted (raster)**.

Under _Other_:

- Uncheck _G54 on aperture change_
- Uncheck _Use software arcs_

- Check _Optimize change location commands_
- Check _Generate DRC Rules export file (.RUL)_

### Completing the Export

To export the Gerber files, **click OK**. The exported files can be found in the the same location as your .PcbDoc file under the **Project Outputs for <Your_Project_Name> folder.** _CAMtastic_ will also be launched and can be used to inspect the exported Gerbers, close it when you are ready to proceed. We do not recommend using CAMtastic to (re)export files.

## Exporting NC Drill Files

From the .PcbDoc file (not CAMtastic), navigate to _File > Fabrication Outputs > NC Drill Files_.

Use the same settings as Gerber Export for:

- Units
- Format
- Leading/Trailing Zeros
- Coordinate Positions

Under *Other*:

- Uncheck _Use drilled slot command (G85)_
- Uncheck _Generate Board Edge Rout Paths_
- Check _Optimize change location commands_
- Check _Generate separate NC Drill files for plated & non-plated holes_
- Check _Generate EIA Binary Drill File (.DRL)_

When ready, click OK to export the drill files. As before, CAMtastic may be launched and can be used to inspect the exported Gerbers, close it when you are ready to proceed. We do not recommend using CAMtastic to (re)export files.

<div class="media-wrapper">
<img src="/docs/guides/export/altium/mceclip5.png">
</div>
