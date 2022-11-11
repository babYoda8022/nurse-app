import React from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import { LoginStyle } from "./loginStyle";

export function Login( { navigation } ){
    return(
        <View style={LoginStyle.container}>
            <View style={LoginStyle.box1}>
                <Image source={require("../../img/logo.png")}
                    style={LoginStyle.img}/>
                <TextInput 
                    placeholder="Email"  
                    style={LoginStyle.txtInput}/>
                <TextInput 
                    placeholder="Login"  
                    style={LoginStyle.txtInput}/>
                <Text style={LoginStyle.txtLink1}>Esqueci minha senha</Text>
                <TouchableOpacity style={LoginStyle.btn1} onPress={()=>{navigation.navigate("SistemHome")}}>
                    <Text style={LoginStyle.txt1}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={LoginStyle.btn2} onPress={()=>{navigation.navigate("Register")}}>
                    <Text style={LoginStyle.txt2}>Quero me cadastrar</Text>
                </TouchableOpacity>
            </View>
            <View style={LoginStyle.box2}>
                <Text style={LoginStyle.txtLink2}>Você é profissional?</Text>
                <TouchableOpacity style={LoginStyle.btn3}>
                    <Text style={LoginStyle.txt3}>Clique aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}