import * as React from 'react';
import { Button, View, Image, Text } from 'react-native';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NotifScreen    from "../screens/NotifScreen";
import ConfigScreen from "../screens/ConfigScreen";
const colors = {
    active: "#e32f45",
    inactive: "#748c94",
    bground: "#ffffff"

}

const iconsSize = {
    width: 35,
    height: 35
}
const fontSize = 9;

const Tab = createMaterialTopTabNavigator();
export default function SettingsBar ()
{
    return ( <Tab.Navigator
        screenOptions={ {

        } } >
        <Tab.Screen
            name='Notifications'
            component={ NotifScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/notifs.png" ) }
                            resizeMode="contain"
                            style={ {
                                width: iconsSize.width,
                                height: iconsSize.height,
                                tintColor: focused ? colors.active : colors.inactive
                            } }
                        />
                    </View>
                )
            } } />
        <Tab.Screen
            name='Configurations'
            component={ ConfigScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/config.png" ) }
                            resizeMode="contain"
                            style={ {
                                width: iconsSize.width,
                                height: iconsSize.height,
                                tintColor: focused ? colors.active : colors.inactive
                            } }
                        />
                    </View>
                )
            } } />
    </Tab.Navigator> );
}
