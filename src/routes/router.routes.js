import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Screen, Navigator} = createNativeStackNavigator()

import { Home } from "../screens/home"
import { Login } from "../screens/login";
import { Register } from "../screens/register";
import { Register2 } from "../screens/register/register2";
import { SistemHome } from "../screens/sistem";
import { ServiceMedicamento, ServiceAvalicao,
         ServiceHigiCui, ServiceOrientacao,
         ServiceSondagem, ServiceCurativo,
         ServiceCuidadores, ServiceOstomia } from "../screens/serviceInfo";

export function Router() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Home"
                component={ Home }
            />
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
                name="ServiceMedicamento"
                component={ ServiceMedicamento }
            />
            <Screen
                name="ServiceAvaliacao"
                component={ ServiceAvalicao }
            />
            <Screen
                name="ServiceHigiCui"
                component={ ServiceHigiCui }
            />
            <Screen
                name="ServiceOrientacao"
                component={ ServiceOrientacao }
            />
            <Screen
                name="ServiceSondagem"
                component={ ServiceSondagem}
            />
            <Screen
                name="ServiceCurativo"
                component={ ServiceCurativo }
            />
            <Screen
                name="ServiceCuidadores"
                component={ ServiceCuidadores }
            />
            <Screen
                name="ServiceOstomia"
                component={ ServiceOstomia }
            />
            
        </Navigator>
    )
}