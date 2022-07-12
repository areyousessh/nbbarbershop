import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from './styles'

type Props = TouchableOpacityProps & {
    title: string
}

export function SelectBarberButton({title, ...rest} : Props) {
return(
    <TouchableOpacity activeOpacity={0.7} {...rest} style={styles.container}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
)
}
