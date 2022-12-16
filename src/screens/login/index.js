import { useState } from "react";
import { View, Image, Text, TouchableOpacity, TextInput} from 'react-native';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebaseConection";

import { LoginStyle } from "./loginStyle";

export function Login( { navigation } ){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signInUser(){
        console.log(email)
        await signInWithEmailAndPassword(auth, email, password)
        .then(() =>{
            {
                navigation.navigate('SistemHome');
            }
        }).catch(error => alert(error));
    }

    return(
        <View style={LoginStyle.container}>
            <View style={LoginStyle.box1}>
                <Image source={require("../../img/logo.png")}
                    style={LoginStyle.img}/>
                <TextInput 
                    placeholder="Email"  
                    style={LoginStyle.txtInput}
                    onChangeText={value => setEmail(value)}/>
                <TextInput 
                    placeholder="Password"  
                    style={LoginStyle.txtInput}
                    onChangeText={value => setPassword(value)}/>
                <Text style={LoginStyle.txtLink1}>Esqueci minha senha</Text>
                <TouchableOpacity style={LoginStyle.btn1} onPress={()=>{signInUser()}}>
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