---
path: '/docs/catalina-installation/'
date: '2019-12-04'
category: 'Troubleshooting'
section: ''
title: 'Installing on macOS 10.15 Catalina'
---

## Installation Instructions

We’ve recently had reports of problems running fresh installs of our app on **macOS 10.15 Catalina**. This doesn’t impact users who had previously installed the app before updating their OS.

Here's how we've been able to work around it for the moment. If you run the default unarchiver (Archive Utility) you'll run into issues. We recommend grabbing [The Unarchiver](https://theunarchiver.com/) and using that. This should allow you extract the app without problems.

<div class="media-wrapper">
<img src="/docs/troubleshooting/catalinaInstallation/1.png">
</div>

The next thing you'll likely hit is this warning when you try to launch the app.

<div class="media-wrapper">
<img src="/docs/troubleshooting/catalinaInstallation/2.png">
</div>

To get around this one you need to right click on the app and choose open. This will get you a slightly different dialogue box with an open button.


<div class="media-wrapper">
<img src="/docs/troubleshooting/catalinaInstallation/3.png">
</div>

Clicking open should have you good to go. You can then close the app and copy it to your *Applications directory*.

Apologies for the inconvenience. Once you've got it running the first time you should be fine going forward as the problem is occurring during extracting the archive.
