import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps, Image } from "react-native";
import { styles } from "./styles";


type Props = TouchableOpacityProps & {
    title: string
}

export function SocialButtonGoogle({title, ...rest} : Props) {
return(
    <TouchableOpacity style={styles.container} {...rest}>
        <View style={styles.iconWrapper}>
            <Image source={require('../../assets/google-logo.png')} style={styles.logo}/>
        </View>
            <Text style={styles.title}>
                {title}
            </Text>
    </TouchableOpacity>
)
}
