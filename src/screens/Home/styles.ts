import {StyleSheet} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1F1F21',
    
    },

    swiper: {
        height: 350,
        marginTop: getStatusBarHeight() + 5,
        justifyContent: 'center'
    },

    swiperImg: {
        width: '100%',
        height: 330,
        borderRadius: 8,
        
    },

    text: {
        fontFamily: theme.fonts.textHeading,
        color: theme.colors.fields,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10
        
    },

    title: {
        fontFamily: theme.fonts.textHeading,
        fontSize: 24,
        color: theme.colors.fields,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
    },

    card: {
        flex: 1,
        flexDirection: "row",
        width: '100%',
        height: 200,
        marginTop: 50,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 30
    },

    textbox: {
        width: '80%',
        height: 180,
    },

    textbarber: {
        marginTop: 10,
        fontFamily: theme.fonts.textHeading,
        fontWeight: 'bold',
        color: theme.colors.normalText,
        fontSize: 16,
        textAlign: 'center',
        paddingRight: 30
        

    }

    })


export default styles;