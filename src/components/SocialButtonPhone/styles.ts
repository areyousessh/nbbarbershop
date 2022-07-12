import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";


export const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 45,
        backgroundColor: theme.colors.buttons,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },

    iconWrapper: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.activeTint

    },

    title: {
        flex: 1,
        color: theme.colors.inputText,
        fontSize: 15,
        fontFamily: theme.fonts.textHeading,
        textAlign: 'center'
    },

    logo: {
        width: 40,
        height: 40
    }

  
})