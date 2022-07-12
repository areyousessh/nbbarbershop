import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login} from "../../screens/Login"
import {SignUp} from "../../screens/SignUp";
import {ForgotPassword} from "../../screens/ForgotPassword"




const Stack = createNativeStackNavigator()

export function AuthRoutes() {

    return(
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
        
    )
}
