import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
export default function PostComponent ( { data } )
{
    const Title = data.title ? <Text style={styles.textTitle}>{ data.title }</Text> : <></>;
    const Author = data.author ? <Text style={ styles.textAuthor }>{ data.author }</Text> : <></>;
    const Details = data.details ? <Text style={ styles.textDetails }>{ data.details }</Text> : <></>;
    const Pictures = data.pictures && data.pictures.length > 0 ? <View style={ styles.divBottom }>{ data.pictures.map( ( p, i ) => <Image style={ styles.pixLayout } source={ { uri: p } } key={ i } /> ) }</View> : <></>;
    const Rate = data.rate ? <Text style={ styles.textRate }>{ `${data.rate}€/h` }</Text> : <></>;
    return ( 
        <View style={styles.divMain}>
            <View style={ styles.divRow }>
                <View style={ styles.divLeft }>{ Author }{ Title }{ Rate }</View>
                <View style={ styles.divRight }>{ Details }</View>
            </View>
            {Pictures}
        </View>
     )
}

const styles = StyleSheet.create( {
    textAuthor: {
        color: 'red',
        fontSize: 20
    },
    textTitle: {
        color: 'darkblue',
        fontSize: 13
    },
    textRate: {
        fontSize: 15,
        color:'darkpink'
    },
    textDetails: {
        color:'darkgrey'
    },
    divRow: {
        flexDirection: "row",
    },
    divMain: {
        width: 350,
        border: 1,
        borderRadius: 15,
        marginTop: 40
    },
    divLeft: {
        flex: 1,
        width: 100,
        padding:5
    },
    divRight: {
        flex: 2,
        width: 250,
        padding: 5
    },
    divBottom: { 
        height: 50,
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    pixLayout: {
        borderRadius: 10,
        height: 50,
        width: 50,
        marginLeft:15
    },
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
} )
