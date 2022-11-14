import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
    container:{
        backgroundColor:"#65D6AD",
        height:"100%",
        justifyContent: "center"
    },
    img:{
        width: 360,
        height: 160
    },
    container2:{
        flex: 1,
        backgroundColor: "white",
    },
    img2:{
        height: 700,
    },
    bottom:{
        backgroundColor: "#65D6AD",
        position: "absolute",
        borderTopLeftRadius: 50,
        top: "67%",
        height: "33%",
        width: "100%"
    },
    btnBack:{
        paddingRight: 60,
        backgroundColor:"#0C008C",
        padding: 20,
        borderTopRightRadius: 40,
    },
    btnText:{
        color: "#EFFCF6",
        fontSize: 18,
    },
    btnNext:{
        paddingLeft: 40,
        backgroundColor:"#0C008C",
        padding: 20,
        borderTopLeftRadius: 40,
    },
    box1:{
        alignItems: "center",
        height: 160,
        margin: 25,
    },
    box2:{
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "flex-end"
    },
    txt:{
        textAlign: "center",
        color:"#0C008C",
        paddingTop: 35,
        fontSize: 25,
    },
    bolinha:{
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        height: 12,
        width: 12,
        backgroundColor: "white",
        borderRadius: 10
    }
})