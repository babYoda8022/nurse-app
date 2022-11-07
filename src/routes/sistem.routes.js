import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen, Navigator} = createBottomTabNavigator()

import { SistemHome } from "../screens/sistem";


export function Sistem(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name="SistemHome"
                component={ SistemHome }
            />
        </Navigator>
    )
}