import { React, useState } from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { HomeStyle } from "./homeStyle";

export function Home( { navigation } ){

    const [screen, setScreen] = useState(<Image style={HomeStyle.img} source={require("../../img/logo.png")}/>)

    setInterval(()=>{
        setScreen(e=><Home2 navigation={navigation}/>)
    }, 2000)

    return(
        <View style={HomeStyle.container}>
           { screen }
        </View>
    )
}

export function Home2( { navigation }){

    const [txt, setTxt] = useState("Aqui você encontra serviços de Enfermagem perto de você!")
    const [color1, setColor1] = useState("white")
    const [color2, setColor2] = useState("grey")
    const [cont, setCount] = useState(0)
    const [img, setImg] = useState(require("../../img/img1.png"))

    function next(){
        if(cont < 1){
            setTxt(e => "Ou você está precisando de um cuidador de idoso?")
            setColor2(e => "white")
            setColor1(e => "grey")
            setCount(e => e+1)
            setImg(e => require("../../img/img2.png"))
        }
        if(cont == 1){
            navigation.navigate("Login")
        }
    }
    function back(){
        if(cont == 1){
            setTxt(e => "Aqui você encontra serviços de Enfermagem perto de você!")
            setColor2(e => "grey")
            setColor1(e=> "white")
            setCount(e=> e-1)
            setImg(e => require("../../img/img1.png"))
        }
    }

    return(
        <View style={HomeStyle.container2}>
            <Image style={HomeStyle.img2} source={img}/>
            <View style={HomeStyle.bottom}>
                <View style={HomeStyle.box1}>
                    <View style={{flexDirection: "row"}}>    
                        <View style={[HomeStyle.bolinha, {backgroundColor: color1}]}></View>
                        <View style={[HomeStyle.bolinha, {backgroundColor: color2}]}></View>
                    </View>
                    <Text style={HomeStyle.txt}>{txt}</Text>
                </View>
                <View style={HomeStyle.box2}>
                    <TouchableOpacity style={HomeStyle.btnBack} onPress={back}>
                        <Text style={HomeStyle.btnText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={HomeStyle.btnNext} onPress={next}>
                        <Text style={HomeStyle.btnText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}