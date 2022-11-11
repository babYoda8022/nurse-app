import React from "react";
import { View, Text, Image } from "react-native";

import  Icon  from "react-native-vector-icons/FontAwesome"

import { HeaderStyle } from "./headerStyle";


export function Header(list){

    let contents = list.object
    
    return(
        <View>
             <View style={HeaderStyle.box1}>
                <Text style={HeaderStyle.txtBox1}>Usuário</Text>
                <Icon name="user" style={HeaderStyle.icon}/>
            </View>
            <View style={HeaderStyle.box2}>
                <Image style={HeaderStyle.img} source={require("../../img/icons/icon6.png")}/>
                <Text style={HeaderStyle.txt}> Curativos </Text>
            </View>
        </View>
    )
}