import React, { useState} from "react";
import { Text, View, Image, ScrollView, Modal, TouchableOpacity } from "react-native";
import { PriceButton } from "../../components/PriceButton";
import { SelectBarberButton } from "../../components/SelectBarberButton";
import { styles } from "./styles";

export function Schedules() {
  const [modalVisible, setModalVisible] = useState(false);
  const [showTotal, setShowTotal] = useState(false)


  function openHiddenView() {
    setShowTotal(!showTotal)

  }

  function toggleModal() {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.title}>Agendamento</Text>
      <ScrollView>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Corte</Text>
          <Text style={styles.serviceDescription}>
            corte de cabelo / 30 minutos
          </Text>
          <View style={styles.buttonBox}>
            <PriceButton price="R$30,00" onPress={openHiddenView} />
          </View>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Barba</Text>
          <Text style={styles.serviceDescription}>
            Ajuste de barba / 30 minutos
          </Text>
          <View style={styles.buttonBox}>
            <PriceButton price="R$30,00"  />
          </View>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Sobrancelha</Text>
          <Text style={styles.serviceDescription}>
            Ajuste de sobrancelha / 20 minutos
          </Text>
          <View style={styles.buttonBox}>
            <PriceButton price="R$20,00"  />
          </View>
        </View>
      </ScrollView>

        {
          showTotal ? (
            <View style={styles.totalPriceContainer}>
            <SelectBarberButton title="Selecionar Barbeiro" onPress={toggleModal}/>
            <Text style={styles.totalValue}>Total :  </Text>
        </View>
          ) : null
        }

        <Modal animationType="slide" visible={modalVisible}>
          <ScrollView>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>
                Selecione o seu barbeiro
              </Text>

            
            <TouchableOpacity activeOpacity={0.7}>
              <Image style={styles.barberPic}source={require('../../assets/Profile-Bruno.jpg')}/>
            </TouchableOpacity>
              <Text style={styles.barberName}>Bruno</Text>

            <TouchableOpacity activeOpacity={0.7}>
              <Image style={styles.barberPic}source={require('../../assets/Profile-Mauricio.jpg')}/>
            </TouchableOpacity>
              <Text style={styles.barberName}>Mauricio</Text>

            <TouchableOpacity activeOpacity={0.7}>
              <Image style={styles.barberPic}source={require('../../assets/Profile-Luiz.jpg')}/>
            </TouchableOpacity>
              <Text style={styles.barberName}>Luiz</Text>
            </View>
          </ScrollView>  
        </Modal>

    </View>
  );
}
