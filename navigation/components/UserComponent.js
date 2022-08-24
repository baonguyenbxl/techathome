import React, { useState, useContext, useEffect } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import { IUser } from "../../Defines";
export default function User ({data})
{
    const FirstName = data?.firstname ? <Text>{ data.firstname }</Text> : <></>;
    const LastName = data?.lastname ? <Text>{ data.lastname }</Text> : <></>;
    const Email = data?.email ? <Text>{ data.email }</Text> : <></>;
    const Address = data?.address ? <Text>{ data.address }</Text> : <></>;
    return ( <View>
        { FirstName }
        { LastName }
        { Email }
        { Address }
    </View> )
}
