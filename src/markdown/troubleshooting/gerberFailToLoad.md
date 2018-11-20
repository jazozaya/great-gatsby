---
path: "/docs/gerber-files-fail-to-load/"
date: "2018-11-11"
category: "Troubleshooting"
section: ""
title: "Gerber files fail to load"
---

If you have referred to the gerber export guides ([Altium](/docs/export/altium/), [EAGLE](/docs/export/eagle/), [KiCad](/docs/export/kicad/)) and you are unable to load your files on the V-One Software, then there is likely an error with our gerber parser and it cannot recognize how the file is formatted.

Although there is a [published standard](https://www.ucamco.com/files/downloads/file/81/the_gerber_file_format_specification.pdf) for the Gerber format, the reality is that each design software will export gerbers slightly differently and it is difficult to ensure our software is 100% compatible with all of them.

<div class="warning info">
<p>Please send us your Gerber files if they do not load.</p>
</div>

## Check first: Is this a valid Gerber file?

[UCAMCO](https://www.ucamco.com/en/file-formats/gerber) publishes and maintains the Gerber format specification. They also have a free online gerber viewer! Use this first to check whether the file you are loading conforms to the Gerber standard: [UCAMCO Online Gerber Viewer](https://gerber.ucamco.com/)

If your files fail to load, it's very likely that the Gerber files don't conform to the gerber standard. Check your export settings again, or use a different CAD tool to export your files.

## Debugging with Gerbv

[Gerbv](https://sourceforge.net/projects/gerbv/) is an open source gerber viewer with basic functionality for gerber editing by removing features from the gerber file.

1. Download and install [Gerbv](https://sourceforge.net/projects/gerbv/). Open the program and have your gerbers ready.
1. In the main window, navigate to _File>Open Layer(s)_.
1. Select the problematic gerber file. The gerber file should now load in the gerber viewer.

<div class="media-wrapper">
<img src="/docs/troubleshooting/gerberFailToLoad/gerbv-loaded.jpg">
</div>

### Create and Test File Copy

Creating a copy of the gerber with Gerbv will often solve simple gerber formatting issues, since Gerbv automatically re-formats the gerber file when it makes a copy.

1. Visually inspect the gerber file to ensure it has been exported correctly.
1. Navigate to _File>Save Active Layer as..._ and name the file copy.
1. Open the copied gerber file in the V-One software.

### Remove Non-Standard Features

If the copied gerber file did not work, then custom pad shapes and non-standard copper layer features (like board outlines, images, or formatted text) can sometimes cause problems in gerber processing. To solve these issues, we recommend that you remove suspect features and re-load the gerber in the V-One software.

Editing the gerber file is permanent! Make sure to use a copy of the original gerber when debugging.

<div class="media-wrapper">
<img src="/docs/troubleshooting/gerberFailToLoad/gerbv-delete.jpg">
</div>

1. Click and drag in the viewer window to select the all instances of the suspect feature. It's important to remove all occurrences of the feature, or the file will still fail to load.
1. Delete the selected features by pressing the Delete key.
1. Save the file, and attempt to open it in the V-One software.
1. If the file still has issues, choose another feature type and repeat steps 1-3

Once the problematic feature is determined, remove it from the circuit design and re-generate your gerber files. The circuit should now load without issues.
