import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Keyboard, Image, TextInput, Alert, ToastAndroid} from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/theme";
import { BackButton } from "../../components/BackButton";
import { SmallButton } from "../../components/SmallButton";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Routes/Stack/Models/Index";
import auth from "@react-native-firebase/auth"
import Toast from "react-native-toast-message"

export function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigation = useNavigation<propsStack>()

    function handleNewAccount() {
        auth()
        .createUserWithEmailAndPassword(email,password)
        .then(() => Toast.show({
            type: 'success',
            text1: 'Conta',
            text2: 'Sua conta foi criada com sucesso !'
        }))
        .catch((handleAuthError))
    }

    function handleAuthError(error) {
        if(error.code) {
            switch(error.code) {
                case "auth/email-already-in-use":
                    Alert.alert("Esse email já esta cadastrado, por favor utilize outros")
                    break;
                case "auth/weak-password": 
                    Alert.alert("Senha fraca", "Crie uma com pelo menos 6 digitos")
                    break;
                case "auth/invalid-email": 
                    Alert.alert("Insira um email válido")
                    break;
            }
        }
    }


    return(

        <View style={styles.container}>
            <BackButton onPress={() => navigation.goBack()}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.box}>
                <Image style={styles.logo} source={require("../../assets/logo.png")} />
                    <TextInput placeholder="Digite seu nome" style={styles.input} placeholderTextColor={theme.colors.normalText} onChangeText={setName} autoCorrect={false}/>
                    <TextInput placeholder="Digite seu email" style={styles.input} placeholderTextColor={theme.colors.normalText} onChangeText={setEmail} autoCorrect={false}/>
                    <TextInput placeholder="Digite sua senha" style={styles.input} placeholderTextColor={theme.colors.normalText} secureTextEntry={true} onChangeText={setPassword} autoCorrect={false}/>
                    <SmallButton title="Cria Conta" onPress={handleNewAccount}/>
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
    }
