import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";


export const styles = StyleSheet.create({
    priceButton: {
        width: 80,
        height: 40,
        backgroundColor: theme.colors.priceButtonGreen,
        justifyContent: 'center',
        marginLeft: 30,
        borderRadius: 8,
        marginBottom: 5
    },

    buttonText: {
        fontFamily: theme.fonts.textButton,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})