import React from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import { RegisterStyle } from "./registerStyle";

export function Register( { navigation } ){
    return(
        <View style={RegisterStyle.container}>
            <View style={RegisterStyle.box1}>
                <Text>Insira seus dados e foto de indentificação</Text>
                <Image />
                <TextInput placeholder="Nome" style={RegisterStyle.txtInput}/>
                <TextInput placeholder="Email" style={RegisterStyle.txtInput}/>
                <TextInput placeholder="Senha" style={RegisterStyle.txtInput}/>
                <TextInput placeholder="Repitir senha" style={RegisterStyle.txtInput}/>
                <View style={RegisterStyle.box2}>
                    <TextInput placeholder="DN" style={RegisterStyle.txtInput2}/>
                    <TextInput placeholder="Sexo" style={RegisterStyle.txtInput2}/>
                </View>
            </View>
            <View style={RegisterStyle.box3}>
                <TouchableOpacity style={RegisterStyle.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Text style={RegisterStyle.btnText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={RegisterStyle.btnNext}>
                    <Text style={RegisterStyle.btnText} onPress={()=>{navigation.navigate("Register2")}}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}