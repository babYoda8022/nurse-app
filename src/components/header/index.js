import React from "react";
import { View, Text, Image } from "react-native";

import  Icon  from "react-native-vector-icons/FontAwesome"

import { HeaderStyle } from "./headerStyle";


export function Header(props){
    
    return(
        <View>
             <View style={HeaderStyle.box1}>
                <Text style={HeaderStyle.txtBox1}>Usuário</Text>
                <Icon name="user" style={HeaderStyle.icon}/>
            </View>
            <View style={HeaderStyle.box2}>
                <Image style={HeaderStyle.img} source={ props.require }/>
                <Text style={HeaderStyle.txt}> { props.txt } </Text>
            </View>
        </View>
    )
}