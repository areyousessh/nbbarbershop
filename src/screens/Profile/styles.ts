import {StyleSheet} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundPrimary,
     
    },

    logoutButton: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        marginTop: getStatusBarHeight() + 30,
        marginLeft: 5
    },

    box: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },

    avatarButton: {
        backgroundColor: 'transparent',
        width: 150,
        height: 150,
        borderRadius: 75
    },

    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        
    },

    inputBox: {
        width: '100%',
        alignItems: 'center'
      },

    input: {
        textAlign: 'center',
        fontWeight: 'bold',
        width: '85%',
        height: 40,
        borderBottomWidth: 1,
        borderColor: theme.colors.activeTint,
        marginTop: 40,
        marginBottom: 40,
        color: theme.colors.normalText
      },

    saveButton: {
        alignItems: 'center'
    }

    
   


   

})


