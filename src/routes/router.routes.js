import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/login";
import { Register } from "../screens/register";
import { Register2 } from "../screens/register/register2";

import { Sistem } from "./sistem.routes";

const { Screen, Navigator} = createNativeStackNavigator()

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
                name="Sistem"
                component={ Sistem }
            />
            
        </Navigator>
    )
}