import { StyleSheet } from 'react-native';

export const SistemStyle = StyleSheet.create({
    container:{
        height:"100%",
    },
    box1:{
        zIndex: 1,
        width: "100%",
        position: "absolute",
        backgroundColor:"#65D6AD",
        height: 130,
        borderBottomRightRadius: 50,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderColor: "#9FB3C8",
        flexDirection: 'row',
        padding: 30,
        paddingTop: 45,
    },
    subBox1:{
        
    },
    txtBox1:{
        fontSize: 25,
        color: "#0C008C",
    },
    txt2Box1:{
        fontSize: 17,
        color: "#0C008C",
    },
    icon:{
        color: "#0C008C",
        fontSize: 40,
        paddingTop: 6,
        paddingRight: 15   
    },
    box2:{
        backgroundColor: "#C6F7E2",
        height: 345,
        borderBottomRightRadius: 50,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderColor: "#9FB3C8",
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 115
    },
    box3:{
        flex: 1,
        paddingTop: 15,
    },
    txt:{
        color: "#0C008C",
        fontSize: 22,
        paddingTop: 10
    },
    txtInput:{
        backgroundColor: "white",
        fontSize: 20,
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        width: "85%",
        borderColor: "#0C008C",
        borderWidth: 2,
        borderRadius: 25,
        marginTop: 10,
    }
})