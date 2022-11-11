import React from "react";
import { Text, TouchableOpacity, Image} from 'react-native';

import { CardStyle } from "./cardStyle";

export function CardService( list ){

    let contents = list.object
    
    return(
        <TouchableOpacity style={CardStyle.container}>
            <Image source={contents.path} style={CardStyle.img}/>
            <Text style={CardStyle.txt}> {contents.content} </Text>
        </TouchableOpacity>
    )
}
