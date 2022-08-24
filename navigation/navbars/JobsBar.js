import * as React from 'react';
import { Button, View, Image, Text } from 'react-native';

import AllJobsScreen from "../screens/AllJobsScreen";
import MyJobsScreen from "../screens/MyJobsScreen";
import PostJobScreen from "../screens/PostJobScreen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {IconAllJobs, IconMyJobs, IconPostJob } from '../../Icons'


const Tab = createMaterialTopTabNavigator();
export default function JobsBar ()
{
    return ( <Tab.Navigator
        screenOptions={ {
        
        } } >
        <Tab.Screen
            name='All Jobs'
            component={ AllJobsScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <IconAllJobs focus={ focused } />
                    </View>
                )
            } } />
        <Tab.Screen
            name='My Jobs'
            component={ MyJobsScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <IconMyJobs focus={ focused } />
                    </View>
                )
            } } />
        <Tab.Screen
            name='Post Job'
            component={ PostJobScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <IconPostJob focus={ focused } />
                    </View>
                )
            } } />
    </Tab.Navigator> );
}
