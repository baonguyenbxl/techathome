import * as React from 'react';
import { Button, View } from 'react-native';
import PostComponent from '../components/PostComponent';
import { AppURLContext } from "../../App";
export default function AllJobsScreen ( { navigation } )
{
    const [ jsx, setJsx ] = React.useState( <></> )
    const url = React.useContext( AppURLContext );
    React.useEffect( () =>
    {
        fetch( url+'posts', {
            method: 'GET'
        } )
            .then( ( response ) => response.json() )
            .then( ( responseJson ) =>
            {
                setJsx( <View style={ {marginTop: 20 }}>{responseJson.data.map((d,k)=><PostComponent data={d} key={k} />)}</View> )
            } )
            .catch( ( error ) =>
            {
                console.error( error );
            } );
    }, [ url,setJsx ] )

    return (
        <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
            { jsx }
        </View>
    );
}
