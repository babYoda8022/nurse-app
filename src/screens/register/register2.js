import React from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import { RegisterStyle2 } from "./registerStyle2";

export function Register2( { navigation } ){
    return(
        <View style={RegisterStyle2.container}>
            <View style={RegisterStyle2.box1}>
                <Image />
                <Text>Dados Residenciais</Text>
                <TextInput placeholder="Endereço" style={RegisterStyle2.txtInput}/>
                <TextInput placeholder="Bairro" style={RegisterStyle2.txtInput}/>
                <TextInput placeholder="CEP" style={RegisterStyle2.txtInput}/>
                <TextInput placeholder="Estado" style={RegisterStyle2.txtInput}/>
                <TextInput placeholder="Telefone" style={RegisterStyle2.txtInput}/>
            </View>
            <View style={RegisterStyle2.box2}>
                <TouchableOpacity style={RegisterStyle2.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Text style={RegisterStyle2.btnText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={RegisterStyle2.btnNext}>
                    <Text style={RegisterStyle2.btnText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}