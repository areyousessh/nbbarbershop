import React from 'react';
import {Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import Swiper from 'react-native-swiper';
import { theme } from '../../global/theme';
import styles from './styles'


export function Home() {
return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Swiper style={styles.swiper} autoplay loop activeDotColor={theme.colors.activeTint} >
                <Image style={styles.swiperImg} source={require('../../assets/barber1.jpg')}/>
                <Image style={styles.swiperImg} source={require('../../assets/barber2.jpg')}/>
                <Image style={styles.swiperImg} source={require('../../assets/barber3.jpg')}/>
                <Image style={styles.swiperImg} source={require('../../assets/cut1.jpg')}/>
                <Image style={styles.swiperImg} source={require('../../assets/cut2.jpg')}/>
                <Image style={styles.swiperImg} source={require('../../assets/cut3.jpg')}/>
            </Swiper>
            <Text style={styles.text}>
                A Newboss Barbershop foi criada em 2021 pelos sócios Bruno e Mauricio
                que já haviam trabalhado juntos anteriormente em outras barbearias.{'\n'}{'\n'}Fazendo 
                sucesso desde o inicio hoje a barbearia passa por um processo de melhoria e expansão
                para poder aumentar o conforto aos nossos clientes e o numero de profissionais.{'\n'}{'\n'}
                Hoje contamos com 3 barbeiros super capacitados, um bar equipado e um ambiente tranquilo aonde
                você pode acompanhar o jogo de futebol do seu time.           
            </Text>
            <Text style={styles.title}>
                Conheça a nossa equipe
            </Text>
            <View style={styles.card}>
                <Image style={styles.avatar} source={require('../../assets/Profile-Bruno.jpg')}/>
                <View style={styles.textbox}>
                    <Text style={styles.textbarber}>Lorem ipsum dolor sit amet. Eos quia ullam ex suscipit repellendus qui minima unde! Est nihil velit aut optio fuga non fugiat amet qui assumenda consequatur 
                          rem adipisci odit est omnis consequatur quo quas architecto! Vel ratione ratione et porro aperiam non animi corporis</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image style={styles.avatar} source={require('../../assets/Profile-Mauricio.jpg')}/>
                <View style={styles.textbox}>
                    <Text style={styles.textbarber}>Lorem ipsum dolor sit amet. Eos quia ullam ex suscipit repellendus qui minima unde! Est nihil velit aut optio fuga non fugiat amet qui assumenda consequatur 
                          rem adipisci odit est omnis consequatur quo quas architecto! Vel ratione ratione et porro aperiam non animi corporis</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image style={styles.avatar} source={require('../../assets/Profile-Luiz.jpg')}/>
                <View style={styles.textbox}>
                    <Text style={styles.textbarber}>Lorem ipsum dolor sit amet. Eos quia ullam ex suscipit repellendus qui minima unde! Est nihil velit aut optio fuga non fugiat amet qui assumenda consequatur 
                          rem adipisci odit est omnis consequatur quo quas architecto! Vel ratione ratione et porro aperiam non animi corporis</Text>
                </View>
            </View>
            

        </ScrollView>
    </SafeAreaView>
    )
}

