import React from "react";
import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

import { Header } from "../../components/header";
import { NavigationTabBar } from "../../components/navigationTabBar";

import { ServiceInfoStyle } from "./serviceInfoStyle";


export function ServiceMedicamento( { navigation } ){
    return(
        <View style={ServiceInfoStyle.container}>
            <Header txt="Medicamentos" require={require("../../img/icons/icon1.png")}/>
            <View style={ServiceInfoStyle.box2}>
                <Text> EM DESENVOVIMENTO</Text>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}

export function ServiceAvalicao( { navigation } ){
    return(
        <View style={ServiceInfoStyle.container}>
            <Header txt="Avaliações" require={require("../../img/icons/icon2.png")}/>
            <View style={ServiceInfoStyle.box2}>
                <Text> EM DESENVOVIMENTO</Text>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}

export function ServiceHigiCui( { navigation } ){
    return(
        <View style={ServiceInfoStyle.container}>
            <Header txt="Higiene e Cuidado" require={require("../../img/icons/icon3.png")}/>
            <View style={ServiceInfoStyle.box2}>
                <Text> EM DESENVOVIMENTO</Text>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}


export function ServiceOrientacao( { navigation } ){
    return(
        <View style={ServiceInfoStyle.container}>
            <Header txt="Orientação" require={require("../../img/icons/icon4.png")}/>
            <View style={ServiceInfoStyle.box2}>
                <Text> EM DESENVOVIMENTO</Text>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}


export function ServiceSondagem( { navigation } ){
    return(
        <View style={ServiceInfoStyle.container}>
            <Header txt="Sondagem" require={require("../../img/icons/icon5.png")}/>
            <View style={ServiceInfoStyle.box2}>
                <Text> EM DESENVOVIMENTO</Text>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}


export function ServiceCurativo( { navigation } ){
    return(
        <View style={ServiceInfoStyle.container}>
            <Header txt="Curativos" require={require("../../img/icons/icon6.png")}/>
            <View style={ServiceInfoStyle.box2}>
                <Text> EM DESENVOVIMENTO</Text>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}

export function ServiceCuidadores( { navigation } ){
    return(
        <View style={ServiceInfoStyle.container}>
            <Header txt="Cuidadores" require={require("../../img/icons/icon7.png")}/>
            <View style={ServiceInfoStyle.box2}>
                <Text> EM DESENVOVIMENTO</Text>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}

export function ServiceOstomia( { navigation } ){
    return(
        <View style={ServiceInfoStyle.container}>
            <Header txt="Ostomias" require={require("../../img/icons/icon8.png")}/>
            <View style={ServiceInfoStyle.box2}>
                <Text> EM DESENVOVIMENTO</Text>
            </View>
            <NavigationTabBar navigation={navigation}/>
        </View>
    )
}