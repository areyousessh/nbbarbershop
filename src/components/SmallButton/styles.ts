import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";


export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.activeTint,
        backgroundColor: theme.colors.buttons
    },

    title: {
        fontFamily: theme.fonts.textButton,
        color: theme.colors.inputText
    },

    text: {
        marginTop: 20,
        fontFamily: theme.fonts.textNormal,
        fontSize: 13,
        color: theme.colors.normalText
    },
})