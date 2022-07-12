import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Schedules } from "../../screens/Schedules";
import { Profile } from "../../screens/Profile";
import { Home } from "../../screens/Home";
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import {getBottomSpace} from 'react-native-iphone-x-helper'


export function BottomTabs() {

    const Tab = createBottomTabNavigator()

    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false, tabBarActiveTintColor:"#F51C12", tabBarInactiveTintColor:"#869292", tabBarStyle:{backgroundColor:"#121212", paddingBottom: getBottomSpace() -5,  } }}>
            <Tab.Screen name="Horários" component={Schedules} options={{tabBarIcon:({size, color}) => (
                <MaterialIcons name="schedule" size={24} color="white"/> )}} />

<       Tab.Screen name="Home" component={Home} options={{tabBarIcon:({size, color}) => (
                <AntDesign name="home" size={24} color="white"/>)}}/>

        <Tab.Screen name="Perfil" component={Profile} options={{tabBarIcon:({size, color}) => (
                <AntDesign name="user" size={24} color="white"/>)}}/>

        </Tab.Navigator>
    )
}
