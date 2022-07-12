import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundPrimary
    },

    logo: {
        
        width: 300,
        height: 250,
    },

    box: {
        backgroundColor: theme.colors.backgroundPrimary,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',   
    },

    input: {
        textAlign: 'center',
        fontWeight: 'bold',
        width: '85%',
        height: 45,
        borderBottomWidth: 1,
        borderColor: theme.colors.activeTint,
        marginBottom: 30,
        color: theme.colors.normalText
    }
})