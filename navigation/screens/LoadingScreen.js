import * as React from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';

const LoadingScreen = () =>
{
    const window = useWindowDimensions();
    const space = 50;
    let largeur = window.width - ( space * 2 ),
        hauteur = largeur / 3 * 2,
        top = (window.height-hauteur)/2,
        left = space,
        right = space;

    const styles = StyleSheet.create( {
        container: {
            paddingTop: top,
            paddingLeft: left,
            paddingRight: right
        },
        stretch: {
            width: largeur,
            height: hauteur,

            resizeMode: 'center',
        },
    } );

    return (
        <View style={ styles.container }>
            <Image
                style={ styles.stretch }
                source={ require("../assets/techlogo.png") }
            />
        </View>
    );
}
export default LoadingScreen;
