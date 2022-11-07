import { StyleSheet } from 'react-native';

export const RegisterStyle = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#65D6AD",
    },
    box1:{
        padding: 25,
    },
    box2:{
        flexDirection: "row",
        justifyContent:"space-between",
    },
    box3:{
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
        paddingLeft: 40,
        backgroundColor:"#0C008C",
        padding: 20,
        borderTopLeftRadius: 40,
    }
})