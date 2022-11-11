import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Screen, Navigator} = createNativeStackNavigator()

import { Login } from "../screens/login";
import { Register } from "../screens/register";
import { Register2 } from "../screens/register/register2";
import { SistemHome } from "../screens/sistem";
import { Header } from "../components/header";

export function Router() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Login"
                component={ Login }
            />
            <Screen
                name="Register"
                component={ Register }
            />
            <Screen
                name="Register2"
                component={ Register2 }
            />
            <Screen
                name="SistemHome"
                component={ SistemHome }
            />
            <Screen
                name="Header"
                component={ Header }
            />
        </Navigator>
    )
}