import React from "react";
import { Text, View} from 'react-native';

import { CardWorkerStyle } from "./cardWorkerStyle";

export function CardWorker( list ){

    let contents = list.object
    
    return(
        <View style={CardStyle.container}>
            <View>
                <Text style={CardStyle.txt}> {contents} </Text>
            </View>
            <View>

            </View>
        </View>
    )
}
