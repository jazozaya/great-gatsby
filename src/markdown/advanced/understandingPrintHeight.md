---
path: "/docs/understanding-print-height/"
date: "2018-11-11"
category: "Advanced topics"
section: ""
title: "Understanding print height"
---

The **Print Height** is the distance between tip of the nozzle and the board during printing. This print setting is crucial for all aspects of print quality - trace resolution, consistency, minimum pad size, and especially for keeping the nozzle from crashing into the board.

Each material that the V-One prints has an optimal print height. For conductor, this print height is 80 micrometers (μm), and for solder paste it is 100 μm. To get an idea of how small this is, consider that 80 μm is:

- The diameter of a human hair
- The length of a dust particle

The height can be adjusted at any time during printing by accessing advanced controls, and using the ▲ and ▼ buttons with the desired step size. The Print Height is updated in real time in the Z axis.

<div class="media-wrapper">
<img src="/docs/advanced/understandingPrintHeight/calibrationSettings.png">
</div>

Each printing profile stores it's own print height. This means changing the height for one profile will not affect the height of another.

### Probing

The challenge with maintaining a consistent print height is that no board is perfectly flat. This is where **Probing** comes in. The Probe is a precision-calibrated sensor that touches the board to create a **Height Map** that will be used when printing the circuit.

## Height Control In Practice

To ensure that the probing measurement is applied correctly, both the dispenser and the probe need a consistent reference point in space. The reference point is the **Bottom Z Switch** - this is the metal switch located just below the nozzle in the home position. Before any action, the V-One will always lower the dispenser or probe to contact the Bottom Z Switch.

Now the printer has all the information it needs to bring the nozzle to the correct height:

- The Height Map
- The Reference point, and
- The Print Height

To calculate how to move the Z axis to obtain the desired print height, the V-One first references the dispensing tip against the Bottom Z Switch (**Z = 0**). The printer then loads the Height Map, and adds the Probe Z Offset and the Print Height:

<div class="warning info">
<p>Z axis Position = Height Map + Print Height</p>
</div>

The V-One uses this information to adjust its height dynamically as it prints, ensuring a consistent, high-resolution printed circuit!
