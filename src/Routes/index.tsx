import React, { useEffect, useState } from "react";
import {NavigationContainer} from "@react-navigation/native"
import { AuthRoutes } from "./Stack/authRoutes";
import { BottomTabs } from "./BottomTabs";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth"


export function Routes() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null> (null)

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser);
        return subscriber
    }, [])

return(
    <NavigationContainer>
       { user ? <BottomTabs / > : <AuthRoutes />}
    </NavigationContainer>
)
}
