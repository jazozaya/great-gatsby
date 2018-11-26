---
path: "/docs/curing-conductive-ink/"
date: "2018-11-23"
category: "Advanced topics"
section: ""
title: "Curing conductive ink"
--- 

## The importance of curing (baking):

After a circuit is printed, it is important to cure the ink immediately so it obtains the best conductiviy, adhesion and soldering properties it can offer. _Why?_

As the ink temperature increases, chemical reactions are triggered and the metallic particles will form a conductive matrix and fuse together. Many conductivity and soldering problems occur because the ink was either not cured right away, at the right temperature, or long enough.

<div class="warning info">
<p><strong>Note:</strong> Always cure soon after printing. Otherwise, solvents in the ink will evaporate and the ink will dry out. </p>
</div>

## Curing standard conductive ink

<table>
  <tbody>
    <tr>
      <td style="width: 200px;"><strong>Material</strong></td>
      <td style="width: 200px;"><strong>Temp. Celcius</strong></td>
      <td style="width: 200px;"><strong>Temp. Fahrenheit</strong></td>
      <td style="width: 250px;"><strong>Time</strong></td>
    </tr>
    <tr>
      <td>FR4</td>
      <td>200°C-210°C</td>
      <td>392°F - 410°F</td>
      <td>30-40 mins</td>
    </tr>
    <tr>
      <td>FR1</td>
      <td>200°C-210°C</td>
      <td>392°F - 410°F</td>
      <td>30-40 mins</td>
    </tr>
  </tbody>
</table>

You may notice the V-One sets the temperature about 10-20 degrees hotter than the values listed here, this is to compensate for the thermal lag between the temperature of the heated platform and the temperature of the ink on the substrate.

**Tip**: As long the proper ink profile is chosen in the software, the **BAKE** mode will set the correct temperature and time for the ink you are using.


<div class="media-wrapper">
<img src="/docs/advanced/curingAndReflowing/bake-mode.png" />
</div>


### Using an external oven

If you have access to an enclosed curing oven, then you are welcome to cure your boards with it. Just set the oven to the above time and temperatures.

One benefit of using an external oven is that it allows faster printing since you do not need to wait for the V-One to cool down after each print.

### High temperature substrates

_Disclaimer: Voltera has not tried reproducing these results. The following is anecdotal._

If you are working with high temperature ceramics and you have access to an external oven, it may be worthwhile to try curing our standard conductive ink at higher temperatures. Perhaps 300°C-450°C (572°F - 842°F) for 20-30 minutes. A couple of our users have reported _significant_ increases to conductivity and solderability.

<div class="important info">
<p><strong>Important</strong>: Do not bake FR4 or FR1 at higher than 240°C (464°F). The materials will not survive.</p>
</div>

## Curing flexible conductive ink

<table>
  <tbody>
    <tr>
      <td style="width: 200px;"><strong>Material</strong></td>
      <td style="width: 200px;"><strong>Temp. Celcius</strong></td>
      <td style="width: 200px;"><strong>Temp. Fahrenheit</strong></td>
      <td style="width: 250px;"><strong>Time</strong></td>
    </tr>
    <tr>
      <td>FR4</td>
      <td>200°C-210°C</td>
      <td>392°F - 410°F</td>
      <td>30-40 mins</td>
    </tr>
    <tr>
      <td>Kapton (Polyimide)</td>
      <td>200°C-210°C</td>
      <td>392°F - 410°F</td>
      <td>30-40 mins</td>
    </tr>
    <tr>
      <td>PET</td>
      <td>160°C</td>
      <td>320°F</td>
      <td>15 mins</td>
    </tr>
  </tbody>
</table>

The biggest challenge when curing thin films like Kapton and PET is that **the film will curl** as it heats up.

As the film curls, **air will become trapped** between the heated bed and the film. Since the heated platform primarily transfers heat by conduction, and air is a great thermal insulator, the ink will not reach the target temperature.

<div class="warning info">
<p><strong>Note</strong>: In <strong>BAKE</strong> mode, the max temp. is 160°C (320°F) to avoid damaging PET. If printing on FR4, FR1 or Kapton, a <strong>MANUAL</strong> cure is preferred. (See below) </p>
</div>

Undercured ink will have poor conductivity, poor adhesion and poor solderability. To prevent this, we recommend one of the following:

### 1. Adhesive backed films

Purchase a film that has an adhesive on one side. Adhesive backed kapton is quite popular and fairly inexpensive. Then:

1. Adhere the film to a piece of FR4 or FR1. You may use one of our 2" x 3" or 3"x 4" blank substrates.
1. Probe, print, and cure the board as normal (flipping during baking)
1. Gently peel the film after it has been cured. Avoid creasing the flex ink.
1. Use acetone or isopropyl alcohol to clean off the adhesive.

The adhesive will prevent the film from curling and ensure it reaches the curing temperature.

### 2. Enclosed Oven

If you have access to an enclosed oven, then you can print on the V-One and transfer the film to the oven for curing.

Even if the film curls, the ink will reach curing temperature since the air surrounding the film will be at curing temperatures. 

## Manual Mode

It is entirely possible to control the temperature directly and create your own curing profile.  Just enter the time and temperature values you want. The maximum temperature is 240°C (464°F) and the maximum time is 60 minutes.

*Note: It is not possible to program complex profiles at this time.*


<div class="media-wrapper">
<img src="/docs/advanced/curingAndReflowing/manual-mode.png" />
</div>


