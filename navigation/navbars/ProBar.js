import * as React from 'react';
import { Button, View, Image, Text } from 'react-native';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MyInfoScreen from "../screens/MyInfoScreen"
import FindTechScreen from "../screens/FindTechScreen"
import SeeJobsScreen from "../screens/SeeJobsScreen"

import { iconViewJobs, iconFindTech, iconTechInfo } from "../../exports"

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
export default function ProBar ()
{
    return ( <Tab.Navigator
        screenOptions={ {

        } } >
        <Tab.Screen
            name='My tech info'
            component={ MyInfoScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/technicianinfo.png" ) }
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
            name='Find a tech'
            component={ FindTechScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/findtech.png" ) }
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
            name='View my jobs'
            component={ SeeJobsScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/seejobs.png" ) }
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
