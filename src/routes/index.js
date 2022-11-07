import { NavigationContainer } from "@react-navigation/native";

import { Router } from "./router.routes";

export function Routes(){
    return (    
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    )
}