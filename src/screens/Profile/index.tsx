import React, { useEffect, useState } from "react";
import {View, Image, TouchableOpacity, Alert, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import {styles} from "./styles";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../../global/theme";
import auth from "@react-native-firebase/auth"
import { SmallButton } from "../../components/SmallButton";
import uuid from 'react-native-uuid'
import  AsyncStorage  from "@react-native-async-storage/async-storage";





export function Profile () {


  const [avatar, setAvatar] = useState();
  const [name, setName] = useState("");
        
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Newboss precisa de autorização para acessar sua galeria !");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }
    setAvatar(pickerResult)
  }


  async function handleNew() {
    const id = uuid.v4();
    const newData = {
      id,
      name
    };
    await AsyncStorage.setItem("@newboss:userdata", JSON.stringify(newData));
  }

  async function handleFetchData() {
    const response = await AsyncStorage.getItem("@newboss:userdata")
    const data = response ? JSON.parse(response) : {}
    console.log(data)
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  function handleLogout() {
    auth().signOut()
  }

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7} onPress={handleLogout}>
            <MaterialCommunityIcons name="logout" size={24} color={theme.colors.activeTint} />
          </TouchableOpacity>

            <View style={styles.box}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TouchableOpacity style={styles.avatarButton} activeOpacity={0.7} onPress={openImagePickerAsync}>
                <Image
                source={{ uri: avatar ? avatar.uri : "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" }}
                style={styles.avatar}
                />
              </TouchableOpacity>
          </TouchableWithoutFeedback>
            </View>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} onChangeText={setName}>

            </TextInput>
          </View>
          <View style={styles.saveButton}>
              <SmallButton title="Salvar" onPress={handleNew}/>
          </View>

    </View>
    )

}

