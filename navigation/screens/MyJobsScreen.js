import * as React from 'react';
import { Button, View, Text } from 'react-native';
import UserComponent from "../components/UserComponent"
import { AppURLContext } from "../../App";
export default function MyJobsScreen ( { navigation } )
{
    const [ jsx, setJsx ] = React.useState( <></> )
    const url = React.useContext( AppURLContext );
    React.useEffect( () =>
    {
        fetch(`${url}`, {
            method: 'GET'
        } )
            .then( ( response ) => response.json() )
            .then( ( responseJson ) =>
            {
                setJsx(<UserComponent data={responseJson.data} />)
            } )
            .catch( ( error ) =>
            {
                console.error( error );
            } );
    }, [url, setJsx ] )
    
    return (
        <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>            
            {jsx}
        </View>
    );
}
