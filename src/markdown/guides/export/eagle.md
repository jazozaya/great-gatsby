---
path: "/docs/export/eagle/"
date: "2018-11-11"
category: "Guides"
section: "Exporting Gerbers"
title: "EAGLE"
---

## Gerber Export Guide

For **EAGLE v9.0.1+** users, we have a pre-configured CAM file for exporting your gerbers:

1. Download and extract the [Voltera CAM file](https://github.com/VolteraInc/circuit-design-resources/raw/master/EAGLE%20CAM/voltera-cam.zip)
1. Open your board in EAGLE.
1. Run the **CAM Processor** - Navigate to _File > CAM Processor._
1. Within the CAM Processor window, select _File > Open > Job_, and select the Voltera CAM file.
1. Click 'Process Job'. This will generate the gerbers and save them in a **outputs** folder in the same directory as your .brd file.

## Design Rule Check

To ensure your circuit can be printed by the V-One. We recommend downloading the Design Rule Check file as well. This will help catch design rule errors before printing your circuit.

To use the Voltera DRC, do the following:

1. Download and extract the [Voltera DRU file](https://github.com/VolteraInc/circuit-design-resources/raw/master/EAGLE%20DRC/voltera-dru.zip)
1. Open your design in EAGLE
1. From the menu bar, click _Tools > DRC_
1. Click _Load..._ and select the voltera.dru file
