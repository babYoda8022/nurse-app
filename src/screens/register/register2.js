import React from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import  Icon  from "react-native-vector-icons/FontAwesome"

import { RegisterStyle2 } from "./registerStyle2";

export function Register2( { navigation } ){
    return(
        <View style={RegisterStyle2.container}>
            <View style={RegisterStyle2.box1}>
                <Icon name="home" style={RegisterStyle2.icon}/>
                <Text style={RegisterStyle2.txt}> Dados Residenciais </Text>
            </View>
            <View style={RegisterStyle2.box2}>
                <TextInput placeholder="Endereço" style={RegisterStyle2.txtInput}/>
                <TextInput placeholder="Bairro" style={RegisterStyle2.txtInput}/>
                <TextInput placeholder="CEP" style={RegisterStyle2.txtInput}/>
                <TextInput placeholder="Estado" style={RegisterStyle2.txtInput}/>
                <TextInput placeholder="Telefone" style={RegisterStyle2.txtInput}/>
            </View>
            <View style={RegisterStyle2.box3}>
                <TouchableOpacity style={RegisterStyle2.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Text style={RegisterStyle2.btnText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={RegisterStyle2.btnNext} onPress={()=>{navigation.navigate("Login")}}>
                    <Text style={RegisterStyle2.btnText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}