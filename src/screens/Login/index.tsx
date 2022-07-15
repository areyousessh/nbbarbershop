import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, Image, Alert } from "react-native";
import { styles } from "./styles";
import {Input} from "../../components/Input"
import { SmallButton } from "../../components/SmallButton";
import { BorderlessButton } from "../../components/BorderlessButton";
import { SocialButtonGoogle } from "../../components/SocialButtonGoogle";
import { SocialButtonIphone } from "../../components/SocialButtonPhone";
import { useNavigation } from '@react-navigation/native';
import { propsStack } from "../../Routes/Stack/Models/Index";
import {GoogleSignin} from "@react-native-google-signin/google-signin"
import auth from "@react-native-firebase/auth"

GoogleSignin.configure({
    webClientId: '876459169996-or568lu3qn3us8hpaq5s0c83001m6pgu.apps.googleusercontent.com',
    iosClientId: '876459169996-0kpc2jideflbt072iri25agtehgnl9kv.apps.googleusercontent.com',
    scopes: ['https://www.googleapis.com/auth/drive.readonly']
})

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation<propsStack>()

    function handleSignIn() {
        auth()
        .signInWithEmailAndPassword(email,password)
        .catch(handleAuthError)
    }

    async function handleGoogleSignIn() {
        const {idToken} = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
    }

    function handleAuthError(error) {
        if(error.code) {
            switch(error.code) {
                case "auth/wrong-password":
                    Alert.alert("Senha Incorreta !")
                        break;
                case "auth/user-not-found":
                    Alert.alert("Usuário não cadastrado")
                        break;
                case "auth/invalid-email":
                    Alert.alert("Insira um email válido")
                        break;        
            }
        }
    }

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
            <SocialButtonGoogle title="Cadastre-se com o Google" onPress={handleGoogleSignIn}/>
            <SocialButtonIphone title="Cadastre-se com sua conta Apple"/>
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