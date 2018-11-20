---
path: "/docs/usb-connection-problems/"
date: "2018-11-11"
category: "Troubleshooting"
section: ""
title: "USB connection problems"
---

## Cannot establish a connection

Symptoms of a connection issue include not being able to detect the printer, or being stuck in an unusually long update (longer than 1 minute). To debug a connection problem, try the following: 

* Disconnect all devices from your computer.
* Use a different USB cable if available.
* Restart the V-One software and power cycle the V-One.
* Uninstall the V-One software and download the [latest version](/docs/desktop-application/) from the website.

### Windows

Ensure that the correct [FTDI drivers](http://www.ftdichip.com/Drivers/CDM/CDM21218_Setup.zip) are installed on your system and restart your computer.

<strong>Note</strong>: The V-One Software is not compatible with 32-bit windows operating systems. Ensure that your machine is running 64-bit Windows 7, 8, 8.1, or 10. 

### OS X

Some versions of OS X (10.10 and earlier) are likely to have problems connecting to the V-One. 

In OS X versions 10.9 (Mavericks) and 10.10 (Yosemite),  Apple included a built-in FTDI VCP driver that does not fully support many FTDI devices. This driver is also difficult to work around with the FTDI-supplied drivers, and the official FTDI VCP driver may not work at all on these systems. However, the Apple-provided driver in OS X 10.11 (El Capitan) is comprehensive enough to work with most FTDI devices. 

To ensure that your system is compatible with the V-One: 

* Upgrade your system to OS X 10.11 (El Capitan).
* If you can't upgrade, follow the [instructions supplied by FTDI](http://www.ftdichip.com/Support/Documents/AppNotes/AN_134_FTDI_Drivers_Installation_Guide_for_MAC_OSX.pdf) to install the VCP drivers on your system. For OS X versions 10.9 (Mavericks) and 10.10 (Yosemite), this is not guaranteed to work. 

## Printer Disconnects When Baking or Reflowing

If the printer resets as soon as the heater is turned on, the likely cause is the wall outlet or power bar being used cannot handle the extra current draw required for the 550W heater. If you have multiple devices connected on one circuit outlet, consider disconnecting a device or moving the V-One to a different outlet.

## Printer Does Not Move

If the printer is able to connect but it does not move, it may be damaged and need repair. Please contact us for assistance.