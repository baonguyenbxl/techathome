import * as React from 'react';
import { Button, View, Image, Text } from 'react-native';

import IncomeScreen from "../screens/IncomeScreen";
import OutcomeScreen from "../screens/OutcomeScreen";
import AnalyticScreen from "../screens/AnalyticScreen";
import AccountScreen from "../screens/AccountScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


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
export default function HomeBar ()
{
    return ( <Tab.Navigator
        screenOptions={ {

        } } >
        <Tab.Screen
            name='Account'
            component={ AccountScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/account_balance.png" ) }
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
            name='Income'
            component={ IncomeScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/savings.png" ) }
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
            name='Paid out'
            component={ OutcomeScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/paid.png" ) }
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
            name='Analytics'
            component={ AnalyticScreen }
            options={ {
                tabBarIcon: ( { focused } ) => (
                    <View style={ { alignItems: 'center', justifyContent: 'center' } }>
                        <Image
                            source={ require( "../assets/analytics.png" ) }
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
