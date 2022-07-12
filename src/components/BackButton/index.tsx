import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { theme } from "../../global/theme";
import { styles } from "./styles";


type Props = TouchableOpacityProps & {

}

export function BackButton({...rest} : Props) {
return(
    <View>
        <TouchableOpacity style={styles.container} {...rest}>
            <AntDesign name="back" size={24} color={theme.colors.activeTint} />
        </TouchableOpacity>
    </View>
)
}
