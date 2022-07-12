import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Keyboard, Image, TextInput, Alert} from "react-native";
import { theme } from "../../global/theme";
import { BackButton } from "../../components/BackButton";
import { SmallButton } from "../../components/SmallButton";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Routes/Stack/Models/Index";

export function ForgotPassword() {

    const [email, setEmail] = useState('')
    const navigation = useNavigation<propsStack>()

return(
    <View style={styles.container}>
        <BackButton onPress={() =>navigation.goBack()}/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.box}>
                <Image style={styles.logo} source={require("../../assets/logo.png")} />
                <TextInput placeholder="Digite seu email" style={styles.input} placeholderTextColor={theme.colors.normalText} onChangeText={setEmail} autoCorrect={false}/>
                <SmallButton title="Recuperar a Senha" />
        </View>
        </TouchableWithoutFeedback>
    </View>
)
}
