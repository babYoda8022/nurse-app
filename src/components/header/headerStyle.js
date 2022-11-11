import { StyleSheet } from 'react-native';

export const HeaderStyle = StyleSheet.create({
    container:{
        height:"100%",
    },
    box1:{
        zIndex: 1,
        width: "100%",
        position: "absolute",
        backgroundColor:"#65D6AD",
        height: 110,
        borderBottomRightRadius: 50,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderColor: "#9FB3C8",
        flexDirection: 'row',
        padding: 30,
        paddingTop: 35
    },
    txtBox1:{
        paddingLeft: 200,
        fontSize: 25,
        color: "#0C008C",
    },
    icon:{
        color: "#0C008C",
        paddingLeft: 10,
        paddingTop: 2,
        fontSize: 30
    },
    box2:{
        backgroundColor: "#C6F7E2",
        height: 220,
        borderBottomRightRadius: 50,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderColor: "#9FB3C8",
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 100,
        flexDirection: 'row'
    },
    img:{
        height: 40,
        width: 40,
     },
    txt:{
        fontSize: 25,
        color: "#0C008C",
    }
})