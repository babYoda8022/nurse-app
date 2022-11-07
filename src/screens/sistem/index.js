import React from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import { SistemStyle } from "./sistemStyle";

export function SistemHome( { navigation } ){
    return(
        <View style={SistemStyle.container}>
            <View style={SistemStyle.box1}></View>
            <View style={SistemStyle.box2}></View>
            <View style={SistemStyle.box3}></View>
        </View>
    )
}