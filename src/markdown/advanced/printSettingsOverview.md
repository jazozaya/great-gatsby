---
path: "/docs/print-settings-overview/"
date: "2018-11-11"
category: "Advanced topics"
section: ""
title: "Print settings overview"
---

The V-One is an excellent tool for dispensing high viscosity fluids. You can expect to get high quality printing out of the box or by making some small adjustments to the printing settings.

Below is a brief explanation of the different settings found on the V-One software. Contact **support@voltera.io** for some extra tips and tricks.

<div class="media-wrapper">
<img src="/docs/advanced/printSettingsOverview/Settings-Overview.png">
</div>

## Pass spacing

Controls minimum center-to-center distance between two adjacent lines printed with the V-One.

## Dispense height

Distance between the top of the nozzle and the substrate surface during printing. The V-One dynamically corrects the height to maintain this value as constant (+/- about 20um)

## Feedrate

XY-axis travel speed during dispensing. Does not affect travel speed when moving between features.

## Trim length

Maximum distance the printer will dispense for before it stops and re-pressurizes the cartridge (by applying another 'Kick'). The reason is that pressure within the cartridge decreases slowly while dispensing, so the V-One needs to compensate for the flow rate and re-pressurize between traces.

## Trace penetration

To make sure traces and pads connect properly, the V-One plans ahead so that traces will travel a small distance into a pad. This determines how far in the trace goes.

## Anti-stringing distance

Depending on the surface energy of a fluid, it might prefer to stick to the nozzle than the board, which produces 'stringing' when the nozzle raises. The V-One adjusts for this by travelling back over the feature to safely break the string, rather than allowing the string to break during raise/travel.

## Soft start / stop ratio

Due to compressibility of the fluid and mechanical factors (like speed of the motors) there is a delay between when the Kick is initiated (pressurization starts) and when the flow rate reaches the correct level to start a line or other feature this is similarly true for terminating the flow rate/releasing pressure. These parameters are used to appropriately compensate for this. These don't typically need to be adjusted except for particularly compressible or viscous materials.

## Kick

This parameter controls the Stroke Length of the piston within the dispenser, hence how much pressure is applied. This parameter, along with the rheological setpoint, are the most important for printing different fluids. Fluids that are highly compressible and viscous will need a large kick to initiate flow and force the fluid through the nozzle, while lower viscosity fluids need a smaller Kick. Incompressible and low-viscosity fluids will only need a very small Kick to initiate flow.

There is often confusion regarding Kick and the +/- settings - while both control the piston, they do different things. The Kick is the MAXIMUM displacement of the piston, while +/- adjust the relative starting position of the piston.

## Rheological setpoint

As mentioned above, this parameter and the Kick are the two most important parameters for printing consistency and quality. While Kick controls the amount of pressure applied to the fluid, Rheological Setpoint controls how the V-One compensates for the flow rate over time. For high-viscosity compressible fluids (like the conductive ink or solder paste), this parameter is increased if the flow rate is decreasing over time.

### Incompressible / low-viscosity fluids:

For incompressible fluids, this parameter is used in a slightly different way - you want to adjust it to account for total fluid volume you want dispensed each stroke. However, for reasons to do with the typical use-case and the algorithm, this approach will only work for printing many identical features - meaning if you're printing a circle that is 0.5mm in diameter, vs. one that is 0.3mm in diameter, you'd need to change the rheological setpoint to get the same fluid volume dispensed.
