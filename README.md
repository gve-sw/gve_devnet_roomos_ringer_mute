# gve_devnet_roomos_ringer_mute
Webex Device RoomOS macro that enables a mute button for the Webex Device's ringer, no sound will be heard when receiving a call. When pressed, the macro will lower the volume of the ringer to 0 (from its current volume). Pressing the button a second time will enable the ringer again (to a volume of 50). When muted, the device will still alert users visually. 


## Contacts
* Max Acquatella
* Gerardo Chaves

## Solution Components
* Webex Devices 
* RoomOS 
* Javascript

## Requirements
This macro was tested on a Cisco DX80, please test for your particular Cisco Webex RoomOS device.

## Installation/Configuration

1) Copy the code from "mute_ringer.js" to a new macro in your Webex Device
2) Enable the Macro

## Usage

The macro will create a new button, labeled "Mute Ringer":

![/IMAGES/image0.png](/IMAGES/image0.png)

To mute the ringer of the device, just press the button. You should get an alert like so:

![/IMAGES/image1.png](/IMAGES/image1.png)

This action will mute the ringer, no sound will be heard when receiving a call. The device will still alert users visually. 

To enable the ringer, just push the button again:

![/IMAGES/image2.png](/IMAGES/image2.png)

This will return the volume of the ringer to a value of 50. This value can be changed in the code. 

### LICENSE

Provided under Cisco Sample Code License, for details see [LICENSE](LICENSE.md)

### CODE_OF_CONDUCT

Our code of conduct is available [here](CODE_OF_CONDUCT.md)

### CONTRIBUTING

See our contributing guidelines [here](CONTRIBUTING.md)

#### DISCLAIMER:
<b>Please note:</b> This script is meant for demo purposes only. All tools/ scripts in this repo are released for use "AS IS" without any warranties of any kind, including, but not limited to their installation, use, or performance. Any use of these scripts and tools is at your own risk. There is no guarantee that they have been through thorough testing in a comparable environment and we are not responsible for any damage or data loss incurred with their use.
You are responsible for reviewing and testing any scripts you run thoroughly before use in any non-testing environment.
