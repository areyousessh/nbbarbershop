import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    price : string
}

export function PriceButton({price, ...rest} : Props) {
return(
 <TouchableOpacity style={styles.priceButton} activeOpacity={0.7} {...rest}>
     <Text style={styles.buttonText}>{price}</Text>
 </TouchableOpacity>
)
}
