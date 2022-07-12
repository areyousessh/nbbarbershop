import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";


export const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 40,
        backgroundColor: theme.colors.activeTint,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

    buttonText: {
        fontFamily: theme.fonts.textButton,
        color: theme.colors.buttons
    }
})