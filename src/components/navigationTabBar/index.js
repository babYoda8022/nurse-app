import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { NavigationTabBarStyle } from "./navigationTabBarStyle";

import  Icon  from "react-native-vector-icons/FontAwesome"

export function NavigationTabBar( { navigation } ){
    return(
        <View style={NavigationTabBarStyle.container}>
            <View style={NavigationTabBarStyle.box1}>
                <TouchableOpacity style={NavigationTabBarStyle.homeIcon} onPress={()=>{navigation.navigate("SistemHome")}}>
                    <Icon name="home" style={[{fontSize: 35, color:"#0C008C"}]}/>
                </TouchableOpacity>
                <TouchableOpacity style={NavigationTabBarStyle.homeIcon} onPress={()=>{navigation.navigate("Header")}}>
                    <Icon name="home" style={[{fontSize: 35, color:"#0C008C"}]}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}