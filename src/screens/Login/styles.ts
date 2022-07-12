import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.backgroundPrimary
    },

    box: {
        backgroundColor: theme.colors.backgroundPrimary,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight() +20
        
    },

    logo: {
        width: 300,
        height: 250,
    },

    textBox: {
        alignItems: 'center',
        justifyContent: 'center'
    },

  text: {
      marginTop: 20,
      fontFamily: theme.fonts.textNormal,
      fontSize: 13,
      color: theme.colors.normalText
  },

socialBox: {
    marginTop: 40, 
},

forgotBox: {
    alignItems: 'center',
    justifyContent: 'center',
    
},

forgotText: {
    marginTop: 20,
    fontFamily: theme.fonts.textNormal,
    fontSize: 13,
    color: theme.colors.normalText,
   

},

  
})