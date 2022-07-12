import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontFamily: theme.fonts.textHeading,
        fontWeight: 'bold',
        fontSize: 13,
        color: theme.colors.normalText
    }
})