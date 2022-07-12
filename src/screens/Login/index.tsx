import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, Image, Alert } from "react-native";
import { styles } from "./styles";
import {Input} from "../../components/Input"
import { SmallButton } from "../../components/SmallButton";
import { BorderlessButton } from "../../components/BorderlessButton";
import { SocialButtonGoogle } from "../../components/SocialButtonGoogle";
import { SocialButtonPhone } from "../../components/SocialButtonPhone";
import { useNavigation } from '@react-navigation/native';
import { propsStack } from "../../Routes/Stack/Models/Index";



export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation<propsStack>()

    return(
        <View style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.box}>
            <Image style={styles.logo} source={require("../../assets/logo.png")} />
            <Input placeholder="Insira seu email ou telefone" onChangeText={setEmail} autoCorrect={false}/>
            <Input placeholder="Insira sua senha" onChangeText={setPassword} secureTextEntry={true} autoCorrect={false}/>
            <SmallButton title="Entrar" onPress={() => navigation.navigate('Home')}/>
        <View style={styles.textBox}>
            <Text style={styles.text}>
                Não tem cadastro ? {'\n'}
            </Text>
            <BorderlessButton title="Clique Aqui" onPress={() => navigation.navigate('SignUp')}/>
        </View>
        <View style={styles.socialBox}>
            <SocialButtonGoogle title="Cadastre-se com o Google" />
            <SocialButtonPhone title="Cadastre-se com o Telefone"/>
        </View>
        <View style={styles.forgotBox}>
            <Text style={styles.forgotText}>
                Esqueceu sua senha ? {'\n'}
            </Text>
            <BorderlessButton title="Clique Aqui" onPress={() => navigation.navigate('ForgotPassword')}/>
        </View>
        </View>
    </TouchableWithoutFeedback>
</View>
    )
}