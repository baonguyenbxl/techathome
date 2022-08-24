import React from 'react';
import {StyleSheet,Image} from 'react-native';

const iconsSize = {
    width: 35,
    height: 35
}
const colors = {
    active: "#e32f45",
    inactive: "#748c94",
    bground: "#ffffff"

}
export const LogoImage = ()=> <Image source={ require( "./navigation/assets/techathomelogo.png" ) } /> 
// icons for navigation
export const IconViewJobs = ( { focus } ) => <Image resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } source={require('./navigation/assets/seejobs.png')}/>
export const IconTechInfo = ( { focus } ) => <Image resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } source= {require("./navigation/assets/technicianinfo.png")} />
export const IconFindTech = ( { focus } ) => <Image resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } source= {require("./navigation/assets/findtech.png")}/>
export const IconHome = ({focus}) => <Image source={ require( './navigation/assets/home.png' ) } resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } />
export const IconJobs = ( { focus } ) => <Image source={ require( "./navigation/assets/professionalnetwork.png" ) } resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } }  />
export const IconPro = ( { focus } ) => <Image source={ require( "./navigation/assets/professionals1.png" ) } resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } />
export const IconSettings = ( { focus } ) => <Image source={ require( "./navigation/assets/settings.png" ) } resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } />

export const IconConfig = ( { focus } ) => <Image resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } source={ require( './navigation/assets/seejobs.png' ) } />
export const IconNotifs = ( { focus } ) => <Image resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } source={ require( './navigation/assets/seejobs.png' ) } />

// JobsBar navigation
export const IconAllJobs = ( { focus } ) => <Image resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } source={ require( "./navigation//assets/seeopportunities.png") } />
export const IconMyJobs = ( { focus } ) => <Image resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } source={ require( './navigation/assets/myjobs.png' ) } />
export const IconPostJob = ( { focus } ) => <Image resizeMode="contain" style={ { width: iconsSize.width, height: iconsSize.height, tintColor: focus ? colors.active : colors.inactive } } source={ require( './navigation/assets/customers.png' ) } />
