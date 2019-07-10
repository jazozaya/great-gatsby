---
path: '/docs/understanding-probe-issues/'
date: '2019-07-10'
category: 'Advanced topics'
section: ''
title: 'Understanding probe issues'
---

The V-One software now has a new feature to help users better diagnose issues they might face. One of the most important errors to catch are height related errors. The software will now compare probed points against each other to try and catch these problems.

<div class="media-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JWYXRz-b2Yo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## The probing process

Before printing, we use the probe to generate a heightmap of the board surface. This is important in making sure the tips of your tools remain safely above the board. To do this we touch the board with the probe and measure it’s height then compare those values against each other.

You can see in the image below all of the expected probe points for the Hello World board when using default settings.

<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/default.png">
</div>

During probing you’ll notice that each point becomes filled in as it’s being measured.

<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/probing.png">
</div>

You can change the resolution of your height map by adjusting your _Probe Pitch_ in the settings menu. Here’s an example of the same board with a _Probe Pitch_ of 2.5mm. The value is the maximum distance between two adjacent probe points, there isn’t a minimum value.

<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/smallPitch.png">
</div>

This will take longer and in most cases won’t make any improvement to your print but it’s a useful feature to be aware of.

## Getting an error

Part of this process is to help prevent problems before they happen. In the example below the board was intentionally placed too far to the left so that the probe would fall off on the right side. You can see from the example that there was a problem detected with the height. 

<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/probeFall.png">
</div>

The software compares probe points that are near each other. In this case, the point to the far right of the board has a height conflict with its neighbours. Zooming in close we can see the actual values of the probe points. The lowest point overall is set to be 0 and everything else is relative to it. Because the board was missed and the probe hit the heated bed that’s the lowest point. 


<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/probeFallZoom2.png">
</div>

Taking a look at the values it’s pretty clear where the problem is. The values 1620 μm and 1633 μm are very close to one another while 0 μm is way off. In an instance like this, it’s wise to reprobe and pay special attention to the section of the board that’s showing the error. In this particular case it would become clear that the probe is falling off the board and the board should be repositioned.

One very common cause for a measurement like this is that a holes files wasn’t loaded along with the gerber. If your probe falls into a hole during probing you’re going to end up with a bad height map and most likely a crashed nozzle. 

It’s important to note that it’s not always the low value that’s a problem. In this next example a folded piece of paper was placed on top of the right edge of the board.


<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/probeFallZoom.png">
</div>

You can see that the same error is being shown but in this instance the bottom point is our lowest overall point and the point at the far right is far too high compared to its neighbours.

## Want more detail?

We provide two console commands to help give you even more insight into your probing. (Open the console by pressing **Alt + C**)

**ShowProbingTargets** - will show all the probe points for the circuit at any step of the process. This can be useful if you’re having height issues and want to see your specific values near where you’re seeing issues. This command will also display the measured values for each point.

<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/measured.png">
</div>

**ShowHeightMap** - will display the triangles that make up the heightmap of the board. This one can help to visualize how our heightmaps are generated and may help in understanding how each point relates to the other.

<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/mesh.png">
</div>

By default the maximum difference we allow between two points in **0.08mm**. This value can be changed in the Beta tab of the Settings menu listed as _Probing Error Detection_

<div class="media-wrapper">
<img src="/docs/advanced/understandingProbingIssues/settings.png">
</div>
