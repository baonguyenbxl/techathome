import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function Example ()
{
    const window = useWindowDimensions();
    const space = 50;
    const [ largeur, setLargeur ] = useState( window.width );

}
