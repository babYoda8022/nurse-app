import { StyleSheet } from 'react-native';

export const RegisterStyle2 = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#9FB3C8",
    },
    box1:{
        padding: 25,
    },
    box2:{
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "flex-end"
    },
    txtInput:{
        width:"100%",
        backgroundColor:"#EFFCF6",
        fontSize: 20,
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    txtInput2:{
        width:"40%",
        backgroundColor:"#EFFCF6",
        fontSize: 20,
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    btnText:{
        color: "#EFFCF6",
        fontSize: 18,
    },
    btnBack:{
        paddingRight: 60,
        backgroundColor:"#0C008C",
        padding: 20,
        borderTopRightRadius: 40,
    },
    btnNext:{
        paddingLeft: 26.5,
        backgroundColor:"#0C008C",
        padding: 20,
        borderTopLeftRadius: 40,
    }
})