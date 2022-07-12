import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
    placeholder: string
}

export function Input({placeholder, ...rest} : Props) {
return(
    <TextInput placeholder={placeholder} style={styles.input} {...rest}/> 
)
}
