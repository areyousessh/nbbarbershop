import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps, Image } from "react-native";
import { styles } from "./styles";


type Props = TouchableOpacityProps & {
    title: string
}

export function SocialButtonPhone({title, ...rest} : Props) {
return(
    <TouchableOpacity style={styles.container}>
        <View style={styles.iconWrapper}>
            <Image source={require('../../assets/phone-logo.png')} style={styles.logo}/>
        </View>
            <Text style={styles.title}>
                {title}
            </Text>
    </TouchableOpacity>
)
}
