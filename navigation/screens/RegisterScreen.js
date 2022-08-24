import React, { useState, useEffect,useContext } from "react";
import { Text, StyleSheet, SafeAreaView, View, TextInput, Pressable } from "react-native";
import { AppUserContext, AppSetUserContext } from '../../App';
function RegisterScreen ({navigation}) 
{
    const [ email, setEmail ] = useState( "" )
    const [ jsxEmail, setJsxEmail ] = useState( <></> )
    const [ errEmail, setErrEmail ] = useState( "" )

    const [ pwd, setPwd ] = useState( "" )
    const [ jsxPwd, setJsxPwd ] = useState( <></> )
    const [ errPwd, setErrPwd ] = useState( "" )

    const [ rePwd, setRePwd ] = useState( "" )
    const [ jsxRePwd, setJsxRePwd ] = useState( <></> )
    const [ errRePwd, setErrRePwd ] = useState( "" )

    const [ fname, setFname ] = useState( "" )
    const [ jsxFname, setJsxFname ] = useState( <></> )
    const [ errFname, setErrFname ] = useState( "" )

    const [ lname, setLname ] = useState( "" )
    const [ jsxLname, setJsxLname ] = useState( <></> )
    const [ errLname, setErrLname ] = useState( "" )

    const [ address, setAddress ] = useState( "" )
    const [ jsxAddress, setJsxAddress ] = useState( <></> )

    const [ phone, setPhone ] = useState( "" )
    const [ jsxPhone, setJsxPhone ] = useState( <></> )
    const [ errPhone, setErrPhone ] = useState( "" )

    useEffect( () =>
    {
        function changeEmail ( txt )
        {
            setEmail( txt )
            if ( txt === "" )
            {
                setErrEmail( " email" )
            } else
            {
                setErrEmail( "" )
            }
        }
        setJsxEmail( <TextInput placeholder="Email:" placeholderTextColor='darkblue' onChangeText={ ( txt ) => changeEmail( txt ) } style={ styles.input } /> )
    }, [ setEmail, setJsxEmail, setErrEmail ] )
    useEffect( () =>
    {
        function changePwd ( txt )
        {
            setPwd( txt )
            if ( txt === "" )
            {
                setErrPwd( " password" )
            } else
            {
                setErrPwd( "" )
            }
        }
        setJsxPwd( <TextInput placeholder="Password:" placeholderTextColor='darkblue' onChangeText={ ( txt ) => changePwd( txt ) } style={ styles.input } /> )
    }, [ setPwd, setJsxPwd, setErrPwd ] )
    useEffect( () =>
    {
        function changeRePwd ( txt )
        {
            setRePwd( txt )
            setErrRePwd( txt === "" ? " confirmation password" : "" )
        }
        setJsxRePwd( <TextInput placeholder="Re-Password:" style={ styles.input } placeholderTextColor='darkblue' onChangeText={ ( txt ) => changeRePwd( txt ) } /> )
    }, [ setRePwd, setJsxRePwd, setErrRePwd ] )
    useEffect( () =>
    {
        function changeLname ( txt )
        {
            setLname( txt )
            setErrLname( txt === "" ? " lastname" : "" )
        }
        setJsxLname( <TextInput placeholder="Lastname:" style={ styles.input } placeholderTextColor='darkblue' onChangeText={ ( txt ) => changeLname( txt ) } /> )
    }, [ setLname, setJsxLname, setErrLname ] )
    useEffect( () =>
    {
        function changeFname ( txt )
        {
            setFname( txt )
            setErrFname( txt === "" ? " firstname" : "" )
        }
        setJsxFname( <TextInput placeholder="Firstname:" style={ styles.input } placeholderTextColor='darkblue' onChangeText={ ( txt ) => changeFname( txt ) } /> )
    }, [ setFname, setJsxFname, setErrFname ] )
    useEffect( () =>
    {
        function changePhone ( txt )
        {
            setPhone( txt )
            setErrPhone( txt === "" ? " phone" : "" )
        }
        setJsxPhone( <TextInput placeholder="Phone:" style={ styles.input } placeholderTextColor='darkblue' onChangeText={ ( txt ) => changePhone( txt ) } /> )
    }, [ setPhone, setJsxPhone, setErrPhone ] )
    useEffect( () =>
    {
        function changeAddress ( txt ) { setAddress( txt ) }
        setJsxAddress( <TextInput placeholder="Address:" style={ styles.input } placeholderTextColor='darkgreen' onChangeText={ ( txt ) => changeAddress( txt ) } /> )
    }, [ setAddress, setJsxAddress ] )
    return ( <SafeAreaView>
        <View>
            <Text style={ { fontSize: 30, color: 'darkgray', marginTop: 20, marginLeft: '10%' } }>Register a new account</Text>
            { jsxEmail }
            { jsxPwd }
            { jsxRePwd }
            { jsxFname }
            { jsxLname }
            { jsxPhone }
            { jsxAddress }
        </View>
        <Pressable style={ styles.button}>
            <Text style={{color:'white',fontSize:20}}>Sign Up</Text>
        </Pressable>
    </SafeAreaView> );
};

const styles = StyleSheet.create( {
    input: {
        height: 40,
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: 20,
        width: '70%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'darkgreen',
        padding: 12
    },
    button: {
        height: 50,
        padding:10,
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: 30,
        width: '60%',
        backgroundColor: 'lightsalmon',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 15
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 15
    }
} );

export default RegisterScreen;
