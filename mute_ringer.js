// Copyright (c) 2020 Cisco and/or its affiliates.
//
//     This software is licensed to you under the terms of the Cisco Sample
// Code License, Version 1.1 (the "License"). You may obtain a copy of the
// License at
//
// https://developer.cisco.com/docs/licenses
//
//     All use of the material herein must be in accordance with the terms of
// the License. All rights not expressly granted by the License are
// reserved. Unless required by applicable law or agreed to separately in
// writing, software distributed under the License is distributed on an "AS
// IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied.

import xapi from 'xapi';

xapi.Command.UserInterface.Extensions.Panel.Save({ PanelId: 'mute_ring' },
    `<Extensions>
  <Version>1.7</Version>
  <Panel>
    <Order>1</Order>
    <PanelId>Mute Ringer</PanelId>
    <Origin>local</Origin>
    <Type>Home</Type>
    <Icon>Handset</Icon>
    <Color>#FC5143</Color>
    <Name>Mute Ringer</Name>
    <ActivityType>Custom</ActivityType>
  </Panel>
</Extensions>`);


async function getRingVolume(){
    const value = await xapi.Config.Audio.SoundsAndAlerts.RingVolume.get()
    // console.log(`This is the returned value: ${value}`)
    return parseInt(value)
}

getRingVolume()



function listenToGui(){
    xapi.Event.UserInterface.Extensions.Panel.Clicked.on(async(event)=> {
        console.log('Received Panel Event');
        let currentVolume = await getRingVolume()
        console.log(`The current Ringer Volume is: ${currentVolume}`)
        if (event.PanelId === 'mute_ring'){
            console.log('Inside Panel ID')
            if (currentVolume > '0'){
                console.log(`Setting Ring Volume to 0`)
                xapi.Config.Audio.SoundsAndAlerts.RingVolume.set(0);
                xapi.Command.UserInterface.Message.Alert.Display({ Duration: 5, Text: "Ring Muted", Title: "Ring Status" });
                currentVolume = '0'

            } else {
                (`Setting Ring Volume to 50`)
                xapi.Config.Audio.SoundsAndAlerts.RingVolume.set(50);
                xapi.Command.UserInterface.Message.Alert.Display({ Duration: 5, Text: "Ring Unmuted", Title: "Ring Status" });
                currentVolume = '50'

            }
        }
    });
}
listenToGui()

