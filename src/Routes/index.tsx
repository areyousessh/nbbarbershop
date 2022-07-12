import React, { useEffect, useState } from "react";
import {NavigationContainer} from "@react-navigation/native"
import { AuthRoutes } from "./Stack/authRoutes";
import { BottomTabs } from "./BottomTabs";


export function Routes() {

return(
    <NavigationContainer>
       <AuthRoutes />
    </NavigationContainer>
)
}
