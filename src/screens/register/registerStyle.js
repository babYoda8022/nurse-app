import { StyleSheet } from 'react-native';

export const RegisterStyle = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#65D6AD",
    },
    icon:{
        paddingTop: 35,
        fontSize: 40,
        color:"#0C008C",
    },
    txt:{
        color:"#0C008C",
        fontSize: 25,
    },
    box1:{
        marginTop: 100,
        alignItems:"center"
    },
    box2:{
        padding: 25,
    },
    box3:{
        flexDirection: "row",
        justifyContent:"space-between",
    },
    box4:{
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