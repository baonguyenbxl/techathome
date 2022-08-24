import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// navigation icons 
import { IconHome, IconJobs, IconPro, IconSettings } from "../../Icons";
import { styles } from "../../Styles";

// navigation bars
import HomeBar from '../navbars/HomeBar';
import JobsBar from '../navbars/JobsBar';
import ProBar from '../navbars//ProBar';
import SettingsBar from '../navbars//SettingsBar';

const Tab = createBottomTabNavigator();
const colors = {
    active: "#e32f45",
    inactive: "#748c94",
    bground: "#ffffff"

}


const fontSize = 14;

// bottom-bar menu

const MainScreen = () =>
{

    return (
        <Tab.Navigator
            initialRouteName='Home'
            
            screenOptions={ {
                tabBarShowLabel: false,
                headerShown:false,
                tabBarStyle: [
                    {
                        display: "flex",
                        position: 'absolute',
                        bottom: 2,
                        right: 4,
                        left: 4,
                        elevation: 0,
                        backgroundColor: 'lightgrey',
                        borderRadius: 15,
                        height: 90,
                        ...styles.shadow
                    },
                    null
                ]
            } }>
            <Tab.Screen
                name='Home'
                component={ HomeBar }
                options={ {
                    tabBarIcon: ( { focused } ) => (
                        <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                            <IconHome focus={focused} />
                            <Text style={ { color: focused ? colors.active : colors.inactive, fontSize: fontSize } }>Home</Text>
                        </View>
                    )
                } } />
            <Tab.Screen
                name='Jobs'
                component={ JobsBar }
                options={ {
                    tabBarIcon: ( { focused } ) => (
                        <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                            <IconJobs focus={ focused } />
                            <Text style={ { color: focused ? colors.active : colors.inactive, fontSize: fontSize } }>Jobs</Text>
                        </View>
                    )
                } } />
            <Tab.Screen
                name='Professionals'
                component={ ProBar }
                options={ {
                    tabBarIcon: ( { focused } ) => (
                        <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                            <IconPro focus={ focused } />
                            <Text style={ { color: focused ? colors.active : colors.inactive, fontSize: fontSize } }>Professionals</Text>
                        </View>
                    )
                } } />
            <Tab.Screen
                name='Settings'
                component={ SettingsBar }
                options={ {
                    tabBarIcon: ( { focused } ) => (
                        <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                            <IconSettings focus={ focused } />
                            <Text style={ { color: focused ? colors.active : colors.inactive, fontSize: fontSize } }>Settings</Text>
                        </View>
                    )
                } } />
        </Tab.Navigator>
    )
};



export default MainScreen;
