import * as React from 'react';
import { Button, View, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from "../screens/RegisterScreen";
import ResetScreen from "../screens/ResetScreen";
import MainScreen from '../screens/MainScreen';


const Stack = createNativeStackNavigator();

export default function MainStacks ()
{
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={ {
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'tomato' },
                } }
            >
                <Stack.Screen
                    name="Login"
                    component={ LoginScreen }
                    options={ {
                        title: 'Sign in',
                    } }
                />
                <Stack.Screen
                    name="Signup"
                    component={ RegisterScreen }
                    options={ {
                        title: 'Sign up',
                    } }
                />
                <Stack.Screen
                    name="Reset"
                    component={ ResetScreen }
                    options={ {
                        title: 'Forgot password?'
                    } }
                />
                <Stack.Screen
                    name="Main"
                    component={ MainScreen }
                    options={ {
                        title: 'Bao NGUYEN',
                        headerRight: () => (
                            <Pressable onPress={ () => alert( 'This button is right!' ) }><Image source={ require( "../assets/account.png" ) } style={ { tintColor: 'maroon' } } /></Pressable>
                        ), headerLeft: () => (
                            <Pressable onPress={ () => alert( 'This button is left!' ) }><Image source={ require( "../assets/menu.png" ) } style={ { tintColor: 'maroon' } } /></Pressable> ),
                    } }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
