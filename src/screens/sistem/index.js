import React from "react";
import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import  Icon  from "react-native-vector-icons/FontAwesome"

import { SistemStyle } from "./sistemStyle";
import { CardService } from "../../components/cardService";
import { NavigationTabBar } from "../../components/navigationTabBar";

import { dataIcons } from "../../data"

export function SistemHome( { navigation } ){

    return(
        <View style={SistemStyle.container}> 
            <View style={SistemStyle.box1}>
                <Icon name="user" style={SistemStyle.icon}/>
                <View style={SistemStyle.subBox1}>
                    <Text style={SistemStyle.txtBox1}>Olá, Usuário</Text>
                    <Text style={SistemStyle.txt2Box1}>Sejá bem-vindo de volta!</Text>
                </View>
            </View>
            <View style={SistemStyle.box2}>
                <Text style={SistemStyle.txt}> O que está precisando?</Text>
                <TextInput style={SistemStyle.txtInput}/>
                <Text style={SistemStyle.txt}> Ou </Text>
                <Text style={SistemStyle.txt}> Clique no serviço a baixo </Text>
            </View>
            
            <View style={SistemStyle.box3}>    
                <FlatList
                data={dataIcons}
                keyExtractor={itens=> itens.content}
                numColumns={2}
                renderItem={(itens)=>(
                    <CardService object={itens.item}/>
                )}/>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}