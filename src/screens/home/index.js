import React from "react";
import { View, Image } from 'react-native';

import { HomeStyle } from "./homeStyle";

export function Home(){
    return(
        <View style={HomeStyle.container}>
            <Image source={require("../../img/logo.png")}/>
        </View>
    )
}