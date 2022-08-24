import React, { useState, useEffect,useContext } from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, View, Button, Image, useWindowDimensions, Pressable } from "react-native";
import MainScreen from "./MainScreen";
import RegisterScreen from "./RegisterScreen";
import { AppUserContext,AppSetUserContext } from '../../App';
function LoginScreen ( { navigation } ) 
{
    const [ mail, onChangeMail ] = useState( "" )
    const [ jsxMail, setJsxMail ] = useState( <></> )
    const [ errMail, setErrMail ] = useState( "" )
    const [ pwd, onChangePwd ] = useState( "" )
    const [ jsxPwd, setJsxPwd ] = useState( <></> )
    const [ errPwd, setErrPwd ] = useState( "" )

    const [ jsx, setJsx ] = useState( <></> )
    const [ errmsg, setErrMsg ] = useState( "" )
    const msgtxt = useContext( AppUserContext );

    useEffect( () =>
    {
        function changeMail (txt)
        {
            onChangeMail( txt )
            //check email errors
            setErrMail( txt === "" ? " email" : "" )
        }
        setJsxMail( <View>
            <Text style={styles.label}>Email:</Text>
            <TextInput keyboardType="email-address" placeholder="Email:" placeholderTextColor='lightgrey' onChangeText={ ( txt ) => changeMail( txt ) } style={ styles.input } />
        </View> )
    }, [setJsxMail,setErrMail,onChangeMail])
    useEffect( () =>
    {
        function changeMail ( txt )
        {
            onChangePwd( txt )

            //check password errors
            setErrPwd( txt === "" ? " password" : "" )
        }
        
        setJsxPwd( <View>
            <Text style={ styles.label }>Password:</Text>
            <TextInput keyboardType="visible-password" placeholder="Password:" placeholderTextColor='lightgrey' onChangeText={ ( txt ) => changeMail( txt ) } style={ styles.input } />
        </View> )
    }, [ setJsxPwd, setErrPwd, onChangePwd ] )

    return ( <SafeAreaView>
        <Text style={ { textAlign: 'center', fontSize: 30 } }>
            { "\n" }
            { "\n" }</Text>
        {jsxMail}
        {jsxPwd }
        <Pressable style={ styles.btnLogin } onPress={ () => navigation.navigate('Main') }>
            <Text style={ { fontSize: 20, color: 'white' } }>Log in</Text>

        </Pressable>
        <View>
            <Text style={ { color: 'red', marginTop: 20, marginRight: 'auto', marginLeft: 'auto' } }>{ msgtxt }</Text>
        </View>
        <View style={ [ styles.container, { flexDirection: "row" } ] }>
            <Pressable style={ styles.btnReset } onPress={ () => navigation.navigate('Reset') }>
                <Text style={ { color: 'darkred', fontSize: 17 } }>Reset?</Text>

            </Pressable>
            <Pressable style={ styles.btnSignUp } onPress={ () => navigation.navigate('Signup') }>
                <Text style={ { color: 'darkblue', fontSize: 17 } }>Sign Up</Text>

            </Pressable>
        </View>
        <View>
            <Image source={ require( "../assets/techlogo.png" ) } style={ styles.logo } />
        </View>
    </SafeAreaView> )

};

const styles = StyleSheet.create( {
    input: {
        height: 40,
        marginLeft: '15%',
        marginRight: '15%',
        width:'70%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'darkgreen',
        padding: 12
    },
    label: {
        marginTop: 40,
        marginLeft: "15%",
        color:'tomato'
    },
    container: {
        flex: 1,
        width:'60%',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: 20,
        padding:10
    },
    btnLogin: {
        backgroundColor: 'tomato',
        width: '60%',
        height: 50,
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: 20,
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 15
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 15
    },
    btnReset: {
        
        flex: 1,
        width: '20%',
        height: 50,
        marginRight: 20,
        textAlign: 'center',
        alignItems: 'center'
    }, btnSignUp: {
        width: '20%',
        flex: 2,
        height: 50,
        marginLeft: 20,
        textAlign: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 150,
        height: 100
    }
} );

export default LoginScreen;
