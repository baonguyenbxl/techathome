import * as React from 'react';
import { Button, View } from 'react-native';
export default function ProfessionalScreen ( { navigation } )
{
    const [ txt, setTxt ] = React.useState( "" );
    React.useEffect( () =>
    {
        fetch( 'http://localhost:5050/auth/signup', {
            method: 'POST',
            data:{}
        } )
            .then( ( response ) => response.json() )
            .then( ( responseJson ) =>
            {
                setTxt( JSON.stringify( responseJson, null, 2 ) );      
            } )
            .catch( ( error ) =>
            {
                console.error( error );
            } );
    }, [setTxt] )
    return (
        <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
            <Text>{txt}</Text>
        </View>
    );
}
