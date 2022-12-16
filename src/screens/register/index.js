import React from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import  Icon  from "react-native-vector-icons/FontAwesome"

import { RegisterStyle } from "./registerStyle";

import { data } from "../../service/createAcount"


export function Register( { navigation } ){
    return(
        <View style={RegisterStyle.container}>
            <View style={RegisterStyle.box1}>
                <Text style={RegisterStyle.txt} >Insira seus dados e foto</Text> 
                <Text style={RegisterStyle.txt} >de indentificação</Text>
                <Icon name="user" style={RegisterStyle.icon}/>
            </View>
            <View style={RegisterStyle.box2}>
                <TextInput placeholder="Nome" style={RegisterStyle.txtInput } onChangeText={text => {data["name"] = {text}}}/>
                <TextInput placeholder="Email" style={RegisterStyle.txtInput} onChangeText={text => {data["email"] = {text}}}/>
                <TextInput placeholder="Senha" style={RegisterStyle.txtInput} onChangeText={(text) => {data["password"] = {text}}}/>
                <TextInput placeholder="Repitir senha" style={RegisterStyle.txtInput}/>
                <View style={RegisterStyle.box3}>
                    <TextInput placeholder="DN" style={RegisterStyle.txtInput2}/>
                    <TextInput placeholder="Sexo" style={RegisterStyle.txtInput2} onChangeText={text => {data["sex"] = {text}}}/>
                </View>
            </View>
            <View style={RegisterStyle.box4}>
                <TouchableOpacity style={RegisterStyle.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Text style={RegisterStyle.btnText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={RegisterStyle.btnNext} onPress={()=>{navigation.navigate("Register2")}}>
                    <Text style={RegisterStyle.btnText}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}